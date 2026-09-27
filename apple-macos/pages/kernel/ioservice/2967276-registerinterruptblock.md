> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/2967276-registerinterruptblock

# registerInterruptBlock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

## Declaration

```objectivec
IOReturn registerInterruptBlock(int source, OSObject *target, IOInterruptActionBlock handler);
```
