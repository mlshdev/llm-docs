> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackconfigurationoption/stereovideo](https://developer.apple.com/documentation/avfoundation/avassetplaybackconfigurationoption/stereovideo)

# stereoVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An option that indicates whether the asset can render as stereo video.

## Declaration

```swift
static let stereoVideo: AVAssetPlaybackConfigurationOption
```

<a id="Discussion"></a>

## Discussion

Apps may use this property to determine whether to configure stereo video rendering.

## See Also

### Configuration options

- [stereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [spatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [appleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [nonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

# AVAssetPlaybackConfigurationOptionStereoVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An option that indicates whether the asset can render as stereo video.

## Declaration

```objectivec
extern AVAssetPlaybackConfigurationOption const AVAssetPlaybackConfigurationOptionStereoVideo;
```

<a id="Discussion"></a>

## Discussion

Apps may use this property to determine whether to configure stereo video rendering.

## See Also

### Configuration options

- [AVAssetPlaybackConfigurationOptionStereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [AVAssetPlaybackConfigurationOptionSpatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [AVAssetPlaybackConfigurationOptionAppleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [AVAssetPlaybackConfigurationOptionNonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.
