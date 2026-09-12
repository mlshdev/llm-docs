> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/requestprocessingoptions/cadence](https://developer.apple.com/documentation/vision/vnvideoprocessor/requestprocessingoptions/cadence)

# cadence (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The cadence the video processor maintains to process the request.

## Declaration

```swift
@NSCopying var cadence: VNVideoProcessor.Cadence? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the system processes every frame of video if you don’t provide a value for this property.

## See Also

### Configuring Options

- [VNVideoProcessor.Cadence](../cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessor.FrameRateCadence](../frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessor.TimeIntervalCadence](../timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.

# cadence (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The cadence the video processor maintains to process the request.

## Declaration

```objectivec
@property (copy, readwrite, nullable) VNVideoProcessorCadence * cadence;
```

<a id="Discussion"></a>

## Discussion

By default, the system processes every frame of video if you don’t provide a value for this property.

## See Also

### Configuring Options

- [VNVideoProcessorCadence](../cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessorFrameRateCadence](../frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessorTimeIntervalCadence](../timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.
