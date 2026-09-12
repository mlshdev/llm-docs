> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/playbackstyle-swift.property](https://developer.apple.com/documentation/photos/phasset/playbackstyle-swift.property)

# playbackStyle (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+

An enumerated value that describes how to present an asset to the user.

## Declaration

```swift
var playbackStyle: PHAsset.PlaybackStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to choose how your app displays the asset in [PHImageManager](../phimagemanager.md) regardless of the media type backing the asset.

## See Also

### Displaying an Asset

- [PHAsset.PlaybackStyle](playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.

# playbackStyle (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+

An enumerated value that describes how to present an asset to the user.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHAssetPlaybackStyle playbackStyle;
```

<a id="Discussion"></a>

## Discussion

Use this value to choose how your app displays the asset in [PHImageManager](../phimagemanager.md) regardless of the media type backing the asset.

## See Also

### Displaying an Asset

- [PHAssetPlaybackStyle](playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.
