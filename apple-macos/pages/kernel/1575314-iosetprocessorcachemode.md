> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1575314-iosetprocessorcachemode

# IOSetProcessorCacheMode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
IOReturn IOSetProcessorCacheMode(task_t task, IOVirtualAddress address, IOByteCount length, IOOptionBits cacheMode);
```
