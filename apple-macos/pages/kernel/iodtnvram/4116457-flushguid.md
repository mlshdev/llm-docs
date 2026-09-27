> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodtnvram/4116457-flushguid

# flushGUID

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.3+

## Declaration

```objectivec
IOReturn flushGUID(const uuid_t guid, IONVRAMOperation op);
```
