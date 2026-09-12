> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackcrashsubmission](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackcrashsubmission)

# BetaFeedbackCrashSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A crash report submitted by a TestFlight beta tester, linked to the build, bundle, and tester that produced it.

## Declaration

```
object BetaFeedbackCrashSubmission
```

## Properties

- `attributes` — `BetaFeedbackCrashSubmission.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `BetaFeedbackCrashSubmission.Relationships`:
- `type` — `string` (required): **Allowed values:** `betaFeedbackCrashSubmissions`

## Topics

### Dictionaries

- [BetaFeedbackCrashSubmission.Attributes](betafeedbackcrashsubmission/attributes-data.dictionary.md): Attributes that describe a beta feedback crash submission resource.
- [BetaFeedbackCrashSubmission.Relationships](betafeedbackcrashsubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaCrashLog](betacrashlog.md): The crash log details from a TestFlight tester’s device, including the stack trace and metadata captured at the time of the crash.
- [BetaCrashLogResponse](betacrashlogresponse.md): A response containing a single crash log from a TestFlight tester’s device.
- [BetaFeedbackCrashSubmissionResponse](betafeedbackcrashsubmissionresponse.md): A response containing a single crash report submitted by a TestFlight beta tester.
- [BetaFeedbackCrashSubmissionsResponse](betafeedbackcrashsubmissionsresponse.md): A response containing a list of crash reports submitted by TestFlight beta testers.
- [BetaFeedbackCrashSubmissionCrashLogLinkageResponse](betafeedbackcrashsubmissioncrashloglinkageresponse.md): A response containing the resource identifier of the crash log linked to a crash feedback submission.
- [DeviceConnectionType](deviceconnectiontype.md): A string that represents the ways a device was connected for a specific crash.
