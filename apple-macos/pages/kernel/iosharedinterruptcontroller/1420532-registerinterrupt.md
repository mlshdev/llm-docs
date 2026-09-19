> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iosharedinterruptcontroller/1420532-registerinterrupt

# registerInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerInterrupt(IOService *nub, int source, void *target, IOInterruptHandler handler, void *refCon);
```
