> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidcallbackfunction](https://developer.apple.com/documentation/iokit/iohidcallbackfunction)

# IOHIDCallbackFunction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOHIDCallbackFunction)(void *target, IOReturn result, void *refcon, void *sender);
```

## Parameters

- `target`: void \* pointer to your data, often a pointer to an object.
- `result`: Completion result of desired operation.
- `refcon`: void \* pointer to more data.
- `sender`: Interface instance sending the completion routine.

<a id="discussion"></a>

## Discussion

Type and arguments of callout C function that is used when a completion routine is called, see IOHIDLib.h:setRemovalCallback().

## See Also

### Callbacks

- [IOHIDElementCallbackFunction](iohidelementcallbackfunction.md)
- [IOHIDReportCallbackFunction](iohidreportcallbackfunction.md)
