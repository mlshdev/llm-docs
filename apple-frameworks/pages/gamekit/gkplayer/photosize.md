> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/photosize](https://developer.apple.com/documentation/gamekit/gkplayer/photosize)

# GKPlayer.PhotoSize (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The size of a photo that Game Center loads.

## Declaration

```swift
enum PhotoSize
```

## Topics

### Constants

- [GKPlayer.PhotoSize.small](photosize/small.md): Loads a small photo.
- [GKPlayer.PhotoSize.normal](photosize/normal.md): Loads a normal-sized photo.

### Initializers

- [init(rawValue:)](photosize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading player photos

- [loadPhoto(for:withCompletionHandler:)](loadphoto%28for_withcompletionhandler_%29.md): Loads a photo of the player from Game Center.

# GKPhotoSize (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The size of a photo that Game Center loads.

## Declaration

```objectivec
enum GKPhotoSize : NSInteger;
```

## Topics

### Constants

- [GKPhotoSizeSmall](photosize/small.md): Loads a small photo.
- [GKPhotoSizeNormal](photosize/normal.md): Loads a normal-sized photo.

## See Also

### Loading player photos

- [loadPhotoForSize:withCompletionHandler:](loadphoto%28for_withcompletionhandler_%29.md): Loads a photo of the player from Game Center.
