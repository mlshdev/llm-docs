> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiredevice/1810271-createpseudoaddressspace](https://developer.apple.com/documentation/kernel/iofirewiredevice/1810271-createpseudoaddressspace)

# createPseudoAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel

Creates local pseudo FireWire address spaces for the device to access.

## Declaration

```objectivec
virtual IOFWPseudoAddressSpace *createPseudoAddressSpace(
 FWAddress *addr,
 UInt32len, 
 FWReadCallbackreader,
 FWWriteCallbackwriter,
 void *refcon); 
```

## Parameters

- `addr`: The FireWire address that is mapped to the pseudo address access.
- `len`: Size of the address space to allocate.
- `reader`: Read callback, when the device reads from this address space.
- `writer`: Write callback, when the device writes to this address space.
- `refcon`: Client's callback object returned during reader/writer callbacks.

<a id="return_value"></a>

## Return Value

A valid `IOFWPseudoAddressSpace` object on success; NULL on failure.

## See Also

### Miscellaneous

- [clearNodeFlags](1810239-clearnodeflags.md): Resets the node's characteristics.
- [createPhysicalAddressSpace](1810254-createphysicaladdressspace.md): Creates local physical FireWire address spaces for the device to access.
- [getNodeFlags](1810283-getnodeflags.md): Retrieves the node's characteristics.
- [getUnitCount](1810297-getunitcount.md): Returns number of units attached to this device.
- [init](1810312-init.md): Initializes the nub.
- [setMaxSpeed](1810324-setmaxspeed.md): Sets the maximum speed for this node.
- [setNodeFlags](1810338-setnodeflags.md): Sets the node's characteristics.
