> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395687-getdepth](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395687-getdepth)

# getDepth

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains the queue depth for this IOHIDDeviceQueueInterface instance.

## Declaration

```objectivec
IOReturn (*getDepth)(void *self, uint32_t *pDepth);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceQueueInterface.
- `pDepth`: Pointer to a uint32_t to obtain the number of elements that can be serviced by the queue.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.
