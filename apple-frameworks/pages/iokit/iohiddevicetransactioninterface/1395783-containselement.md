> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395783-containselement

# containsElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Checks whether an element has been added to this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*containsElement)(void *self, IOHIDElementRef element, Boolean *pValue, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `element`: IOHIDElementRef referencing the element to be be found in the transaction.
- `pValue`: Pointer to a Boolean to return whether or not the element was found in the transaction.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.
