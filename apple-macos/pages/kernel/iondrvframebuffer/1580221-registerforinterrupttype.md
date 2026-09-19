> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iondrvframebuffer/1580221-registerforinterrupttype

# registerForInterruptType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerForInterruptType(IOSelect interruptType, IOFBInterruptProc proc, OSObject *target, void *ref, void **interruptRef);
```
