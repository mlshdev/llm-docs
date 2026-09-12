> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3943323-getlastinterrupt](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3943323-getlastinterrupt)

# GetLastInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t GetLastInterrupt(uint64_t *count, uint64_t *time, OSDispatchMethod supermethod);
```
