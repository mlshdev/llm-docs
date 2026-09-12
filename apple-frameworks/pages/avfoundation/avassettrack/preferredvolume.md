> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/preferredvolume](https://developer.apple.com/documentation/avfoundation/avassettrack/preferredvolume)

# preferredVolume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The track’s volume preference for playing its audible media.

> Load the value of [preferredVolume](../avpartialasyncproperty/preferredvolume-8q2yt.md) asynchronously instead.

## Declaration

```swift
var preferredVolume: Float { get }
```

<a id="Discussion"></a>

## Discussion

The preferred volume for an audio track is typically, but not always, `1.0`. For non-audible tracks, the value is `0.0`.

# preferredVolume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The track’s volume preference for playing its audible media.

## Declaration

```objectivec
@property (nonatomic, readonly) float preferredVolume;
```

<a id="Discussion"></a>

## Discussion

The preferred volume for an audio track is typically, but not always, `1.0`. For non-audible tracks, the value is `0.0`.

## See Also

### Accessing audible characteristics

- [hasAudioSampleDependencies](hasaudiosampledependencies.md): Deprecated. A Boolean value that indicates whether the track has sample dependencies.
