> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493314-getasynceventsource](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493314-getasynceventsource)

# getAsyncEventSource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the current event source.

## Declaration

```objectivec
CFRunLoopSourceRef (*getAsyncEventSource)(void *self);
```

<a id="return_value"></a>

## Return Value

Returns a CFRunLoopSourceRef.
