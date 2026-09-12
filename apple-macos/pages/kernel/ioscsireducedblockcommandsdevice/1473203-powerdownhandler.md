> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473203-powerdownhandler](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473203-powerdownhandler)

# PowerDownHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn PowerDownHandler(void *refCon, UInt32 messageType, IOService *provider, void *messageArgument, vm_size_t argSize);
```
