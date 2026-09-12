> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidoutputtransactioninterface/1493368-getelementvalue](https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493368-getelementvalue)

# getElementValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the value of an element in a transaction.

## Declaration

```objectivec
IOReturn (*getElementValue)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *outValueEvent);
```

## Parameters

- `elementCookie`: The element of interest.
- `outValueEvent`: The event that will be filled. If a long value is present, it is up to the caller to deallocate it.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

An error will be returned if the element has not been added to the transaction.
