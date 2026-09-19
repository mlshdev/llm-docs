> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/cancelinputreportretry

# cancelInputReportRetry

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Cancels a retry attempt for an input report request.

## Declaration

```objectivec
virtual void cancelInputReportRetry();
```

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. The [CompleteInputReport](completeinputreport.md) method calls it automatically when a retry attempt succeeds.

## See Also

### Managing Device Reports

- [newReportDescriptor](newreportdescriptor.md): Returns the data in the HID device’s report descriptor.
- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [initInputReport](initinputreport.md): Starts reading the input report from the device.
- [CompleteInputReport](completeinputreport.md): Processes the results of an asynchronous request for an input report.
- [scheduleInputReportRetry](scheduleinputreportretry.md): Retries a previous request for an input report.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
