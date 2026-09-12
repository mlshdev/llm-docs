> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493306-createasynceventsource](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493306-createasynceventsource)

# createAsyncEventSource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Creates async eventsource.

## Declaration

```objectivec
IOReturn (*createAsyncEventSource)(void *self, CFRunLoopSourceRef *source);
```

## Parameters

- `source`: Reference to CFRunLoopSourceRef that is created.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This method will create an async mach port, if one has not already been created.
