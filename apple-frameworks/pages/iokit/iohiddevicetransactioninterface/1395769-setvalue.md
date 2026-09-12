> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetransactioninterface/1395769-setvalue](https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395769-setvalue)

# setValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Sets the transaction value for an element in this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*setValue)(void *self, IOHIDElementRef element, IOHIDValueRef value, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `element`: IOHIDElementRef referencing the element of interest.
- `value`: IOHIDValueRef referencing element value to be used in the transaction.
- `options`: See IOHIDTransactionOption.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

This method is intended for use with transaction of direction kIOHIDTransactionDirectionTypeOutput. Use the kIOHIDTransactionOptionDefaultOutputValue option to set the default element value.
