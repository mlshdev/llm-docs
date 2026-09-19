> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidcallback

# IOHIDCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*IOHIDCallback)(void *context, IOReturn result, void *sender);
```

## Parameters

- `context`: void \* pointer to your data, often a pointer to an object.
- `result`: Completion result of desired operation.
- `refcon`: void \* pointer to more data.
- `sender`: Interface instance sending the completion routine.

<a id="discussion"></a>

## Discussion

Type and arguments of callout C function that is used when a completion routine is called.

## See Also

### Callbacks

- [IOHIDDeviceCallback](iohiddevicecallback.md)
- [IOHIDReportCallback](iohidreportcallback.md)
- [IOHIDValueCallback](iohidvaluecallback.md)
- [IOHIDValueMultipleCallback](iohidvaluemultiplecallback.md)
