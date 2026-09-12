> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493336-queryelementvalue](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493336-queryelementvalue)

# queryElementValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the current value of an element.

## Declaration

```objectivec
IOReturn (*queryElementValue)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *valueEvent, uint32_t timeoutMS, IOHIDElementCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `elementCookie`: The element of interest.
- `valueEvent`: The event that will be filled. If a long value is present, it is up to the caller to deallocate it.
- `timeoutMS`: UNSUPPORTED.
- `callback`: UNSUPPORTED.
- `callbackTarget`: UNSUPPORTED.
- `callbackRefcon`: UNSUPPORTED.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This call is most useful for feature type elements. This method will poll the device for the current element value.
