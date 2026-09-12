> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioeventlink/signalandwaituntil](https://developer.apple.com/documentation/driverkit/ioeventlink/signalandwaituntil)

# SignalAndWaitUntil

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t SignalAndWaitUntil(uint64_t clockOptions, uint64_t timeout, uint64_t *signalsConsumed);
```
