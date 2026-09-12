> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/reportavailable](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/reportavailable)

# ReportAvailable

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Notifies the event service that an updated report is available from the HID device.

## Declaration

```objectivec
virtual void ReportAvailable(uint64_t timestamp, uint32_t reportID, uint32_t reportLength, IOHIDReportType type, IOMemoryDescriptor *report, OSAction *action);
```

## Parameters

- `timestamp`: The timestamp of the report.
- `reportID`: The unique ID associated with the report.
- `reportLength`: The length of the report in bytes.
- `type`: The report type.
- `report`: A memory descriptor that contains the raw data for the report.
- `action`: The `OSAction` object that handles the asynchronous report callback.

<a id="Discussion"></a>

## Discussion

Implement a custom version of this method in your event service. Use the [TYPE](../../driverkit/type.md) macro to let the system know that your method conforms to this prototype.

The system calls this method to notify your event service when a new report arrives.

## See Also

### Responding to Input Reports

- [getElements](getelements.md): Returns an array of elements that contain the parsed data from the HID device’s report.
- [handleReport](handlereport.md): Converts an incoming device report into dispatchable events.
