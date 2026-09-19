> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iogeneralmemorydescriptor/3142951-setownership

# setOwnership

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
IOReturn setOwnership(task_t newOwner, int newLedgerTag, IOOptionBits newLedgerOptions);
```
