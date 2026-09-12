> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackconfigurationoption/nonrectilinearprojection](https://developer.apple.com/documentation/avfoundation/avassetplaybackconfigurationoption/nonrectilinearprojection)

# nonRectilinearProjection (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

## Declaration

```swift
static let nonRectilinearProjection: AVAssetPlaybackConfigurationOption
```

<a id="discussion"></a>

## Discussion

Clients may use this property to determine whether to configure a non-rectilinear projection when displaying video.

## See Also

### Configuration options

- [stereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [stereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [spatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [appleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.

# AVAssetPlaybackConfigurationOptionNonRectilinearProjection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

## Declaration

```objectivec
extern AVAssetPlaybackConfigurationOption const AVAssetPlaybackConfigurationOptionNonRectilinearProjection;
```

<a id="discussion"></a>

## Discussion

Clients may use this property to determine whether to configure a non-rectilinear projection when displaying video.

## See Also

### Configuration options

- [AVAssetPlaybackConfigurationOptionStereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [AVAssetPlaybackConfigurationOptionStereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [AVAssetPlaybackConfigurationOptionSpatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [AVAssetPlaybackConfigurationOptionAppleImmersiveVideo](appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
