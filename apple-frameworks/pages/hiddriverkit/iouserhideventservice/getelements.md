> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/getelements](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/getelements)

# getElements

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns an array of elements that contain the parsed data from the HID device’s report.

## Declaration

```objectivec
virtual OSArray * getElements();
```

<a id="return-value"></a>

## Return Value

An array of [IOHIDElement](../iohidelement.md) objects containing the parsed data from the report.

<a id="Discussion"></a>

## Discussion

Use this method to get the array of [IOHIDElement](../iohidelement.md) objects that contain the data for the most recent device report. Each element contains data for a single aspect of the device’s state. For example, a report from a stylus contains separate elements for the horizontal and vertical position of the stylus, the pressure values, and so on. Use the [getUsagePage](../iohidelement/getusagepage.md) and [getUsage](../iohidelement/getusage.md) methods of the element to determine the type of information in each element.

This method creates a new set of [IOHIDElement](../iohidelement.md) objects the first time you call it. On subequent calls, it updates the existing [IOHIDElement](../iohidelement.md) objects with data from the most recent report.

## See Also

### Responding to Input Reports

- [handleReport](handlereport.md): Converts an incoming device report into dispatchable events.
- [ReportAvailable](reportavailable.md): Notifies the event service that an updated report is available from the HID device.
