> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotobadgeoptions](https://developer.apple.com/documentation/photosui/phlivephotobadgeoptions)

# PHLivePhotoBadgeOptions (Swift)

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImage(options:)](phlivephotoview/livephotobadgeimage%28options_%29.md) method.

## Declaration

```swift
struct PHLivePhotoBadgeOptions
```

## Topics

### Initializers

- [init(rawValue:)](phlivephotobadgeoptions/init%28rawvalue_%29.md): Creates Live Photo badge options from a raw value.

### Constants

- [liveOff](phlivephotobadgeoptions/liveoff.md): Return an icon for identifying assets whose additional Live Photo content is disabled.
- [overContent](phlivephotobadgeoptions/overcontent.md): Return a variant icon for use on a variable background such as an animating Live Photo view.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [PHLivePhotoViewPlaybackStyle](phlivephotoviewplaybackstyle.md): Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlayback(with:)](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.

# PHLivePhotoBadgeOptions (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Options for the semantic use and display style of icons for badging Live Photo assets, used by the [livePhotoBadgeImageWithOptions:](phlivephotoview/livephotobadgeimage%28options_%29.md) method.

## Declaration

```objectivec
enum PHLivePhotoBadgeOptions : NSUInteger;
```

## Topics

### Constants

- [PHLivePhotoBadgeOptionsLiveOff](phlivephotobadgeoptions/liveoff.md): Return an icon for identifying assets whose additional Live Photo content is disabled.
- [PHLivePhotoBadgeOptionsOverContent](phlivephotobadgeoptions/overcontent.md): Return a variant icon for use on a variable background such as an animating Live Photo view.

## See Also

### Constants

- [PHLivePhotoViewPlaybackStyle](phlivephotoviewplaybackstyle.md): Options for how much of the motion and sound content of a Live Photo to play, used in the [startPlaybackWithStyle:](phlivephotoview/startplayback%28with_%29.md) method and in messages to the view’s [delegate](phlivephotoview/delegate.md) object.
