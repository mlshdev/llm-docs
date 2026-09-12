> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/3438057-getframenumber](https://developer.apple.com/documentation/kernel/iousbhostinterface/3438057-getframenumber)

# GetFrameNumber

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t GetFrameNumber(uint64_t *frameNumber, uint64_t *theTime, OSDispatchMethod supermethod);
```
