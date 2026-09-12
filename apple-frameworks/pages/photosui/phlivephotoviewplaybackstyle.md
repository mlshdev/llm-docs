> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewplaybackstyle](https://developer.apple.com/documentation/photosui/phlivephotoviewplaybackstyle)

# PHLivePhotoViewPlaybackStyle (Swift)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlayback(with:)](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.

## Declaration

```swift
enum PHLivePhotoViewPlaybackStyle
```

## Topics

### Constants

- [PHLivePhotoViewPlaybackStyle.undefined](phlivephotoviewplaybackstyle/undefined.md): This value is invalid for use.
- [PHLivePhotoViewPlaybackStyle.full](phlivephotoviewplaybackstyle/full.md): Plays back the entire motion and sound content of the Live Photo, including transition effects at the start and end.
- [PHLivePhotoViewPlaybackStyle.hint](phlivephotoviewplaybackstyle/hint.md): Plays back only a brief section of the motion content of the Live Photo, without sound.

### Initializers

- [init(rawValue:)](phlivephotoviewplaybackstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [PHLivePhotoBadgeOptions](phlivephotobadgeoptions.md): Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImage(options:)](phlivephotoview/livephotobadgeimage%28options_%29.md) method.

# PHLivePhotoViewPlaybackStyle (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlaybackWithStyle:](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.

## Declaration

```objectivec
enum PHLivePhotoViewPlaybackStyle : NSInteger;
```

## Topics

### Constants

- [PHLivePhotoViewPlaybackStyleUndefined](phlivephotoviewplaybackstyle/undefined.md): This value is invalid for use.
- [PHLivePhotoViewPlaybackStyleFull](phlivephotoviewplaybackstyle/full.md): Plays back the entire motion and sound content of the Live Photo, including transition effects at the start and end.
- [PHLivePhotoViewPlaybackStyleHint](phlivephotoviewplaybackstyle/hint.md): Plays back only a brief section of the motion content of the Live Photo, without sound.

## See Also

### Constants

- [PHLivePhotoBadgeOptions](phlivephotobadgeoptions.md): Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImageWithOptions:](phlivephotoview/livephotobadgeimage%28options_%29.md) method.
