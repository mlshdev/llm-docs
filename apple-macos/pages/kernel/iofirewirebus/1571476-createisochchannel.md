> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirebus/1571476-createisochchannel](https://developer.apple.com/documentation/kernel/iofirewirebus/1571476-createisochchannel)

# createIsochChannel

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWIsochChannel * createIsochChannel(bool doIRM, UInt32 bandwidth, IOFWSpeed prefSpeed, IOFWIsochChannel::ForceStopNotificationProc stopProc, void *stopRefCon);
```
