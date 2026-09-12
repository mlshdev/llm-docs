> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidoutputtransactioninterface/1493425-setelementdefault](https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493425-setelementdefault)

# setElementDefault

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Sets the default value of an element in a transaction.

## Declaration

```objectivec
IOReturn (*setElementDefault)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *valueEvent);
```

## Parameters

- `elementCookie`: The element of interest.
- `valueEvent`: The event that will be filled. If a long value is present, it will be copied.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

An error will be returned if the element has not been added to the transaction.
