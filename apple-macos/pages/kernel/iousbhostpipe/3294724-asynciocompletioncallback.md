> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3294724-asynciocompletioncallback](https://developer.apple.com/documentation/kernel/iousbhostpipe/3294724-asynciocompletioncallback)

# asyncIOCompletionCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static void asyncIOCompletionCallback(void *owner, void *parameter, IOReturn status, uint32_t bytesTransferred);
```
