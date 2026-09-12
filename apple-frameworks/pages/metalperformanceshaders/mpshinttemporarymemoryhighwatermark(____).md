> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpshinttemporarymemoryhighwatermark(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpshinttemporarymemoryhighwatermark(_:_:))

# MPSHintTemporaryMemoryHighWaterMark(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Triggers Metal Performance Shaders to prefetch a Metal heap of the indicated size into its internal cache.

## Declaration

```swift
func MPSHintTemporaryMemoryHighWaterMark(_ cmdBuf: any MTLCommandBuffer, _ bytes: Int)
```

# MPSHintTemporaryMemoryHighWaterMark (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Triggers Metal Performance Shaders to prefetch a Metal heap of the indicated size into its internal cache.

## Declaration

```objectivec
void MPSHintTemporaryMemoryHighWaterMark(id<MTLCommandBuffer>cmdBuf, NSUInteger bytes);
```
