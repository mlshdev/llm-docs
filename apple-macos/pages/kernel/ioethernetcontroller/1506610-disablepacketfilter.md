> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetcontroller/1506610-disablepacketfilter

# disablePacketFilter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn disablePacketFilter(const OSSymbol *group, UInt32 aFilter, UInt32 enabledFilters, IOOptionBits options);
```
