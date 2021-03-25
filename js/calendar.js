// Insert Google Calendar in <div id="calendar">
//
// Uses the FullCalendar library and connects to Google Calendar
// https://fullcalendar.io/docs
// https://fullcalendar.io/docs/google-calendar
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // Google Calendar API, DO NOT CHANGE
    // https://fullcalendar.io/docs/google-calendar
    googleCalendarApiKey: "AIzaSyA27Qo0wIpl_w0D-Css6g4YTJCuPFP_Jyk",

    // Google Calendar ID CHANGE THIS EACH SEMESTER
    events: {
      googleCalendarId:
        "c_ss6005oie3gbjfpemirdf8387s@group.calendar.google.com",
    },

    // Tool bar options.  Hide "today" button on mobile to save space.
    // https://fullcalendar.io/docs/headerToolbar
    headerToolbar: {
      end: "today prev,next",
    },

    // Selectively recolor calendar events
    // https://fullcalendar.io/docs/event-render-hooks
    eventContent: recolorCalendarEvent,

    // Add click-for-popup to calendar events
    // https://fullcalendar.io/docs/event-render-hooks
    eventDidMount: addPopup,

    aspectRatio: 1.35,
  });
  calendar.render();
});

function recolorCalendarEvent(arg) {
  // Change calendar event colors based on string prefix
  var color_basil = "rgb(57, 125, 73)";
  var color_cornflowerblue = "rgb(100, 149, 237)";
  var color_blueberry = "rgb(64, 84, 175)";
  var color_saddlebrown = "rgb(119, 33, 32)";
  var color_darkseagreen = "rgb(143, 188, 143)";
  if (
    arg.event.title.toLowerCase().includes("due") ||
    arg.event.title.toLowerCase().includes("deadline") ||
    arg.event.title.toLowerCase().includes("exam")
  ) {
    arg.backgroundColor = color_saddlebrown;
    arg.borderColor = color_saddlebrown;
  } else if (arg.event.title.toLowerCase().includes("lecture")) {
    arg.backgroundColor = color_darkseagreen;
    arg.borderColor = color_darkseagreen;
  } else if (arg.event.title.toLowerCase().includes("lab")) {
    arg.backgroundColor = color_basil;
    arg.borderColor = color_basil;
  } else if (arg.event.title.toLowerCase().includes("proffice hours")) {
    arg.backgroundColor = color_blueberry;
    arg.borderColor = color_blueberry;
  } else if (arg.event.title.toLowerCase().includes("office hours")) {
    arg.backgroundColor = color_cornflowerblue;
    arg.borderColor = color_cornflowerblue;
  }
}

function addPopup(arg) {
  // Add a popup to a calendar event
  //
  // arg.event.extendedProps contains extra information from the Google
  // Calendar event, e.g., description and location.
  var element = arg.el;
  var location = arg.event.extendedProps.location || "";
  var description = arg.event.extendedProps.description || "";

  // Remove link to Google Calendar automatically added by FullCalendar
  $(element).removeAttr("href");

  // Add Popup to DOM, links in the location field are clickable
  // https://semantic-ui.com/modules/popup.html#/usage
  //
  // NOTE: overflow:scroll avoids text spilling out of the popup on iOS.
  if (location.toLowerCase().startsWith("http")) {
    var location_html = `<a href="${location}" target="_blank">${location}</a>`;
  } else {
    var location_html = `${location}<br>${description}`;
  }
  $(element).popup({
    on: "click",
    html: `
              <div class="header">${arg.event.title}</div>
              <div class="content" style="overflow:auto">${location_html}</div>
            `,
  });
}
