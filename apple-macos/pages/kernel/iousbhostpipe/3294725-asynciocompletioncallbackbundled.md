> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3294725-asynciocompletioncallbackbundled](https://developer.apple.com/documentation/kernel/iousbhostpipe/3294725-asynciocompletioncallbackbundled)

# asyncIOCompletionCallbackBundled

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static void asyncIOCompletionCallbackBundled(void *owner, uint32_t ioCompletionCount, IOMemoryDescriptor **dataBufferArray, void **parameterArray, IOReturn *statusArray, uint32_t *actualByteCountArray);
```
