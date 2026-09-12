> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2orb/1813049-getrefcon](https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1813049-getrefcon)

# getRefCon

**Interface language:** Objective-C

**Framework:** Kernel

Returns the refCon set with setRefCon.

## Declaration

```objectivec
virtual void * getRefCon(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns the previously stored user defined value.

<a id="overview"></a>

## Overview

Returns the user defined value previously stored in the ORB with setRefCon.

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
- [getRefCon64](1813059-getrefcon64.md): Returns the 64 bit refCon set with setRefCon64.
- [release](1813072-release.md): Primary implementation of the release mechanism.
- [releaseCommandBuffers](1813085-releasecommandbuffers.md): Releases SBP2's reference to the command buffers.
- [setBufferConstraints](1813096-setbufferconstraints.md): Configures page table generation parameters
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
