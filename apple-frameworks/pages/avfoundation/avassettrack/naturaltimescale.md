> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/naturaltimescale](https://developer.apple.com/documentation/avfoundation/avassettrack/naturaltimescale)

# naturalTimeScale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The natural time scale of the media that a track references.

> Load the value of [naturalTimeScale](../avpartialasyncproperty/naturaltimescale.md) asynchronously instead.

## Declaration

```swift
var naturalTimeScale: CMTimeScale { get }
```

# naturalTimeScale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The natural time scale of the media that a track references.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeScale naturalTimeScale;
```

## See Also

### Accessing temporal information

- [timeRange](timerange.md): Deprecated. The time range of the track within the overall timeline of the asset.
- [estimatedDataRate](estimateddatarate.md): Deprecated. The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTimeForTrackTime:](samplepresentationtime%28fortracktime_%29.md): Deprecated. Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
