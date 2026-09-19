> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436279-addtobytestransferred

# addToBytesTransferred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void addToBytesTransferred(UInt64 bytesTransferred, UInt64 totalTime, UInt64 latentTime, bool isWrite);
```
