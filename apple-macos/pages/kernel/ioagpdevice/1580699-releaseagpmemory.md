> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioagpdevice/1580699-releaseagpmemory

# releaseAGPMemory

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 11.0)

## Declaration

```objectivec
virtual IOReturn releaseAGPMemory(IOMemoryDescriptor *memory, IOByteCount agpOffset, IOOptionBits options);
```
