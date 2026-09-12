> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1571625-disconnecttargetplugs](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571625-disconnecttargetplugs)

# disconnectTargetPlugs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn disconnectTargetPlugs(IOFireWireAVCProtocolUserClient *userClient, UInt32 sourceSubunitTypeAndID, IOFWAVCPlugTypes sourcePlugType, UInt32 sourcePlugNum, UInt32 destSubunitTypeAndID, IOFWAVCPlugTypes destPlugType, UInt32 destPlugNum);
```
