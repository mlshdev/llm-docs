> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomapper/1532966-maptophysicaladdress

# mapToPhysicalAddress

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual uint64_t mapToPhysicalAddress(uint64_t mappedAddress);
```

## See Also

### Mapping Memory Addresses

- [iovmMapMemory](1532977-iovmmapmemory.md)
- [iovmUnmapMemory](1532968-iovmunmapmemory.md)
- [iovmInsert](1532983-iovminsert.md)
