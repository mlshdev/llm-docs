> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/playbackstyle](https://developer.apple.com/documentation/photos/phcontenteditinginput/playbackstyle)

# playbackStyle (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The style in which to present this content to the user.

## Declaration

```swift
var playbackStyle: PHAsset.PlaybackStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to specify the type of view and the appropriate APIs on the content editing input to display this content.

## See Also

### Working with Live Photo Assets

- [livePhoto](livephoto.md): The unedited Live Photo content of the editing input.
- [PHAsset.PlaybackStyle](../phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.

# playbackStyle (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The style in which to present this content to the user.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHAssetPlaybackStyle playbackStyle;
```

<a id="Discussion"></a>

## Discussion

Use this value to specify the type of view and the appropriate APIs on the content editing input to display this content.

## See Also

### Working with Live Photo Assets

- [livePhoto](livephoto.md): The unedited Live Photo content of the editing input.
- [PHAssetPlaybackStyle](../phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.
