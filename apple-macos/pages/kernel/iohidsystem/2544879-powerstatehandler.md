> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/2544879-powerstatehandler

# powerStateHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOReturn powerStateHandler(void *target, void *refCon, UInt32 messageType, IOService *service, void *messageArgument, vm_size_t argSize);
```
