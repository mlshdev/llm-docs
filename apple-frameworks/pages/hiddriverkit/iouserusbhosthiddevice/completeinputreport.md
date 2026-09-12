> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/completeinputreport](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/completeinputreport)

# CompleteInputReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Processes the results of an asynchronous request for an input report.

## Declaration

```objectivec
virtual void CompleteInputReport(OSAction *action, IOReturn status, uint32_t actualByteCount, uint64_t completionTimestamp);
```

## Parameters

- `action`: The completion action.
- `status`: The completion status.
- `actualByteCount`: The number of bytes read.

<a id="Discussion"></a>

## Discussion

If an asynchronous request for an input report was successful, this method handles the report and schedules a new asynchronous request for an updated report. If the request was unsuccessful, this method retries the initial request, resetting the USB device as needed if it is unresponsive.

## See Also

### Managing Device Reports

- [newReportDescriptor](newreportdescriptor.md): Returns the data in the HID device’s report descriptor.
- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [initInputReport](initinputreport.md): Starts reading the input report from the device.
- [scheduleInputReportRetry](scheduleinputreportretry.md): Retries a previous request for an input report.
- [cancelInputReportRetry](cancelinputreportretry.md): Cancels a retry attempt for an input report request.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
