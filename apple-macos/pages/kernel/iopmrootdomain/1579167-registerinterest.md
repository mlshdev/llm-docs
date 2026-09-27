> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmrootdomain/1579167-registerinterest

# registerInterest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual OSPtr<IONotifier> registerInterest(const OSSymbol *typeOfInterest, IOServiceInterestHandler handler, void *target, void *ref);
```
