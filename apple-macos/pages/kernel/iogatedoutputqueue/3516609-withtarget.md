> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iogatedoutputqueue/3516609-withtarget

# withTarget

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static IOGatedOutputQueue * withTarget(IONetworkController *target, IOWorkLoop *workloop, UInt32 capacity, UInt32 priorities);
```
