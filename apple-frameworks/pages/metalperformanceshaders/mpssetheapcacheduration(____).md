> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssetheapcacheduration(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpssetheapcacheduration(_:_:))

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
