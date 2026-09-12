> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetransactioninterface/1395697-getvalue](https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395697-getvalue)

# getValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains the transaction value for an element in this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*getValue)(void *self, IOHIDElementRef element, IOHIDValueRef *pValue, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `element`: IOHIDElementRef referencing the element of interest.
- `pValue`: Pointer to an IOHIDValueRef to return the element value of the transaction.
- `options`: See IOHIDTransactionOption.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Use the kIOHIDTransactionOptionDefaultOutputValue option to get the default element value.
