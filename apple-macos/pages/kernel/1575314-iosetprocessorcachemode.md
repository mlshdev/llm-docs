> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575314-iosetprocessorcachemode](https://developer.apple.com/documentation/kernel/1575314-iosetprocessorcachemode)

# IOSetProcessorCacheMode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
IOReturn IOSetProcessorCacheMode(task_t task, IOVirtualAddress address, IOByteCount length, IOOptionBits cacheMode);
```
