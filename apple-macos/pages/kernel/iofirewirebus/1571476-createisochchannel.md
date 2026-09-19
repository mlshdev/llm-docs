> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirebus/1571476-createisochchannel

# createIsochChannel

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWIsochChannel * createIsochChannel(bool doIRM, UInt32 bandwidth, IOFWSpeed prefSpeed, IOFWIsochChannel::ForceStopNotificationProc stopProc, void *stopRefCon);
```
