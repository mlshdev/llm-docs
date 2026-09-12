> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidvaluemultiplecallback](https://developer.apple.com/documentation/iokit/iohidvaluemultiplecallback)

# IOHIDValueMultipleCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*IOHIDValueMultipleCallback)(void *context, IOReturn result, void *sender, CFDictionaryRef multiple);
```

## Parameters

- `context`: void \* pointer to more data.
- `result`: Completion result of desired operation.
- `sender`: Interface instance sending the completion routine.
- `multiple`: CFDictionaryRef containing the returned element key value pairs.

<a id="discussion"></a>

## Discussion

Type and arguments of callout C function that is used when an element value completion routine is called.

## See Also

### Callbacks

- [IOHIDCallback](iohidcallback.md)
- [IOHIDDeviceCallback](iohiddevicecallback.md)
- [IOHIDReportCallback](iohidreportcallback.md)
- [IOHIDValueCallback](iohidvaluecallback.md)
