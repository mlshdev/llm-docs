> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493339-removeelement](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493339-removeelement)

# removeElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Removes an element from the queue.

## Declaration

```objectivec
IOReturn (*removeElement)(void *self, IOHIDElementCookie elementCookie);
```

## Parameters

- `elementCookie`: The element of interest.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

If the element has not been added to queue, an error will be returned.
