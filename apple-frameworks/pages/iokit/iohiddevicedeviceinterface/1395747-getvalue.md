> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicedeviceinterface/1395747-getvalue](https://developer.apple.com/documentation/iokit/iohiddevicedeviceinterface/1395747-getvalue)

# getValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains the current value for an element.

## Declaration

```objectivec
IOReturn (*getValue)(void *self, IOHIDElementRef element, IOHIDValueRef *pValue, uint32_t timeout, IOHIDValueCallback callback, void *context, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceDeviceInterface.
- `element`: IOHIDElementRef referencing the element of interest.
- `pValue`: Pointer to a IOHIDValueRef to return the element value.
- `timeout`: Time in milliseconds to wait before aborting request.
- `callback`: Callback of type IOHIDReportCallback to be used when element value has been received from the device. If null, this method will behave synchronously.
- `context`: Pointer to data to be passed to the callback.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

If an element of type kIOHIDElementTypeFeature is passed, this method will issue a request to the IOHIDDevice. Otherwise, this will return the last value reported by the IOHIDDevice. If requesting multiple feature element values, please consider using an IOHIDDeviceTransactionInterface with the kIOHIDTransactionDirectionTypeInput direction.

**Note:** In order to make use of asynchronous behavior, the event source obtained using getAsyncEventSource must be added to a run loop.
