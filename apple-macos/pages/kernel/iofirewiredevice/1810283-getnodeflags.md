> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiredevice/1810283-getnodeflags](https://developer.apple.com/documentation/kernel/iofirewiredevice/1810283-getnodeflags)

# getNodeFlags

**Interface language:** Objective-C

**Framework:** Kernel

Retrieves the node's characteristics.

## Declaration

```objectivec
virtual UInt32 getNodeFlags(
 flags ); 
```

## Parameters

- `flags`: Refer to "node flags" in IOFireWireFamilyCommon.h.

<a id="return_value"></a>

## Return Value

UInt32 The flags set for a particular node.

## See Also

### Miscellaneous

- [clearNodeFlags](1810239-clearnodeflags.md): Resets the node's characteristics.
- [createPhysicalAddressSpace](1810254-createphysicaladdressspace.md): Creates local physical FireWire address spaces for the device to access.
- [createPseudoAddressSpace](1810271-createpseudoaddressspace.md): Creates local pseudo FireWire address spaces for the device to access.
- [getUnitCount](1810297-getunitcount.md): Returns number of units attached to this device.
- [init](1810312-init.md): Initializes the nub.
- [setMaxSpeed](1810324-setmaxspeed.md): Sets the maximum speed for this node.
- [setNodeFlags](1810338-setnodeflags.md): Sets the node's characteristics.
