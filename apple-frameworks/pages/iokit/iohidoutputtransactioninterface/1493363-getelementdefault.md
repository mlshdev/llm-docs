> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidoutputtransactioninterface/1493363-getelementdefault](https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493363-getelementdefault)

# getElementDefault

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the default value of an element in a transaction.

## Declaration

```objectivec
IOReturn (*getElementDefault)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *outValueEvent);
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
