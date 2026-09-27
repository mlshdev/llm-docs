> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostinterface/3438057-getframenumber

# GetFrameNumber

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t GetFrameNumber(uint64_t *frameNumber, uint64_t *theTime, OSDispatchMethod supermethod);
```
