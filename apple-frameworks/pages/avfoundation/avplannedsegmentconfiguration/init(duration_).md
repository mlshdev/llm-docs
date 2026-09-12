> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentconfiguration/init(duration:)](https://developer.apple.com/documentation/avfoundation/avplannedsegmentconfiguration/init(duration:))

# init(duration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVPlannedSegmentConfiguration specifying the duration of the planned segment.

## Declaration

```swift
init(duration: CMTime)
```

## Parameters

- `duration`: The total duration of this planned segment. If an empty edit is included, this duration may be larger than the sum of the durations of the samples in this planned segment.

<a id="return-value"></a>

## Return Value

An instance of AVPlannedSegmentConfiguration, or nil if initialization fails.

<a id="discussion"></a>

## Discussion

The duration parameter must be numeric and greater than 0. Otherwise, the initializer throws NSInvalidArgumentException.

# initWithDuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVPlannedSegmentConfiguration specifying the duration of the planned segment.

## Declaration

```objectivec
- (instancetype) initWithDuration:(CMTime) duration;
```

## Parameters

- `duration`: The total duration of this planned segment. If an empty edit is included, this duration may be larger than the sum of the durations of the samples in this planned segment.

<a id="return-value"></a>

## Return Value

An instance of AVPlannedSegmentConfiguration, or nil if initialization fails.

<a id="discussion"></a>

## Discussion

The duration parameter must be numeric and greater than 0. Otherwise, the initializer throws NSInvalidArgumentException.
