> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodtplatformexpert/3553364-readnvramproperty

# readNVRAMProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
IOReturn readNVRAMProperty(IORegistryEntry *entry, OSSharedPtr<const OSSymbol> & name, OSSharedPtr<OSData> & value);
```
