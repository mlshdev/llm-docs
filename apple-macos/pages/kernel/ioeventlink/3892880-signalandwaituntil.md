> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioeventlink/3892880-signalandwaituntil](https://developer.apple.com/documentation/kernel/ioeventlink/3892880-signalandwaituntil)

# SignalAndWaitUntil

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.1+

## Declaration

```objectivec
kern_return_t SignalAndWaitUntil(uint64_t clockOptions, uint64_t timeout, uint64_t *signalsConsumed);
```
