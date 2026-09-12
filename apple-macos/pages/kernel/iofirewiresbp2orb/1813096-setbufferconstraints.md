> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2orb/1813096-setbufferconstraints](https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1813096-setbufferconstraints)

# setBufferConstraints

**Interface language:** Objective-C

**Framework:** Kernel

Configures page table generation parameters

## Declaration

```objectivec
IOReturn setBufferConstraints(
 UInt64 maxSegmentSize,
 UInt32 alignment,
 UInt32 options = 0); 
```

<a id="return_value"></a>

## Return Value

May return an error if there is a problem allocating the underlying resources or if buffers are currently attached.

<a id="overview"></a>

## Overview

Sets the maximums size of any page table segment and the required alignemnt. Double buffering may be used to satisfy these constraints. The only supported option is kFWSBP2ConstraintForceDoubleBuffer which forces a page aligned double buffering of the entire descriptor.

## See Also

### Miscellaneous

- [allocatePageTable](1812982-allocatepagetable.md): Allocates memory for the page table.
- [deallocatePageTable](1812989-deallocatepagetable.md): Frees up memory allocated for the page table.
- [getCommandBufferDescriptor](1812997-getcommandbufferdescriptor.md): Returns the memory descriptor representing the command buffer.
- [getCommandFlags](1813002-getcommandflags.md): Sets configuration flags for the ORB.
- [getCommandGeneration](1813010-getcommandgeneration.md): Gets the command generation.
- [getCommandTimeout](1813017-getcommandtimeout.md): Gets the timeout of the ORB.
- [getLogin](1813023-getlogin.md): Gets the login associated with this ORB.
- [getMaxPayloadSize](1813031-getmaxpayloadsize.md): Gets max payload size for the ORB.
- [getORBAddress](1813039-getorbaddress.md): Returns the FireWire address of this ORB.
- [getRefCon](1813049-getrefcon.md): Returns the refCon set with setRefCon.
- [getRefCon64](1813059-getrefcon64.md): Returns the 64 bit refCon set with setRefCon64.
- [release](1813072-release.md): Primary implementation of the release mechanism.
- [releaseCommandBuffers](1813085-releasecommandbuffers.md): Releases SBP2's reference to the command buffers.
- [setCommandBlock(IOMemoryDescriptor \*)](1813109-setcommandblock.md): Sets the command block portion of the ORB.
- [setCommandBlock(void \*, UInt32)](1813121-setcommandblock.md): Sets the command block portion of the ORB.
- [setCommandBuffers](1813129-setcommandbuffers.md): Creates a page table from a list of ranges.
- [setCommandBuffersAsRanges(IOMemoryDescriptor \*, UInt32, UInt32)](1813141-setcommandbuffersasranges.md): Creates a page table from a list of ranges.
- [setCommandBuffersAsRanges(IOVirtualRange \*, UInt32, IODirection, task_t, UInt32, UInt32)](1813149-setcommandbuffersasranges.md): Creates a page table from a list of ranges.
- [setCommandBuffersAsRanges64](1813162-setcommandbuffersasranges64.md): Creates a page table from a list of 64 bit ranges.
- [setCommandFlags](1813178-setcommandflags.md): Sets configuration flags for the ORB.
- [setCommandGeneration](1813197-setcommandgeneration.md): Sets the command generation.
- [setCommandTimeout](1813211-setcommandtimeout.md): Sets the timeout of the ORB.
- [setMaxPayloadSize](1813231-setmaxpayloadsize.md): Sets max payload size for the ORB.
- [setRefCon](1813244-setrefcon.md): Sets the ORB refCon.
- [setRefCon64](1813262-setrefcon64.md): Sets the ORB refCon as a 64 bit value.
