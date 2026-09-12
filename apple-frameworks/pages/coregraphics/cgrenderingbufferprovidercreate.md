> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrenderingbufferprovidercreate](https://developer.apple.com/documentation/coregraphics/cgrenderingbufferprovidercreate)

# CGRenderingBufferProviderCreate

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CGRenderingBufferProviderRefCGRenderingBufferProviderCreate(void *info, size_t size, void * (^lockPointer)(void *info), void (^unlockPointer)(void *info, void *pointer), void (^releaseInfo)(void *info));
```
