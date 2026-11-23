> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/playingindicatorlocation

# playingIndicatorLocation (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The placement of the Now Playing indicator in the list item’s row.

## Declaration

```swift
var playingIndicatorLocation: CPListItemPlayingIndicatorLocation { get set }
```

<a id="discussion"></a>

## Discussion

When the [isPlaying](isplaying.md) property is `true`, CarPlay displays the Now Playing indicator for the list item and places it according to the value in this property. The default value of this property is [CPListItemPlayingIndicatorLocation.leading](../cplistitemplayingindicatorlocation/leading.md).

## See Also

### Managing playback information

- [isPlaying](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

# playingIndicatorLocation (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The placement of the Now Playing indicator in the list item’s row.

## Declaration

```objectivec
@property (nonatomic, assign) CPListItemPlayingIndicatorLocation playingIndicatorLocation;
```

<a id="discussion"></a>

## Discussion

When the [playing](isplaying.md) property is `true`, CarPlay displays the Now Playing indicator for the list item and places it according to the value in this property. The default value of this property is [CPListItemPlayingIndicatorLocationLeading](../cplistitemplayingindicatorlocation/leading.md).

## See Also

### Managing playback information

- [playing](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.
