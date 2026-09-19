> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetinterface/1585560-enablefilter

# enableFilter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
IOReturn enableFilter(IONetworkController *ctr, const OSSymbol *group, UInt32 filter, IOOptionBits options);
```
