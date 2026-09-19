> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3223320-interruptoccurred

# InterruptOccurred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t InterruptOccurred(IORPC rpc, OSAction *action, uint64_t count, uint64_t time, OSDispatchMethod supermethod);
```
