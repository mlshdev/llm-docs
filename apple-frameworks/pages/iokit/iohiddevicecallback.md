> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicecallback

# IOHIDDeviceCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*IOHIDDeviceCallback)(void *context, IOReturn result, void *sender, IOHIDDeviceRef device);
```

## Parameters

- `context`: void \* pointer to more data.
- `result`: Completion result of desired operation.
- `device`: IOHIDDeviceRef containing the sending device.

<a id="discussion"></a>

## Discussion

Type and arguments of callout C function that is used when a device routine is called.

## See Also

### Callbacks

- [IOHIDCallback](iohidcallback.md)
- [IOHIDReportCallback](iohidreportcallback.md)
- [IOHIDValueCallback](iohidvaluecallback.md)
- [IOHIDValueMultipleCallback](iohidvaluemultiplecallback.md)
