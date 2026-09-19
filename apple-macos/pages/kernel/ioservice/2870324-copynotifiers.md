> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/2870324-copynotifiers

# copyNotifiers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
OSPtr<OSArray> copyNotifiers(const OSSymbol *type, IOOptionBits orNewState, IOOptionBits andNewState);
```
