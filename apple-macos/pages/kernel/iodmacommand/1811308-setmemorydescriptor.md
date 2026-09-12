> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1811308-setmemorydescriptor](https://developer.apple.com/documentation/kernel/iodmacommand/1811308-setmemorydescriptor)

# setMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

Sets and resets the DMACommand's current memory descriptor

## Declaration

```objectivec
virtual IOReturn setMemoryDescriptor(
 const IOMemoryDescriptor *mem, 
 bool autoPrepare = true); 
```

## Parameters

- `mem`: A pointer to the current I/Os memory descriptor.
- `autoPrepare`: An optional boolean variable that will call the prepare() function automatically after the memory descriptor is processed. Defaults to true.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess, kIOReturnBusy if currently prepared, kIOReturnNoSpace if the length(mem) \>= Maximum Transfer Size or the error codes returned by prepare() (qv).

<a id="overview"></a>

## Overview

The DMA command will configure itself based on the information that it finds in the memory descriptor. It looks for things like the direction of the memory descriptor and whether the current memory descriptor is already mapped into some IOMMU. As a programmer convenience it can also prepare the DMA command immediately. See prepare(). Note the IODMACommand is designed to used multiple times with a succession of memory descriptors, making the pooling of commands possible. It is an error though to attempt to reset a currently prepared() DMA command. Warning: This routine may block so never try to autoprepare an IODMACommand while in a gated context, i.e. one of the WorkLoops action call outs.

## See Also

### Configuring the Memory Descriptor

- [setMemoryDescriptor](1547727-setmemorydescriptor.md): Sets and resets the DMACommand's current memory descriptor
- [clearMemoryDescriptor](1811032-clearmemorydescriptor.md): Clears the DMACommand's current memory descriptor
- [clearMemoryDescriptor](1547715-clearmemorydescriptor.md): Clears the DMACommand's current memory descriptor
- [getMemoryDescriptor](1811175-getmemorydescriptor.md): Get the current memory descriptor
- [getMemoryDescriptor](1547753-getmemorydescriptor.md): Get the current memory descriptor
- [getIOMemoryDescriptor](1547736-getiomemorydescriptor.md)
- [getPreparedOffsetAndLength](1811194-getpreparedoffsetandlength.md): Returns the offset and length into the target IOMemoryDescriptor of a prepared IODDMACommand.
- [getPreparedOffsetAndLength](1547765-getpreparedoffsetandlength.md): Returns the offset and length into the target IOMemoryDescriptor of a prepared IODDMACommand.
- [genIOVMSegments](1811150-geniovmsegments.md): Generates a physical scatter/gather for the current DMA command
- [genIOVMSegments](1547720-geniovmsegments.md): Generates a physical scatter/gather for the current DMA command
- [gen32IOVMSegments](1811104-gen32iovmsegments.md): Helper function for a type checked call to genIOVMSegments(qv), for use with an IODMACommand set up with the output function kIODMACommandOutputHost32, kIODMACommandOutputBig32, or kIODMACommandOutputLittle32. If the output function of the IODMACommand is not a 32 bit function, results will be incorrect.
- [gen32IOVMSegments](1547749-gen32iovmsegments.md)
- [gen64IOVMSegments](1811126-gen64iovmsegments.md): Helper function for a type checked call to genIOVMSegments(qv), for use with an IODMACommand set up with the output function kIODMACommandOutputHost64, kIODMACommandOutputBig64, or kIODMACommandOutputLittle64. If the output function of the IODMACommand is not a 64 bit function, results will be incorrect.
- [gen64IOVMSegments](1547722-gen64iovmsegments.md)
- [createCopyBuffer](1547729-createcopybuffer.md)
