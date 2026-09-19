> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395711-removeelement

# removeElement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Removes an element from this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*removeElement)(void *self, IOHIDElementRef element, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `element`: IOHIDElementRef referencing the element to be removed from the transaction.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.
