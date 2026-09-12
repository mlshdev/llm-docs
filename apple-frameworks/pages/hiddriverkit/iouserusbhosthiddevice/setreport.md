> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/setreport](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/setreport)

# setReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sends a report to the HID device.

## Declaration

```objectivec
virtual kern_return_t setReport(IOMemoryDescriptor *report, IOHIDReportType reportType, IOOptionBits options, uint32_t completionTimeout, OSAction *action);
```

## Parameters

- `report`: A memory descriptor that describes the report to send to the HID device.
- `reportType`: The report type.
- `options`: The lower 8 bits of the report ID. The other 24 bits are options to specify the request.
- `completionTimeout`: The amount of time, in milliseconds, after which to abort the command if the entire command hasn’t finished.
- `action`: The [OSAction](../../driverkit/osaction.md) object to execute when the request completes. Specify `NULL` to execute the request synchronously, which blocks the current thread until the request completes.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Managing Device Reports

- [newReportDescriptor](newreportdescriptor.md): Returns the data in the HID device’s report descriptor.
- [getReport](getreport-6stqs.md): Gets a report from the HID device.
- [getReport](getreport-2v8zk.md): Gets a report from the HID device.
- [initInputReport](initinputreport.md): Starts reading the input report from the device.
- [CompleteInputReport](completeinputreport.md): Processes the results of an asynchronous request for an input report.
- [scheduleInputReportRetry](scheduleinputreportretry.md): Retries a previous request for an input report.
- [cancelInputReportRetry](cancelinputreportretry.md): Cancels a retry attempt for an input report request.
- [TimerOccurred](timeroccurred.md): Handles timeout-related actions when retrying input report requests.
