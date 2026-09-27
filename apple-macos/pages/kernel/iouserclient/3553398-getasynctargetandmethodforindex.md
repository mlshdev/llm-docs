> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3553398-getasynctargetandmethodforindex

# getAsyncTargetAndMethodForIndex

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
IOExternalAsyncMethod * getAsyncTargetAndMethodForIndex(OSSharedPtr<IOService> & targetP, UInt32 index);
```
