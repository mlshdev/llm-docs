> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395721-setvalueavailablecallback](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395721-setvalueavailablecallback)

# setValueAvailableCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Sets callback to be used when the queue transitions to non-empty.

## Declaration

```objectivec
IOReturn (*setValueAvailableCallback)(void *self, IOHIDCallback callback, void *context);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceQueueInterface.
- `callback`: Callback of type IOHIDCallback to be used when data is placed on the queue.
- `context`: Pointer to data to be passed to the callback.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

In order to make use of asynchronous behavior, the event source obtained using getAsyncEventSource must be added to a run loop.
