> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/isexplicitcontent

# isExplicitContent (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the list item displays an explicit content indicator.

## Declaration

```swift
var isExplicitContent: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to display an explicit content indicator next to the primary text. The default value of this property is `false`.

## See Also

### Managing playback information

- [isPlaying](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.

# explicitContent (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the list item displays an explicit content indicator.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isExplicitContent) BOOL explicitContent;
```

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to display an explicit content indicator next to the primary text. The default value of this property is `false`.

## See Also

### Managing playback information

- [playing](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
