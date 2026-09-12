> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/livephoto](https://developer.apple.com/documentation/photos/phcontenteditinginput/livephoto)

# livePhoto (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The unedited Live Photo content of the editing input.

## Declaration

```swift
var livePhoto: PHLivePhoto? { get }
```

<a id="Discussion"></a>

## Discussion

To edit the video and photo content of the Live Photo, create a [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md) object using this [PHContentEditingInput](../phcontenteditinginput.md) object.

If the editing input does not represent a Live Photo, this property’s value is `nil`, indicating that you cannot use this [PHContentEditingInput](../phcontenteditinginput.md) object to create a Live Photo editing context.

## See Also

### Working with Live Photo Assets

- [playbackStyle](playbackstyle.md): The style in which to present this content to the user.
- [PHAsset.PlaybackStyle](../phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.

# livePhoto (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The unedited Live Photo content of the editing input.

## Declaration

```objectivec
@property (strong, readonly, nullable) PHLivePhoto * livePhoto;
```

<a id="Discussion"></a>

## Discussion

To edit the video and photo content of the Live Photo, create a [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md) object using this [PHContentEditingInput](../phcontenteditinginput.md) object.

If the editing input does not represent a Live Photo, this property’s value is `nil`, indicating that you cannot use this [PHContentEditingInput](../phcontenteditinginput.md) object to create a Live Photo editing context.

## See Also

### Working with Live Photo Assets

- [playbackStyle](playbackstyle.md): The style in which to present this content to the user.
- [PHAssetPlaybackStyle](../phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.
