> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostpipe/3438059-completeasynciobundled

# CompleteAsyncIOBundled

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
void CompleteAsyncIOBundled(OSAction *action, uint32_t ioCompletionIndex, uint32_t ioCompletionCount, const unsigned int *actualByteCountArray, int actualByteCountArrayCount, const int *statusArray, int statusArrayCount, OSDispatchMethod supermethod);
```
