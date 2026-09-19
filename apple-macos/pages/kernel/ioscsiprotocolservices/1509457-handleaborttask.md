> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/1509457-handleaborttask

# HandleAbortTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SCSIServiceResponse HandleAbortTask(UInt8 theLogicalUnit, SCSITaggedTaskIdentifier theTag);
```
