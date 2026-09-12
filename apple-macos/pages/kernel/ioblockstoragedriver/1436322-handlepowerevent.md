> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1436322-handlepowerevent](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436322-handlepowerevent)

# handlePowerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn handlePowerEvent(void *target, void *parameter, UInt32 messageType, IOService *provider, void *messageArgument, vm_size_t messageArgumentSize);
```
