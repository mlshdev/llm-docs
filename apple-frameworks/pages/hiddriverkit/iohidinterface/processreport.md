> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidinterface/processreport](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/processreport)

# processReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Parses the contents of the specified report and updates the interface’s elements.

## Declaration

```objectivec
virtual void processReport(uint64_t timestamp, uint8_t *report, uint32_t reportLength, IOHIDReportType type, uint32_t reportID);
```

## Parameters

- `timestamp`: The timestamp of the report.
- `report`: A pointer to the bytes of the report.
- `reportLength`: The number of bytes in the `report` parameter.
- `type`: The report type.
- `reportID`: The unique ID associated with the report.

<a id="Discussion"></a>

## Discussion

This method uses the provided report data to update the [IOHIDElement](../iohidelement.md) objects associated with this interface. Upon receiving a new report, call this method before you call the [getElements](getelements.md) method.

## See Also

### Getting and Setting Input Reports

- [ReportAvailable](reportavailable.md): Notifies the interface that an updated report is available from the HID device.
- [AddReportToPool](addreporttopool.md): Adds a memory descriptor to the report pool.
- [GetReport](getreport.md): Retrieves a new input report from the HID device.
- [SetReport](setreport.md): Sends a report to the HID device.
