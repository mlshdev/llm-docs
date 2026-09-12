> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidreportcallback](https://developer.apple.com/documentation/iokit/iohidreportcallback)

# IOHIDReportCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*IOHIDReportCallback)(void *context, IOReturn result, void *sender, IOHIDReportType type, uint32_t reportID, uint8_t *report, CFIndex reportLength);
```

## Parameters

- `context`: void \* pointer to your data, often a pointer to an object.
- `result`: Completion result of desired operation.
- `refcon`: void \* pointer to more data.
- `sender`: Interface instance sending the completion routine.
- `type`: The type of the report that was completed.
- `reportID`: The ID of the report that was completed.
- `report`: Pointer to the buffer containing the contents of the report.
- `reportLength`: Size of the buffer received upon completion.

<a id="discussion"></a>

## Discussion

Type and arguments of callout C function that is used when a HID report completion routine is called.

## See Also

### Callbacks

- [IOHIDCallback](iohidcallback.md)
- [IOHIDDeviceCallback](iohiddevicecallback.md)
- [IOHIDValueCallback](iohidvaluecallback.md)
- [IOHIDValueMultipleCallback](iohidvaluemultiplecallback.md)
