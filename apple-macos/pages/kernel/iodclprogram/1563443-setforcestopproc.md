> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodclprogram/1563443-setforcestopproc](https://developer.apple.com/documentation/kernel/iodclprogram/1563443-setforcestopproc)

# setForceStopProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void setForceStopProc(IOFWIsochChannel::ForceStopNotificationProc proc, void *refCon, IOFWIsochChannel *channel);
```
