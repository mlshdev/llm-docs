> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493341-getasynceventsource

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
