> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostpipe/3366019-isochio_impl

# IsochIO_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t IsochIO_Impl(IOMemoryDescriptor *dataBuffer, IOMemoryDescriptor *frameList, uint64_t firstFrameNumber, OSAction *completion);
```
