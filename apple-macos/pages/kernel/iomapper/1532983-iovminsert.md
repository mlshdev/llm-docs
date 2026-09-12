> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomapper/1532983-iovminsert](https://developer.apple.com/documentation/kernel/iomapper/1532983-iovminsert)

# iovmInsert

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn iovmInsert(uint32_t options, uint64_t mapAddress, uint64_t offset, uint64_t physicalAddress, uint64_t length);
```

## See Also

### Mapping Memory Addresses

- [mapToPhysicalAddress](1532966-maptophysicaladdress.md)
- [iovmMapMemory](1532977-iovmmapmemory.md)
- [iovmUnmapMemory](1532968-iovmunmapmemory.md)
