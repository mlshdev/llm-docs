> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/loadvideoperformancemetrics(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/loadvideoperformancemetrics(completionhandler:))

# loadVideoPerformanceMetrics(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

## Declaration

```swift
func loadVideoPerformanceMetrics(completionHandler: @escaping @Sendable (AVVideoPerformanceMetrics?) -> Void)
```

```swift
var videoPerformanceMetrics: AVVideoPerformanceMetrics? { get async }
```

# loadVideoPerformanceMetricsWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

## Declaration

```objectivec
- (void) loadVideoPerformanceMetricsWithCompletionHandler:(void (^)(AVVideoPerformanceMetrics *videoPerformanceMetrics)) completionHandler;
```
