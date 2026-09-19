> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiperipheraldevicenub/1569615-aborttask

# AbortTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SCSIServiceResponse AbortTask(UInt8 theLogicalUnit, SCSITaggedTaskIdentifier theTag);
```
