> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitemplayingindicatorlocation](https://developer.apple.com/documentation/carplay/cplistitemplayingindicatorlocation)

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

Use these constants to set the value of a list item’s [playingIndicatorLocation](cplistitem/playingindicatorlocation.md) property. When you set a list item’s [isPlaying](cplistitem/isplaying.md) property to `true`, it uses the specified location to position the Now Playing indicator.

## Topics

### Now Playing Indicator Locations

- [CPListItemPlayingIndicatorLocation.leading](cplistitemplayingindicatorlocation/leading.md): Align the Now Playing indicator with the leading edge of the list item.
- [CPListItemPlayingIndicatorLocation.trailing](cplistitemplayingindicatorlocation/trailing.md): Align the Now Playing indicator with the trailing edge of the list item.

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

### Managing Playback Information

- [isExplicitContent](cplistitem/isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [isPlaying](cplistitem/isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The playback progress status for the content that the list item represents.

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

Use these constants to set the value of a list item’s [playingIndicatorLocation](cplistitem/playingindicatorlocation.md) property. When you set a list item’s [playing](cplistitem/isplaying.md) property to `true`, it uses the specified location to position the Now Playing indicator.

## Topics

### Now Playing Indicator Locations

- [CPListItemPlayingIndicatorLocationLeading](cplistitemplayingindicatorlocation/leading.md): Align the Now Playing indicator with the leading edge of the list item.
- [CPListItemPlayingIndicatorLocationTrailing](cplistitemplayingindicatorlocation/trailing.md): Align the Now Playing indicator with the trailing edge of the list item.

## See Also

### Managing Playback Information

- [explicitContent](cplistitem/isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playing](cplistitem/isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The playback progress status for the content that the list item represents.
