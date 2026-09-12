> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/passthruinterruptcontroller/3553405-getinterrupttype](https://developer.apple.com/documentation/kernel/passthruinterruptcontroller/3553405-getinterrupttype)

# getInterruptType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
virtual IOReturn getInterruptType(IOService *nub, int source, int *interruptType);
```
