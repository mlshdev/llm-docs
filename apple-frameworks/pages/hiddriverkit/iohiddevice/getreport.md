> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohiddevice/getreport](https://developer.apple.com/documentation/hiddriverkit/iohiddevice/getreport)

# getReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Gets a report from the HID device.

## Declaration

```objectivec
virtual kern_return_t getReport(IOMemoryDescriptor *report, IOHIDReportType reportType, IOOptionBits options, uint32_t completionTimeout, OSAction *action);
```

## Parameters

- `report`: A memory descriptor that contains the report from the HID device.
- `reportType`: The report type.
- `options`: The lower 8 bits of the report ID. The other 24 bits are options to specify the request.
- `completionTimeout`: The amount of time, in milliseconds, after which to abort the command if the entire command hasn’t completed.
- `action`: The function to call when the request completes. If you omit this function, the method executes synchronously, blocking the current thread until the request completes.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses must override it and use their implementation to retrieve the report information from the device.

## See Also

### Processing Device Reports

- [handleReport](handlereport.md): Handles an asynchronous report received from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [CompleteReport](completereport.md): Completes all async requests made when getting or setting a report.
- [Report Options](../report-options-enum.md): The enumerated report options.
