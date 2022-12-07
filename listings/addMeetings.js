function addMeetings(meetingList) {
    //Generate events for fullcalendar
    let ownUserId = stubegru.currentUser.id;
    let ownEvents = { free: [], assigned: [] };
    let othersEvents = { free: [], assigned: [] };

    for (let inMeeting of meetingList) {
        let outMeeting = {
            title: inMeeting.owner,
            start: `${inMeeting.date}T${inMeeting.start}`,
            end: `${inMeeting.date}T${inMeeting.end}`,
            extendedProps: inMeeting
        };

        //Sort meetings by free/assigned and own/others
        if (inMeeting.ownerId == ownUserId) {
            (inMeeting.teilnehmer && inMeeting.teilnehmer != "") ?
                ownEvents.assigned.push(outMeeting) :
                ownEvents.free.push(outMeeting);
        } else {
            (inMeeting.teilnehmer && inMeeting.teilnehmer != "") ?
                othersEvents.assigned.push(outMeeting) :
                othersEvents.free.push(outMeeting);
        }
    }

    //Generate and add Eventsource
    this.fullCalendar.addEventSource({
        id: "stubegru-own-free-events",
        events: ownEvents.free,
        color: "#5cb85c",
        classNames: ["pointer"]
    });
    this.fullCalendar.addEventSource({
        id: "stubegru-own-assigned-events",
        events: ownEvents.assigned,
        color: "#d9534f",
        classNames: ["pointer"]
    });
    this.fullCalendar.addEventSource({
        id: "stubegru-others-free-events",
        events: othersEvents.free,
        color: "#5cb85c",
        classNames: ["pointer"]
    });
    this.fullCalendar.addEventSource({
        id: "stubegru-others-assigned-events",
        events: othersEvents.assigned,
        color: "#d9534f",
        classNames: ["pointer"]
    });
}