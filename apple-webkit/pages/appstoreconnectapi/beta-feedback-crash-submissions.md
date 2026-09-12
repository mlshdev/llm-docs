> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/beta-feedback-crash-submissions](https://developer.apple.com/documentation/appstoreconnectapi/beta-feedback-crash-submissions)

# Beta feedback crash submissions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Get TestFlight feedback crashes from beta testers for your apps.

<a id="overview"></a>

## Overview

Use this API to read details about crashes submitted by testers while testing your beta app builds. There are many filters available for these endpoints to help you identify patterns and isolate issues.

You can get new beta feedback crash submissions in two ways:

- Make active `GET` request to look up new beta feedback crash submissions.
- Set up a webhook to get a notification when there is new beta feedback crash submissions. Then look up the corresponding feedback. To learn more, see [Webhook notifications](webhook-notifications.md).

To manage beta feedback crash submissions, be sure you have one of the following user roles:

- `ADMIN`
- `APP MANAGER`
- `DEVELOPER`

Both Team and Individual keys can use these endpoints with the correct role.

## Topics

### Reading and deleting beta feedback crash submissions

- [List All Beta Feedback Crash Submissions for an App](get-v1-apps-_id_-betafeedbackcrashsubmissions.md): Get the beta feedback crash submissions for a specific app.
- [List all beta feedback crash submission ids for an app](get-v1-apps-_id_-relationships-betafeedbackcrashsubmissions.md): Get a list of beta feedback crash submissions for a specific app.
- [Read Beta Feedback Crash Submission Information](get-v1-betafeedbackcrashsubmissions-_id_.md): Get information for a specific beta feedback crash submission.
- [Read the Crash Log for a Beta Feedback Crash Submission](get-v1-betafeedbackcrashsubmissions-_id_-crashlog.md): Get crash log information for a specific beta feedback crash submission.
- [Get the crash log ID for a beta feedback crash submission](get-v1-betafeedbackcrashsubmissions-_id_-relationships-crashlog.md)
- [Delete a Beta Feedback Crash Submission](delete-v1-betafeedbackcrashsubmissions-_id_.md): Delete a beta feedback crash submission from your app.

### Read beta crash logs

- [Read Beta Crash Log Information](get-v1-betacrashlogs-_id_.md): Get crash log details for a specific beta feedback crash submission.

### Objects

- [BetaCrashLog](betacrashlog.md): The crash log details from a TestFlight tester’s device, including the stack trace and metadata captured at the time of the crash.
- [BetaCrashLogResponse](betacrashlogresponse.md): A response containing a single crash log from a TestFlight tester’s device.
- [BetaFeedbackCrashSubmission](betafeedbackcrashsubmission.md): A crash report submitted by a TestFlight beta tester, linked to the build, bundle, and tester that produced it.
- [BetaFeedbackCrashSubmissionResponse](betafeedbackcrashsubmissionresponse.md): A response containing a single crash report submitted by a TestFlight beta tester.
- [BetaFeedbackCrashSubmissionsResponse](betafeedbackcrashsubmissionsresponse.md): A response containing a list of crash reports submitted by TestFlight beta testers.
- [BetaFeedbackCrashSubmissionCrashLogLinkageResponse](betafeedbackcrashsubmissioncrashloglinkageresponse.md): A response containing the resource identifier of the crash log linked to a crash feedback submission.
- [DeviceConnectionType](deviceconnectiontype.md): A string that represents the ways a device was connected for a specific crash.

## See Also

### Beta Feedback

- [Beta feedback screenshot submissions](beta-feedback-screenshot-submissions.md): Get Testflight feedback screenshots from beta testers for your apps.
