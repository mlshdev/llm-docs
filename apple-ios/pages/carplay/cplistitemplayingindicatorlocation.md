> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitemplayingindicatorlocation

# CPListItemPlayingIndicatorLocation (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The locations where a list item can display the Now Playing indicator.

## Declaration

```swift
enum CPListItemPlayingIndicatorLocation
```

<a id="overview"></a>

## Overview

Use these constants to configure the [playingIndicatorLocation](cplistitem/playingindicatorlocation.md) property of the list item. When you set a list item’s [isPlaying](cplistitem/isplaying.md) property to `true`, CarPlay displays Now Playing information the item’s row and positions it according to the constant you specified.

## Topics

### Now Playing indicator locations

- [CPListItemPlayingIndicatorLocation.leading](cplistitemplayingindicatorlocation/leading.md): An option to display the Now Playing indicator on the leading edge of the list item’s row.
- [CPListItemPlayingIndicatorLocation.trailing](cplistitemplayingindicatorlocation/trailing.md): An option to display the Now Playing indicator on the trailing edge of the list item’s row.

### Initializers

- [init(rawValue:)](cplistitemplayingindicatorlocation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing playback information

- [isPlaying](cplistitem/isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [isExplicitContent](cplistitem/isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

# CPListItemPlayingIndicatorLocation (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The locations where a list item can display the Now Playing indicator.

## Declaration

```objectivec
enum CPListItemPlayingIndicatorLocation : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to configure the [playingIndicatorLocation](cplistitem/playingindicatorlocation.md) property of the list item. When you set a list item’s [playing](cplistitem/isplaying.md) property to `true`, CarPlay displays Now Playing information the item’s row and positions it according to the constant you specified.

## Topics

### Now Playing indicator locations

- [CPListItemPlayingIndicatorLocationLeading](cplistitemplayingindicatorlocation/leading.md): An option to display the Now Playing indicator on the leading edge of the list item’s row.
- [CPListItemPlayingIndicatorLocationTrailing](cplistitemplayingindicatorlocation/trailing.md): An option to display the Now Playing indicator on the trailing edge of the list item’s row.

## See Also

### Managing playback information

- [playing](cplistitem/isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [explicitContent](cplistitem/isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.
