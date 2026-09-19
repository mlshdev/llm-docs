> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3223316-create_call

# Create_Call

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Create_Call(IOService *provider, uint32_t index, IODispatchQueue *queue, IOInterruptDispatchSource **source);
```
