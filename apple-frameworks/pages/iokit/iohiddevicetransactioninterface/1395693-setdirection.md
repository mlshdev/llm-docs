> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetransactioninterface/1395693-setdirection](https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395693-setdirection)

# setDirection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Sets the direction for this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*setDirection)(void *self, IOHIDTransactionDirectionType direction, IOOptionBits options);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `direction`: Transaction direction of type IOHIDTransactionDirectionType.
- `options`: Reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Direction constants are declared in IOHIDTransactionDirectionType. Changing directions is useful when dealing with elements of type kIOHIDElementTypeFeature as you use the transaction to both set and get element values.
