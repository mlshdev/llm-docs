> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidinterface/getreport](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/getreport)

# GetReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Retrieves a new input report from the HID device.

## Declaration

```objectivec
virtual kern_return_t GetReport(IOMemoryDescriptor *report, IOHIDReportType reportType, uint32_t reportID, IOOptionBits options);
```

## Parameters

- `report`: The memory descriptor in which to store the report data. On output, this descriptor contains the bytes of the report.
- `reportType`: The type of report you want.
- `reportID`: The unique identifier for the report.
- `options`: Options to specify when requesting the report.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method requests the report by calling the [getReport](../iohiddevice/getreport.md) method of its associated [IOHIDDevice](../iohiddevice.md) object. When getting the report from the device, this method combines the `reportID` and `options` together, with the `reportID` occupying the lower 8 bits of a 32-bit integer, and the `options` occupying the upper 24 bits.

## See Also

### Getting and Setting Input Reports

- [ReportAvailable](reportavailable.md): Notifies the interface that an updated report is available from the HID device.
- [AddReportToPool](addreporttopool.md): Adds a memory descriptor to the report pool.
- [processReport](processreport.md): Parses the contents of the specified report and updates the interface’s elements.
- [SetReport](setreport.md): Sends a report to the HID device.
