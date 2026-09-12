> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/initinputreport](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/initinputreport)

# initInputReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Starts reading the input report from the device.

## Declaration

```objectivec
virtual kern_return_t initInputReport();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method requests the input report from the USB device asynchronously, delivering the results to the [CompleteInputReport](completeinputreport.md) method.

You don’t need to call this method directly. The service’s [Start](start.md) method calls it when the service first runs, and the service requests new input reports regularly.

## See Also

### Managing Device Reports

- [newReportDescriptor](newreportdescriptor.md): Returns the data in the HID device’s report descriptor.
- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [CompleteInputReport](completeinputreport.md): Processes the results of an asynchronous request for an input report.
- [scheduleInputReportRetry](scheduleinputreportretry.md): Retries a previous request for an input report.
- [cancelInputReportRetry](cancelinputreportretry.md): Cancels a retry attempt for an input report request.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
