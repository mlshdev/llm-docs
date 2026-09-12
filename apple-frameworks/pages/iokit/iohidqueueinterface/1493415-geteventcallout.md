> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493415-geteventcallout](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493415-geteventcallout)

# getEventCallout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Gets the event callout.

## Declaration

```objectivec
IOReturn (*getEventCallout)(void *self, IOHIDCallbackFunction *outCallback, void **outCallbackTarget, void **outCallbackRefcon);
```

## Parameters

- `outCallback`: if non-NULL is a callback to be called when data is inserted to the queue
- `outCallbackTarget`: The callback target passed to the callback
- `outCallbackRefcon`: The callback refcon passed to the callback

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This callback will be called the queue transitions to non-empty.
