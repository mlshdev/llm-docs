> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/handlekeyboardreport](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/handlekeyboardreport)

# handleKeyboardReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Iterates through keyboard elements and dispatches them if the element value has been updated.

## Declaration

```objectivec
virtual void handleKeyboardReport(uint64_t timestamp, uint32_t reportID);
```

## Parameters

- `timestamp`: The timestamp of the input report.
- `reportID`: The report ID.

<a id="Discussion"></a>

## Discussion

This method iterates over the keyboard elements from the report and dispatches events for any changed values. The system calls this method automatically when a new report arrives; don’t call this method yourself.

## See Also

### Handling New Data Reports

- [handleReport](handlereport.md): Processes the information in a new device report and dispatches any relevant events in response.
- [handleRelativePointerReport](handlerelativepointerreport.md): Iterates through relative pointer elements and dispatches them if the element value has been updated.
- [handleAbsolutePointerReport](handleabsolutepointerreport.md): Iterates through absolute pointer elements and dispatches them if the element value has been updated.
- [handleScrollReport](handlescrollreport.md): Iterates through scroll elements and dispatches them if the element value has been updated.
- [handleDigitizerReport](handledigitizerreport.md): Processes the digitizer elements and dispatches events for any updated values.
- [createEventForDigitizerCollection](createeventfordigitizercollection.md): Creates a HID event object that represents a digitizer collection.
