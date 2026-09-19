> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpshinttemporarymemoryhighwatermark(_:_:)

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
