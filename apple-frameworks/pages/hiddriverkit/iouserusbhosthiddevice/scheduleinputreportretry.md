> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/scheduleinputreportretry](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/scheduleinputreportretry)

# scheduleInputReportRetry

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Retries a previous request for an input report.

## Declaration

```objectivec
virtual void scheduleInputReportRetry(kern_return_t reason);
```

## Parameters

- `reason`: The reason the previous request failed.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. The [CompleteInputReport](completeinputreport.md) method calls it automatically to retry the previous request for the input report.

## See Also

### Managing Device Reports

- [newReportDescriptor](newreportdescriptor.md): Returns the data in the HID device’s report descriptor.
- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [initInputReport](initinputreport.md): Starts reading the input report from the device.
- [CompleteInputReport](completeinputreport.md): Processes the results of an asynchronous request for an input report.
- [cancelInputReportRetry](cancelinputreportretry.md): Cancels a retry attempt for an input report request.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
