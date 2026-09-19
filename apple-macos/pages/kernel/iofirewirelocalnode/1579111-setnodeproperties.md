> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirelocalnode/1579111-setnodeproperties

# setNodeProperties

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void setNodeProperties(UInt32 generation, UInt16 nodeID, UInt32 *selfIDs, int numIDs, IOFWSpeed maxSpeed);
```
