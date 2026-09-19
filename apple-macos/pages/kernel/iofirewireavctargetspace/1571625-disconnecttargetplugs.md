> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571625-disconnecttargetplugs

# disconnectTargetPlugs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn disconnectTargetPlugs(IOFireWireAVCProtocolUserClient *userClient, UInt32 sourceSubunitTypeAndID, IOFWAVCPlugTypes sourcePlugType, UInt32 sourcePlugNum, UInt32 destSubunitTypeAndID, IOFWAVCPlugTypes destPlugType, UInt32 destPlugNum);
```
