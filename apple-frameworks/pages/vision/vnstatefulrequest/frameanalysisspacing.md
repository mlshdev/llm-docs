> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnstatefulrequest/frameanalysisspacing](https://developer.apple.com/documentation/vision/vnstatefulrequest/frameanalysisspacing)

# frameAnalysisSpacing (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A time value that indicates the interval between analysis operations.

## Declaration

```swift
var frameAnalysisSpacing: CMTime { get }
```

## See Also

### Configuring the Request

- [minimumLatencyFrameCount](minimumlatencyframecount.md): The minimum number of frames a request processes before reporting an observation.

# frameAnalysisSpacing (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A time value that indicates the interval between analysis operations.

## Declaration

```objectivec
@property (readonly) CMTime frameAnalysisSpacing;
```

## See Also

### Configuring the Request

- [minimumLatencyFrameCount](minimumlatencyframecount.md): The minimum number of frames a request processes before reporting an observation.
