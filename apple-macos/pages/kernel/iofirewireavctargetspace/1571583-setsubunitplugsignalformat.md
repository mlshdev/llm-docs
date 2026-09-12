> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1571583-setsubunitplugsignalformat](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571583-setsubunitplugsignalformat)

# setSubunitPlugSignalFormat

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn setSubunitPlugSignalFormat(IOFireWireAVCProtocolUserClient *userClient, UInt32 subunitTypeAndID, IOFWAVCPlugTypes plugType, UInt32 plugNum, UInt32 signalFormat);
```
