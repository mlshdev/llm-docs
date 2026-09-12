> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicequeueinterface/1395765-copynextvalue](https://developer.apple.com/documentation/iokit/iohiddevicequeueinterface/1395765-copynextvalue)

# copyNextValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Dequeues a retained copy of an element value from the head of an IOHIDDeviceQueueInterface.

## Declaration

```objectivec
IOReturn (*copyNextValue)(void *self, IOHIDValueRef *pValue, uint32_t timeout, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceQueueInterface.
- `pValue`: Pointer to a IOHIDValueRef to return the value at the head of the queue.
- `timeout`: Timeout in milliseconds before aborting an attempt to dequeue a value from the head of a queue.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnUnderrun if data is unavailble, or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Because the value is a retained copy, it is up to the caller to release the value using CFRelease. Use with setValueCallback to avoid polling the queue for data.
