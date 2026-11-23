> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/isplaying

# isPlaying (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the list item displays the Now Playing indicator.

## Declaration

```swift
var isPlaying: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `true` to display the Now Playing indicator for the item. CarPlay places this indicator using the information in the [playingIndicatorLocation](playingindicatorlocation.md) property of the item. The default value of this property is `false`.

## See Also

### Managing playback information

- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

# playing (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the list item displays the Now Playing indicator.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isPlaying) BOOL playing;
```

<a id="discussion"></a>

## Discussion

Set this property to `true` to display the Now Playing indicator for the item. CarPlay places this indicator using the information in the [playingIndicatorLocation](playingindicatorlocation.md) property of the item. The default value of this property is `false`.

## See Also

### Managing playback information

- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.
