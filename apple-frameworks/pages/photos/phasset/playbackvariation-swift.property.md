> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/playbackvariation-swift.property](https://developer.apple.com/documentation/photos/phasset/playbackvariation-swift.property)

# playbackVariation (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+

The Live Photo playback variation for the asset.

## Declaration

```swift
var playbackVariation: PHAsset.PlaybackVariation { get }
```

<a id="discussion"></a>

## Discussion

Use this value to determine whether a Live Photo plays back as a Long Exposure, Mirror (Bounce), or Autoloop (Loop):

- `PHAssetPlaybackVariationNone`: the asset is not a Live Photo, or uses the default Live Photo presentation.
- `PHAssetPlaybackVariationAutoloop`: the Live Photo plays back as a Loop.
- `PHAssetPlaybackVariationMirror`: the Live Photo plays back as a Bounce.
- `PHAssetPlaybackVariationLongExposure`: the Live Photo plays back as a Long Exposure.

# playbackVariation (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+

The Live Photo playback variation for the asset.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHAssetPlaybackVariation playbackVariation;
```

<a id="discussion"></a>

## Discussion

Use this value to determine whether a Live Photo plays back as a Long Exposure, Mirror (Bounce), or Autoloop (Loop):

- `PHAssetPlaybackVariationNone`: the asset is not a Live Photo, or uses the default Live Photo presentation.
- `PHAssetPlaybackVariationAutoloop`: the Live Photo plays back as a Loop.
- `PHAssetPlaybackVariationMirror`: the Live Photo plays back as a Bounce.
- `PHAssetPlaybackVariationLongExposure`: the Live Photo plays back as a Long Exposure.
