> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753498-updatereport

# UpdateReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
IOReturn UpdateReport(OSData *channels, uint32_t action, uint32_t *outElementCount, uint64_t offset, uint64_t capacity, IOMemoryDescriptor *buffer, OSDispatchMethod supermethod);
```
