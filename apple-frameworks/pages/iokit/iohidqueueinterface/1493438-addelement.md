> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493438-addelement](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493438-addelement)

# addElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Adds an element to the queue.

## Declaration

```objectivec
IOReturn (*addElement)(void *self, IOHIDElementCookie elementCookie, uint32_t flags);
```

## Parameters

- `elementCookie`: The element of interest.
- `flags`:

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

If the element has already been added to queue, an error will be returned.
