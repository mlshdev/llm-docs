> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackcrashsubmissioncrashloglinkageresponse](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackcrashsubmissioncrashloglinkageresponse)

# BetaFeedbackCrashSubmissionCrashLogLinkageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing the resource identifier of the crash log linked to a crash feedback submission.

## Declaration

```
object BetaFeedbackCrashSubmissionCrashLogLinkageResponse
```

## Properties

- `data` — `BetaFeedbackCrashSubmissionCrashLogLinkageResponse.Data` (required):
- `links` — `DocumentLinks` (required):

## Topics

### Dictionaries

- [BetaFeedbackCrashSubmissionCrashLogLinkageResponse.Data](betafeedbackcrashsubmissioncrashloglinkageresponse/data-data.dictionary.md)

## See Also

### Objects

- [BetaCrashLog](betacrashlog.md): The crash log details from a TestFlight tester’s device, including the stack trace and metadata captured at the time of the crash.
- [BetaCrashLogResponse](betacrashlogresponse.md): A response containing a single crash log from a TestFlight tester’s device.
- [BetaFeedbackCrashSubmission](betafeedbackcrashsubmission.md): A crash report submitted by a TestFlight beta tester, linked to the build, bundle, and tester that produced it.
- [BetaFeedbackCrashSubmissionResponse](betafeedbackcrashsubmissionresponse.md): A response containing a single crash report submitted by a TestFlight beta tester.
- [BetaFeedbackCrashSubmissionsResponse](betafeedbackcrashsubmissionsresponse.md): A response containing a list of crash reports submitted by TestFlight beta testers.
- [DeviceConnectionType](deviceconnectiontype.md): A string that represents the ways a device was connected for a specific crash.
