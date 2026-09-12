> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547749-gen32iovmsegments](https://developer.apple.com/documentation/kernel/iodmacommand/1547749-gen32iovmsegments)

# gen32IOVMSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn gen32IOVMSegments(UInt64 *offset, Segment32 *segments, UInt32 *numSegments);
```

## See Also

### Configuring the Memory Descriptor

- [setMemoryDescriptor](1811308-setmemorydescriptor.md): Sets and resets the DMACommand's current memory descriptor
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
- [gen64IOVMSegments](1811126-gen64iovmsegments.md): Helper function for a type checked call to genIOVMSegments(qv), for use with an IODMACommand set up with the output function kIODMACommandOutputHost64, kIODMACommandOutputBig64, or kIODMACommandOutputLittle64. If the output function of the IODMACommand is not a 64 bit function, results will be incorrect.
- [gen64IOVMSegments](1547722-gen64iovmsegments.md)
- [createCopyBuffer](1547729-createcopybuffer.md)
