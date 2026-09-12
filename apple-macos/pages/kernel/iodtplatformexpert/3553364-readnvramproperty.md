> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodtplatformexpert/3553364-readnvramproperty](https://developer.apple.com/documentation/kernel/iodtplatformexpert/3553364-readnvramproperty)

# readNVRAMProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
IOReturn readNVRAMProperty(IORegistryEntry *entry, OSSharedPtr<const OSSymbol> & name, OSSharedPtr<OSData> & value);
```
