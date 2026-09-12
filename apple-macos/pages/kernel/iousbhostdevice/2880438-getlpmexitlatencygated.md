> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/2880438-getlpmexitlatencygated](https://developer.apple.com/documentation/kernel/iousbhostdevice/2880438-getlpmexitlatencygated)

# getLPMExitLatencyGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn getLPMExitLatencyGated(tUSBLinkState linkState, tUSBLPMExitLatency latencyType, uint32_t & latencyNs);
```
