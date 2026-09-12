> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/timerange](https://developer.apple.com/documentation/avfoundation/avassettrack/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The time range of the track within the overall timeline of the asset.

> Load the value of [timeRange](../avpartialasyncproperty/timerange.md) asynchronously instead.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

If the start of the time range is greater than [zero](../../coremedia/cmtime/zero.md), the track doesn’t initially have media data to present. This condition may occur when the media delays an audio track to align the start of audio with a specific video frame. You can test for this as the example below shows:

**Swift**

```swift
if track.timeRange.start > .zero {
    // Delayed start.
}
```

**Objective-C**

```objc
if CMTIME_COMPARE_INLINE(track.timeRange.start, >, kCMTimeZero) {
    // Delayed start.
}
```

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time range of the track within the overall timeline of the asset.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

If the start of the time range is greater than [kCMTimeZero](../../coremedia/cmtime/zero.md), the track doesn’t initially have media data to present. This condition may occur when the media delays an audio track to align the start of audio with a specific video frame. You can test for this as the example below shows:

**Swift**

```swift
if track.timeRange.start > .zero {
    // Delayed start.
}
```

**Objective-C**

```objc
if CMTIME_COMPARE_INLINE(track.timeRange.start, >, kCMTimeZero) {
    // Delayed start.
}
```

## See Also

### Accessing temporal information

- [naturalTimeScale](naturaltimescale.md): Deprecated. The natural time scale of the media that a track references.
- [estimatedDataRate](estimateddatarate.md): Deprecated. The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTimeForTrackTime:](samplepresentationtime%28fortracktime_%29.md): Deprecated. Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
