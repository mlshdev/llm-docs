> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493313-getnextevent](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493313-getnextevent)

# getNextEvent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Reads next event from the queue.

## Declaration

```objectivec
IOReturn (*getNextEvent)(void *self, IOHIDEventStruct *event, AbsoluteTime maxTime, uint32_t timeoutMS);
```

## Parameters

- `event`: The event that will be filled. If a long value is present, it is up to the caller to deallocate it.
- `maxTime`: UNSUPPORTED. If non-zero, limits read events to those that occurred on or before maxTime.
- `timeoutMS`: UNSUPPORTED. The timeout in milliseconds, a zero timeout will cause this call to be non-blocking (returning queue empty) if there is a NULL callback, and blocking forever until the queue is non-empty if there is a valid callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.
