> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocatalogue/3753421-finddrivers

# findDrivers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
OSPtr<OSOrderedSet> findDrivers(IOService *service, SInt32 *generationCount);
```
