> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnstatefulrequest/minimumlatencyframecount](https://developer.apple.com/documentation/vision/vnstatefulrequest/minimumlatencyframecount)

# minimumLatencyFrameCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The minimum number of frames a request processes before reporting an observation.

## Declaration

```swift
var minimumLatencyFrameCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Video-based requests often need a minimum number of frames before they can report an observation. For example, a movement detection request requires a minimum of five frames before it can generate an observation. This value indicates how responsive a request is at processing incoming data.

## See Also

### Configuring the Request

- [frameAnalysisSpacing](frameanalysisspacing.md): A time value that indicates the interval between analysis operations.

# minimumLatencyFrameCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The minimum number of frames a request processes before reporting an observation.

## Declaration

```objectivec
@property (readonly) NSInteger minimumLatencyFrameCount;
```

<a id="Discussion"></a>

## Discussion

Video-based requests often need a minimum number of frames before they can report an observation. For example, a movement detection request requires a minimum of five frames before it can generate an observation. This value indicates how responsive a request is at processing incoming data.

## See Also

### Configuring the Request

- [frameAnalysisSpacing](frameanalysisspacing.md): A time value that indicates the interval between analysis operations.
