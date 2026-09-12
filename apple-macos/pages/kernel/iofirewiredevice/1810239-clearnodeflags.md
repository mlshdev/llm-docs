> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiredevice/1810239-clearnodeflags](https://developer.apple.com/documentation/kernel/iofirewiredevice/1810239-clearnodeflags)

# clearNodeFlags

**Interface language:** Objective-C

**Framework:** Kernel

Resets the node's characteristics.

## Declaration

```objectivec
virtual void clearNodeFlags(
 UInt32flags ); 
```

## Parameters

- `flags`: Refer to "node flags" in IOFireWireFamilyCommon.h.

## See Also

### Miscellaneous

- [createPhysicalAddressSpace](1810254-createphysicaladdressspace.md): Creates local physical FireWire address spaces for the device to access.
- [createPseudoAddressSpace](1810271-createpseudoaddressspace.md): Creates local pseudo FireWire address spaces for the device to access.
- [getNodeFlags](1810283-getnodeflags.md): Retrieves the node's characteristics.
- [getUnitCount](1810297-getunitcount.md): Returns number of units attached to this device.
- [init](1810312-init.md): Initializes the nub.
- [setMaxSpeed](1810324-setmaxspeed.md): Sets the maximum speed for this node.
- [setNodeFlags](1810338-setnodeflags.md): Sets the node's characteristics.
