> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3223213-create_impl

# Create_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Create_Impl(uint64_t queueByteCount, IODispatchQueue *queue, IODataQueueDispatchSource **source);
```
