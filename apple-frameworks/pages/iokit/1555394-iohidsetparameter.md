> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1555394-iohidsetparameter](https://developer.apple.com/documentation/iokit/1555394-iohidsetparameter)

# IOHIDSetParameter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.12)

## Declaration

```objectivec
kern_return_t IOHIDSetParameter(io_connect_t handle, CFStringRef key, const void *bytes, IOByteCount size);
```
