> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackconfigurationoption](https://developer.apple.com/documentation/avfoundation/avassetplaybackconfigurationoption)

# AVAssetPlaybackConfigurationOption (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that defines playback configuration options for an asset.

## Declaration

```swift
struct AVAssetPlaybackConfigurationOption
```

## Topics

### Configuration options

- [stereoVideo](avassetplaybackconfigurationoption/stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [stereoMultiviewVideo](avassetplaybackconfigurationoption/stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [spatialVideo](avassetplaybackconfigurationoption/spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [appleImmersiveVideo](avassetplaybackconfigurationoption/appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [nonRectilinearProjection](avassetplaybackconfigurationoption/nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

### Initializers

- [init(rawValue:)](avassetplaybackconfigurationoption/init%28rawvalue_%29.md): Creates a configuration option from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utilities

- [AVAssetPlaybackAssistant](avassetplaybackassistant.md): An object that provides playback information for an asset.

# AVAssetPlaybackConfigurationOption (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that defines playback configuration options for an asset.

## Declaration

```objectivec
typedef NSString * AVAssetPlaybackConfigurationOption;
```

## Topics

### Configuration options

- [AVAssetPlaybackConfigurationOptionStereoVideo](avassetplaybackconfigurationoption/stereovideo.md): An option that indicates whether the asset can render as stereo video.
- [AVAssetPlaybackConfigurationOptionStereoMultiviewVideo](avassetplaybackconfigurationoption/stereomultiviewvideo.md): An option that indicates whether the asset is in a multiview compression format and can render as stereo video.
- [AVAssetPlaybackConfigurationOptionSpatialVideo](avassetplaybackconfigurationoption/spatialvideo.md): An option that indicates whether the asset can render as spatial video.
- [AVAssetPlaybackConfigurationOptionAppleImmersiveVideo](avassetplaybackconfigurationoption/appleimmersivevideo.md): Indicates whether the asset is Apple Immersive Video.
- [AVAssetPlaybackConfigurationOptionNonRectilinearProjection](avassetplaybackconfigurationoption/nonrectilinearprojection.md): Indicates whether the asset calls for the use of a non-rectilinear projection for rendering video.

## See Also

### Utilities

- [AVAssetPlaybackAssistant](avassetplaybackassistant.md): An object that provides playback information for an asset.
