> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/deviceconnectiontype](https://developer.apple.com/documentation/appstoreconnectapi/deviceconnectiontype)

# DeviceConnectionType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 3.6+

A string that represents the ways a device was connected for a specific crash.

## Declaration

```
string DeviceConnectionType
```

## Possible Values

- `WIFI`:
- `MOBILE_DATA`:
- `WIRE`:
- `UNKNOWN`:
- `NONE`:

## See Also

### Objects

- [BetaCrashLog](betacrashlog.md): The crash log details from a TestFlight tester’s device, including the stack trace and metadata captured at the time of the crash.
- [BetaCrashLogResponse](betacrashlogresponse.md): A response containing a single crash log from a TestFlight tester’s device.
- [BetaFeedbackCrashSubmission](betafeedbackcrashsubmission.md): A crash report submitted by a TestFlight beta tester, linked to the build, bundle, and tester that produced it.
- [BetaFeedbackCrashSubmissionResponse](betafeedbackcrashsubmissionresponse.md): A response containing a single crash report submitted by a TestFlight beta tester.
- [BetaFeedbackCrashSubmissionsResponse](betafeedbackcrashsubmissionsresponse.md): A response containing a list of crash reports submitted by TestFlight beta testers.
- [BetaFeedbackCrashSubmissionCrashLogLinkageResponse](betafeedbackcrashsubmissioncrashloglinkageresponse.md): A response containing the resource identifier of the crash log linked to a crash feedback submission.
