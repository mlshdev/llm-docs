> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1456914-createisochchannel](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456914-createisochchannel)

# createIsochChannel

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWIsochChannel * createIsochChannel(bool doIRM, UInt32 packetSize, IOFWSpeed prefSpeed, FWIsochChannelForceStopNotificationProc stopProc, void *stopRefCon);
```
