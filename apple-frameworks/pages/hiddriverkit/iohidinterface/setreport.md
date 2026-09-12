> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidinterface/setreport](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/setreport)

# SetReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sends a report to the HID device.

## Declaration

```objectivec
virtual kern_return_t SetReport(IOMemoryDescriptor *report, IOHIDReportType reportType, uint32_t reportID, IOOptionBits options);
```

## Parameters

- `report`: A memory descriptor that contains the report data that you want to send to the HID device.
- `reportType`: The type of report you want to send to the device.
- `reportID`: The unique identifier for the report.
- `options`: Options to specify when sending the report.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method sets the report by calling the [setReport](../iohiddevice/setreport.md) method of its associated [IOHIDDevice](../iohiddevice.md) object. When sending the report to the device, this method combines the `reportID` and `options` together, with the `reportID` occupying the lower 8 bits of a 32-bit integer, and the `options` occupying the upper 24 bits.

## See Also

### Getting and Setting Input Reports

- [ReportAvailable](reportavailable.md): Notifies the interface that an updated report is available from the HID device.
- [AddReportToPool](addreporttopool.md): Adds a memory descriptor to the report pool.
- [processReport](processreport.md): Parses the contents of the specified report and updates the interface’s elements.
- [GetReport](getreport.md): Retrieves a new input report from the HID device.
