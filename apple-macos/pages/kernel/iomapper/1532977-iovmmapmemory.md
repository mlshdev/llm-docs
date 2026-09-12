> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomapper/1532977-iovmmapmemory](https://developer.apple.com/documentation/kernel/iomapper/1532977-iovmmapmemory)

# iovmMapMemory

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn iovmMapMemory(IOMemoryDescriptor *memory, uint64_t descriptorOffset, uint64_t length, uint32_t mapOptions, const IODMAMapSpecification *mapSpecification, IODMACommand *dmaCommand, const IODMAMapPageList *pageList, uint64_t *mapAddress, uint64_t *mapLength);
```

## See Also

### Mapping Memory Addresses

- [mapToPhysicalAddress](1532966-maptophysicaladdress.md)
- [iovmUnmapMemory](1532968-iovmunmapmemory.md)
- [iovmInsert](1532983-iovminsert.md)
