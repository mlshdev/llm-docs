> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidoutputtransactioninterface/1493308-createasynceventsource](https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493308-createasynceventsource)

# createAsyncEventSource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Creates an async event source.

## Declaration

```objectivec
IOReturn (*createAsyncEventSource)(void *self, CFRunLoopSourceRef *source);
```

## Parameters

- `source`: The newly created event source

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This will be used with setEventCallout.
