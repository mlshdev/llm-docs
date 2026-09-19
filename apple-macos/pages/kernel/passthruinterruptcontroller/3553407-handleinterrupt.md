> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/passthruinterruptcontroller/3553407-handleinterrupt

# handleInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
virtual IOReturn handleInterrupt(void *refCon, IOService *nub, int source);
```
