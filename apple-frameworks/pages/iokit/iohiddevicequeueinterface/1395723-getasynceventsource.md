> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395723-getasynceventsource](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395723-getasynceventsource)

# getAsyncEventSource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains the event source for this IOHIDDeviceQueueInterface instance.

## Declaration

```objectivec
IOReturn (*getAsyncEventSource)(void *self, CFTypeRef *pSource);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceQueueInterface.
- `pSource`: Pointer to a CFType to return the run loop event source.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

The returned event source can be of type CFRunLoopSourceRef or CFRunLoopTimerRef.
