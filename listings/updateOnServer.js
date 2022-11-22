/**
    * Updates an existing meeting on the server for storage in database
    */
 async function updateOnServer() {
    let formData = this.toFormData();

    const url = `${stubegru.constants.BASE_URL}/modules/calendar/dates/update_calendar_date.php`;
    let meetingResp = await fetch(url, {
        method: 'POST',
        body: formData
    });
    meetingResp = await meetingResp.json();
    return meetingResp;
}