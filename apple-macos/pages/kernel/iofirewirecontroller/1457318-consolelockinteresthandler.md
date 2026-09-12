> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457318-consolelockinteresthandler](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457318-consolelockinteresthandler)

# consoleLockInterestHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn consoleLockInterestHandler(void *target, void *refCon, UInt32 messageType, IOService *provider, void *messageArgument, vm_size_t argSize);
```
