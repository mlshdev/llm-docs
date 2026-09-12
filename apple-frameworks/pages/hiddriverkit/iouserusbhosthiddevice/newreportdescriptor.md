> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/newreportdescriptor](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/newreportdescriptor)

# newReportDescriptor

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns the data in the HID device’s report descriptor.

## Declaration

```objectivec
virtual OSData * newReportDescriptor();
```

<a id="return-value"></a>

## Return Value

An [OSData](../../driverkit/osdata.md) object containing the report descriptor for the device.

<a id="Discussion"></a>

## Discussion

The default implementation of this method fetches the report descriptor from the USB device and packages the resulting data into an [OSData](../../driverkit/osdata.md) object.

## See Also

### Managing Device Reports

- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [initInputReport](initinputreport.md): Starts reading the input report from the device.
- [CompleteInputReport](completeinputreport.md): Processes the results of an asynchronous request for an input report.
- [scheduleInputReportRetry](scheduleinputreportretry.md): Retries a previous request for an input report.
- [cancelInputReportRetry](cancelinputreportretry.md): Cancels a retry attempt for an input report request.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
