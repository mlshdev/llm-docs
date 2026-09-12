> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiredevice/1810254-createphysicaladdressspace](https://developer.apple.com/documentation/kernel/iofirewiredevice/1810254-createphysicaladdressspace)

# createPhysicalAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel

Creates local physical FireWire address spaces for the device to access.

## Declaration

```objectivec
virtual IOFWPhysicalAddressSpace *createPhysicalAddressSpace(
 IOMemoryDescriptor *mem); 
```

## Parameters

- `mem`: Memory area allocated to back the physical access by Link hardware.

<a id="return_value"></a>

## Return Value

A valid `IOFWPhysicalAddressSpace` object on success; NULL on failure.

## See Also

### Miscellaneous

- [clearNodeFlags](1810239-clearnodeflags.md): Resets the node's characteristics.
- [createPseudoAddressSpace](1810271-createpseudoaddressspace.md): Creates local pseudo FireWire address spaces for the device to access.
- [getNodeFlags](1810283-getnodeflags.md): Retrieves the node's characteristics.
- [getUnitCount](1810297-getunitcount.md): Returns number of units attached to this device.
- [init](1810312-init.md): Initializes the nub.
- [setMaxSpeed](1810324-setmaxspeed.md): Sets the maximum speed for this node.
- [setNodeFlags](1810338-setnodeflags.md): Sets the node's characteristics.
