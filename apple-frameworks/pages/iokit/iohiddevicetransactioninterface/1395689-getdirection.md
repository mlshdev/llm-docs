> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetransactioninterface/1395689-getdirection](https://developer.apple.com/documentation/iokit/iohiddevicetransactioninterface/1395689-getdirection)

# getDirection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

Obtains the direction for this IOHIDDeviceTransactionInterface instance.

## Declaration

```objectivec
IOReturn (*getDirection)(void *self, IOHIDTransactionDirectionType *pDirection);
```

## Parameters

- `self`: Pointer to the IOHIDDeviceTransactionInterface.
- `pDirection`: Pointer to a IOHIDTransactionDirectionType to obtain transaction direction.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful or a kern_return_t if unsuccessful.

<a id="discussion"></a>

## Discussion

Direction constants are declared in IOHIDTransactionDirectionType.
