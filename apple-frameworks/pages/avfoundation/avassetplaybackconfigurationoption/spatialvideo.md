> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackconfigurationoption/spatialvideo](https://developer.apple.com/documentation/avfoundation/avassetplaybackconfigurationoption/spatialvideo)

# spatialVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An option that indicates whether the asset can render as spatial video.

## Declaration

```swift
static let spatialVideo: AVAssetPlaybackConfigurationOption
```

<a id="Discussion"></a>

## Discussion

Apps may use this property to determine whether to configure spatial video rendering.

## See Also

### Configuration options

- [stereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [stereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [appleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [nonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

# AVAssetPlaybackConfigurationOptionSpatialVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An option that indicates whether the asset can render as spatial video.

## Declaration

```objectivec
extern AVAssetPlaybackConfigurationOption const AVAssetPlaybackConfigurationOptionSpatialVideo;
```

<a id="Discussion"></a>

## Discussion

Apps may use this property to determine whether to configure spatial video rendering.

## See Also

### Configuration options

- [AVAssetPlaybackConfigurationOptionStereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [AVAssetPlaybackConfigurationOptionStereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [AVAssetPlaybackConfigurationOptionAppleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [AVAssetPlaybackConfigurationOptionNonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.
