> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/sourcetrackidforframetiming](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/sourcetrackidforframetiming)

# sourceTrackIDForFrameTiming (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.13+ (deprecated in 26.0) · tvOS 11.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

An identifier of the source track from which the video composition derives frame timing.

## Declaration

```swift
var sourceTrackIDForFrameTiming: CMPersistentTrackID { get set }
```

<a id="Discussion"></a>

## Discussion

If an empty edit is encountered in the source asset’s track, the compositor composes frames as needed up to the frequency specified in [frameDuration](../avvideocomposition/frameduration.md) property. Otherwise the frame timing for the video composition is derived from the source asset’s track with the corresponding ID.

## See Also

### Identifying source tracks

- [sourceSampleDataTrackIDs](sourcesampledatatrackids-7i02t.md): The identifiers of source sample data tracks in the composition that the object requires to compose frames.

# sourceTrackIDForFrameTiming (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An identifier of the source track from which the video composition derives frame timing.

## Declaration

```objectivec
@property (nonatomic) CMPersistentTrackID sourceTrackIDForFrameTiming;
```

<a id="Discussion"></a>

## Discussion

If an empty edit is encountered in the source asset’s track, the compositor composes frames as needed up to the frequency specified in [frameDuration](../avvideocomposition/frameduration.md) property. Otherwise the frame timing for the video composition is derived from the source asset’s track with the corresponding ID.

## See Also

### Identifying source tracks

- [sourceSampleDataTrackIDs](sourcesampledatatrackids-21o6b.md): The identifiers of source sample data tracks in the composition that the compositor requires to compose frames.
