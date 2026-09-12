> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3438059-completeasynciobundled](https://developer.apple.com/documentation/kernel/iousbhostpipe/3438059-completeasynciobundled)

# CompleteAsyncIOBundled

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
void CompleteAsyncIOBundled(OSAction *action, uint32_t ioCompletionIndex, uint32_t ioCompletionCount, const unsigned int *actualByteCountArray, int actualByteCountArrayCount, const int *statusArray, int statusArrayCount, OSDispatchMethod supermethod);
```
