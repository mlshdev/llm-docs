> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436322-handlepowerevent

# handlePowerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn handlePowerEvent(void *target, void *parameter, UInt32 messageType, IOService *provider, void *messageArgument, vm_size_t messageArgumentSize);
```
