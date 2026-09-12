> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3223320-interruptoccurred](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3223320-interruptoccurred)

# InterruptOccurred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t InterruptOccurred(IORPC rpc, OSAction *action, uint64_t count, uint64_t time, OSDispatchMethod supermethod);
```
