> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedvideosegmentconfiguration/init(numberofframes:duration:)](https://developer.apple.com/documentation/avfoundation/avplannedvideosegmentconfiguration/init(numberofframes:duration:))

# init(numberOfFrames:duration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVPlannedVideoSegmentConfiguration specifying the number of frames in and total duration of the segment.

## Declaration

```swift
init(numberOfFrames frameCount: Int, duration: CMTime)
```

## Parameters

- `frameCount`: The number of frames in this planned video segment.
- `duration`: The duration of this planned video segment.

<a id="return-value"></a>

## Return Value

An instance of AVPlannedVideoSegmentConfiguration.

<a id="discussion"></a>

## Discussion

For best results, frameCount and duration should be greater or equal to the minimumFrameCount and minimumDuration of AVPlannedVideoSegmentBoundaryGuidelines respectively. This initializer throws NSInvalidArgumentException if frameCount is less than or equal to 0, or duration is not numeric, or duration is less than or equal to 0.

# initWithNumberOfFrames:duration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVPlannedVideoSegmentConfiguration specifying the number of frames in and total duration of the segment.

## Declaration

```objectivec
- (instancetype) initWithNumberOfFrames:(NSInteger) frameCount duration:(CMTime) duration;
```

## Parameters

- `frameCount`: The number of frames in this planned video segment.
- `duration`: The duration of this planned video segment.

<a id="return-value"></a>

## Return Value

An instance of AVPlannedVideoSegmentConfiguration.

<a id="discussion"></a>

## Discussion

For best results, frameCount and duration should be greater or equal to the minimumFrameCount and minimumDuration of AVPlannedVideoSegmentBoundaryGuidelines respectively. This initializer throws NSInvalidArgumentException if frameCount is less than or equal to 0, or duration is not numeric, or duration is less than or equal to 0.
