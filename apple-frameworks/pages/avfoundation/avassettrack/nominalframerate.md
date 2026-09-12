> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/nominalframerate](https://developer.apple.com/documentation/avfoundation/avassettrack/nominalframerate)

# nominalFrameRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The frame rate of the track, in frames per second.

> Load the value of [nominalFrameRate](../avpartialasyncproperty/nominalframerate.md) asynchronously instead.

## Declaration

```swift
var nominalFrameRate: Float { get }
```

<a id="Discussion"></a>

## Discussion

The nominal frame rate indicates the number of frames per second for tracks that contain a full frame per media sample. For field-based (interlaced) video tracks, the value of this property indicates the field rate, not the frame rate.

# nominalFrameRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The frame rate of the track, in frames per second.

## Declaration

```objectivec
@property (nonatomic, readonly) float nominalFrameRate;
```

<a id="Discussion"></a>

## Discussion

The nominal frame rate indicates the number of frames per second for tracks that contain a full frame per media sample. For field-based (interlaced) video tracks, the value of this property indicates the field rate, not the frame rate.

## See Also

### Accessing frame-based characteristics

- [minFrameDuration](minframeduration.md): Deprecated. The minimum duration of the track’s frames.
- [requiresFrameReordering](requiresframereordering.md): Deprecated. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.
