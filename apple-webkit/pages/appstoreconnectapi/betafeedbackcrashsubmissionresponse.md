> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackcrashsubmissionresponse](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackcrashsubmissionresponse)

# BetaFeedbackCrashSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single crash report submitted by a TestFlight beta tester.

## Declaration

```
object BetaFeedbackCrashSubmissionResponse
```

## Properties

- `data` — `BetaFeedbackCrashSubmission` (required):
- `included` — `[*]`: **Allowed types:** `BetaTester`, `Build`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [BetaCrashLog](betacrashlog.md): The crash log details from a TestFlight tester’s device, including the stack trace and metadata captured at the time of the crash.
- [BetaCrashLogResponse](betacrashlogresponse.md): A response containing a single crash log from a TestFlight tester’s device.
- [BetaFeedbackCrashSubmission](betafeedbackcrashsubmission.md): A crash report submitted by a TestFlight beta tester, linked to the build, bundle, and tester that produced it.
- [BetaFeedbackCrashSubmissionsResponse](betafeedbackcrashsubmissionsresponse.md): A response containing a list of crash reports submitted by TestFlight beta testers.
- [BetaFeedbackCrashSubmissionCrashLogLinkageResponse](betafeedbackcrashsubmissioncrashloglinkageresponse.md): A response containing the resource identifier of the crash log linked to a crash feedback submission.
- [DeviceConnectionType](deviceconnectiontype.md): A string that represents the ways a device was connected for a specific crash.
