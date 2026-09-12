> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3294695-completeasyncio](https://developer.apple.com/documentation/kernel/iousbhostpipe/3294695-completeasyncio)

# CompleteAsyncIO

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
void CompleteAsyncIO(OSAction *action, IOReturn status, uint32_t actualByteCount, uint64_t completionTimestamp, OSDispatchMethod supermethod);
```
