> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohiddevice/handlereport](https://developer.apple.com/documentation/hiddriverkit/iohiddevice/handlereport)

# handleReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Handles an asynchronous report received from the HID device.

## Declaration

```objectivec
virtual kern_return_t handleReport(uint64_t timestamp, IOMemoryDescriptor *report, uint32_t reportLength, IOHIDReportType reportType, IOOptionBits options);
```

## Parameters

- `report`: A memory descriptor that describes the report.
- `reportType`: The type of report.
- `options`: Options to specify in the request. No options are currently supported, and the default value is `0`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method parses the report data and notifies attached interfaces of any changes.

## See Also

### Processing Device Reports

- [getReport](getreport.md): Gets a report from the HID device.
- [setReport](setreport.md): Sends a report to the HID device.
- [CompleteReport](completereport.md): Completes all async requests made when getting or setting a report.
- [Report Options](../report-options-enum.md): The enumerated report options.
