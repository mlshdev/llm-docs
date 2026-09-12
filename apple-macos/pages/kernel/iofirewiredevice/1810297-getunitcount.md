> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiredevice/1810297-getunitcount](https://developer.apple.com/documentation/kernel/iofirewiredevice/1810297-getunitcount)

# getUnitCount

**Interface language:** Objective-C

**Framework:** Kernel

Returns number of units attached to this device.

## Declaration

```objectivec
inline UInt32 getUnitCount(
 void ) 
```

<a id="return_value"></a>

## Return Value

UInt32 The number of units attached to this device.

## See Also

### Miscellaneous

- [clearNodeFlags](1810239-clearnodeflags.md): Resets the node's characteristics.
- [createPhysicalAddressSpace](1810254-createphysicaladdressspace.md): Creates local physical FireWire address spaces for the device to access.
- [createPseudoAddressSpace](1810271-createpseudoaddressspace.md): Creates local pseudo FireWire address spaces for the device to access.
- [getNodeFlags](1810283-getnodeflags.md): Retrieves the node's characteristics.
- [init](1810312-init.md): Initializes the nub.
- [setMaxSpeed](1810324-setmaxspeed.md): Sets the maximum speed for this node.
- [setNodeFlags](1810338-setnodeflags.md): Sets the node's characteristics.
