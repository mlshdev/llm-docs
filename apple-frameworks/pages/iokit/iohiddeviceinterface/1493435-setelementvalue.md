> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493435-setelementvalue](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493435-setelementvalue)

# setElementValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Sets an element value on the device.

## Declaration

```objectivec
IOReturn (*setElementValue)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *valueEvent, uint32_t timeoutMS, IOHIDElementCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `elementCookie`: The element of interest.
- `valueEvent`: The event that will be filled. If a long value is present, it will be copied.
- `timeoutMS`: UNSUPPORTED.
- `callback`: UNSUPPORTED.
- `callbackTarget`: UNSUPPORTED.
- `callbackRefcon`: UNSUPPORTED.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This call is most useful for feature type elements. It is recommended to use IOOutputTransaction for output type elements.
