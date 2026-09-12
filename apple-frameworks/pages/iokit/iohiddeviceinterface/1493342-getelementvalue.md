> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493342-getelementvalue](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493342-getelementvalue)

# getElementValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the most recent value of an element.

## Declaration

```objectivec
IOReturn (*getElementValue)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *valueEvent);
```

## Parameters

- `elementCookie`: The element of interest.
- `valueEvent`: The event that will be filled. If a long value is present, it is up to the caller to deallocate it.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This call is most useful for interrupt driven elements, such as input type elements. Since feature type element values need to be polled from the device, it is recommended to use the queryElementValue method to obtain the current value. The timestamp field in the event details the last time the element value was altered.
