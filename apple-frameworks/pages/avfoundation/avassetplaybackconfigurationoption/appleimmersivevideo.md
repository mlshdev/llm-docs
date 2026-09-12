> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackconfigurationoption/appleimmersivevideo](https://developer.apple.com/documentation/avfoundation/avassetplaybackconfigurationoption/appleimmersivevideo)

# appleImmersiveVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Indicates whether the asset is Apple Immersive Video.

## Declaration

```swift
static let appleImmersiveVideo: AVAssetPlaybackConfigurationOption
```

<a id="discussion"></a>

## Discussion

Clients may use this property to switch into specific display and control modes for Apple Immersive Video playback.

## See Also

### Configuration options

- [stereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [stereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [spatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [nonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

# AVAssetPlaybackConfigurationOptionAppleImmersiveVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** macOS 26.0+ · visionOS 26.0+

Indicates whether the asset is Apple Immersive Video.

## Declaration

```objectivec
extern AVAssetPlaybackConfigurationOption const AVAssetPlaybackConfigurationOptionAppleImmersiveVideo;
```

<a id="discussion"></a>

## Discussion

Clients may use this property to switch into specific display and control modes for Apple Immersive Video playback.

## See Also

### Configuration options

- [AVAssetPlaybackConfigurationOptionStereoVideo](stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [AVAssetPlaybackConfigurationOptionStereoMultiviewVideo](stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [AVAssetPlaybackConfigurationOptionSpatialVideo](spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [AVAssetPlaybackConfigurationOptionNonRectilinearProjection](nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.
