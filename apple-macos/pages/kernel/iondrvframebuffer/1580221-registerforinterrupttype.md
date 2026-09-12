> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iondrvframebuffer/1580221-registerforinterrupttype](https://developer.apple.com/documentation/kernel/iondrvframebuffer/1580221-registerforinterrupttype)

# registerForInterruptType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerForInterruptType(IOSelect interruptType, IOFBInterruptProc proc, OSObject *target, void *ref, void **interruptRef);
```
