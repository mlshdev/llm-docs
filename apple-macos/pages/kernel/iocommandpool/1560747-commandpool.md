> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1560747-commandpool](https://developer.apple.com/documentation/kernel/iocommandpool/1560747-commandpool)

# commandPool

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOCommandPool> commandPool(IOService *inOwner, IOWorkLoop *inWorkLoop, UInt32 inSize);
```
