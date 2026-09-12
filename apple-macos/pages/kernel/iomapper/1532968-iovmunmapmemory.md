> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomapper/1532968-iovmunmapmemory](https://developer.apple.com/documentation/kernel/iomapper/1532968-iovmunmapmemory)

# iovmUnmapMemory

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn iovmUnmapMemory(IOMemoryDescriptor *memory, IODMACommand *dmaCommand, uint64_t mapAddress, uint64_t mapLength);
```

## See Also

### Mapping Memory Addresses

- [mapToPhysicalAddress](1532966-maptophysicaladdress.md)
- [iovmMapMemory](1532977-iovmmapmemory.md)
- [iovmInsert](1532983-iovminsert.md)
