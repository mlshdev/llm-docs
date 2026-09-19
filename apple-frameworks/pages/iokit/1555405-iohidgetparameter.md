> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1555405-iohidgetparameter

# IOHIDGetParameter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.12)

## Declaration

```objectivec
kern_return_t IOHIDGetParameter(io_connect_t handle, CFStringRef key, IOByteCount maxSize, void *bytes, IOByteCount *actualSize);
```
