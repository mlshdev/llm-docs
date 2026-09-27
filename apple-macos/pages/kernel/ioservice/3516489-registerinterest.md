> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3516489-registerinterest

# registerInterest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
OSPtr<IONotifier> registerInterest(const OSSymbol *typeOfInterest, IOServiceInterestHandlerBlock handler);
```
