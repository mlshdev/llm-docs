> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioeventlink/3892882-waituntil](https://developer.apple.com/documentation/kernel/ioeventlink/3892882-waituntil)

# WaitUntil

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.1+

## Declaration

```objectivec
kern_return_t WaitUntil(uint64_t clockOptions, uint64_t timeout, uint64_t *signalsConsumed);
```
