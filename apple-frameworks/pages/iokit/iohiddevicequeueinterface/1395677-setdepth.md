> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395677-setdepth](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395677-setdepth)

# setDepth

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Sets the depth for this IOHIDDeviceQueueInterface instance.

## Declaration

```objectivec
IOReturn (*setDepth)(void *self, uint32_t depth, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `depth`: The maximum number of elements in the queue before the oldest elements in the queue begin to be lost.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Regardless of element value size, queue will guarantee n=depth elements will be serviced.
