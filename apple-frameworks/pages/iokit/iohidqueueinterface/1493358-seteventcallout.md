> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidqueueinterface/1493358-seteventcallout](https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493358-seteventcallout)

# setEventCallout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Sets the event callout to be called when the queue transitions to non-empty.

## Declaration

```objectivec
IOReturn (*setEventCallout)(void *self, IOHIDCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `callback`: if non-NULL is a callback to be called when data is inserted to the queue
- `callbackTarget`: The callback target passed to the callback
- `callbackRefcon`: The callback refcon passed to the callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

In order for this to work correctly, you must call createAsyncPort and createAsyncEventSource.
