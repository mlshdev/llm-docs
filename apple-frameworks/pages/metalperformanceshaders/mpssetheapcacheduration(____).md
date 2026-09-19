> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpssetheapcacheduration(_:_:)

# MPSSetHeapCacheDuration(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sets the timeout after which unused cached Metal heaps are released.

## Declaration

```swift
func MPSSetHeapCacheDuration(_ cmdBuf: any MTLCommandBuffer, _ seconds: Double)
```

# MPSSetHeapCacheDuration (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sets the timeout after which unused cached Metal heaps are released.

## Declaration

```objectivec
void MPSSetHeapCacheDuration(id<MTLCommandBuffer>cmdBuf, double seconds);
```
