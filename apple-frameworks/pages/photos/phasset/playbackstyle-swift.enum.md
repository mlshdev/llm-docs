> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/playbackstyle-swift.enum](https://developer.apple.com/documentation/photos/phasset/playbackstyle-swift.enum)

# PHAsset.PlaybackStyle (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An enumeration of asset playback styles that dictate how to present an asset to the user.

## Declaration

```swift
enum PlaybackStyle
```

## Topics

### Playback Styles

- [PHAsset.PlaybackStyle.unsupported](playbackstyle-swift.enum/unsupported.md): An enumeration indicating that the asset has an unsupported or undefined media playback type.
- [PHAsset.PlaybackStyle.image](playbackstyle-swift.enum/image.md): An enumeration indicating that the asset should be displayed as a still image.
- [PHAsset.PlaybackStyle.imageAnimated](playbackstyle-swift.enum/imageanimated.md): An enumeration indicating that the asset should be displayed as an animated image.
- [PHAsset.PlaybackStyle.livePhoto](playbackstyle-swift.enum/livephoto.md): An enumeration indicating that the asset should be displayed as a Live Photo.
- [PHAsset.PlaybackStyle.video](playbackstyle-swift.enum/video.md): An enumeration indicating that the asset should be displayed as a video.
- [PHAsset.PlaybackStyle.videoLooping](playbackstyle-swift.enum/videolooping.md): An enumeration indicating that the asset should be displayed as a looping video.

### Initializers

- [init(rawValue:)](playbackstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying an Asset

- [playbackStyle](playbackstyle-swift.property.md): An enumerated value that describes how to present an asset to the user.

# PHAssetPlaybackStyle (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An enumeration of asset playback styles that dictate how to present an asset to the user.

## Declaration

```objectivec
enum PHAssetPlaybackStyle : NSInteger;
```

## Topics

### Playback Styles

- [PHAssetPlaybackStyleUnsupported](playbackstyle-swift.enum/unsupported.md): An enumeration indicating that the asset has an unsupported or undefined media playback type.
- [PHAssetPlaybackStyleImage](playbackstyle-swift.enum/image.md): An enumeration indicating that the asset should be displayed as a still image.
- [PHAssetPlaybackStyleImageAnimated](playbackstyle-swift.enum/imageanimated.md): An enumeration indicating that the asset should be displayed as an animated image.
- [PHAssetPlaybackStyleLivePhoto](playbackstyle-swift.enum/livephoto.md): An enumeration indicating that the asset should be displayed as a Live Photo.
- [PHAssetPlaybackStyleVideo](playbackstyle-swift.enum/video.md): An enumeration indicating that the asset should be displayed as a video.
- [PHAssetPlaybackStyleVideoLooping](playbackstyle-swift.enum/videolooping.md): An enumeration indicating that the asset should be displayed as a looping video.

## See Also

### Displaying an Asset

- [playbackStyle](playbackstyle-swift.property.md): An enumerated value that describes how to present an asset to the user.
