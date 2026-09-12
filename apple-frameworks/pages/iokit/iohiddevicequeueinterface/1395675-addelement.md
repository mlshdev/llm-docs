> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395675-addelement](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395675-addelement)

# addElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Adds an element to this IOHIDDeviceQueueInterface instance.

## Declaration

```objectivec
IOReturn (*addElement)(void *self, IOHIDElementRef element, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceQueueInterface.
- `element`: IOHIDElementRef referencing the element to be added to the queue.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.
