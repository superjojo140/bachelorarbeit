function addMeetings(meetingList) {
    //Generate events for fullcalendar
    let ownUserId = stubegru.currentUser.id;
    let ownEvents = [];
    let othersEvents = [];

    for (let inMeeting of meetingList) {
        let outMeeting = {
            title: inMeeting.title,
            start: `${inMeeting.date}T${inMeeting.start}`,
            end: `${inMeeting.date}T${inMeeting.end}`,
            extendedProps: inMeeting
        };

        if (inMeeting.ownerId == ownUserId) { ownEvents.push(outMeeting); } else { othersEvents.push(outMeeting); }
    }

    //Generate and add Eventsource
    this.fullCalendar.addEventSource({
        id: "stubegru-own-events",
        events: ownEvents,
        color: "#2196f3",
        classNames: ["pointer"]
    });

    this.fullCalendar.addEventSource({
        id: "stubegru-others-events",
        events: othersEvents,
        color: "#999ca1",
        classNames: ["pointer"]
    });
}