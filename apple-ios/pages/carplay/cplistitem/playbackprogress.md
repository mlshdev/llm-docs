> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/playbackprogress](https://developer.apple.com/documentation/carplay/cplistitem/playbackprogress)

# playbackProgress (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The playback progress status for the content that the list item represents.

## Declaration

```swift
var playbackProgress: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the list item represents media content that is playable, set this property’s value to a fractional number between 0 and 1 to indicate its playback progress. The list item displays a progress bar that derives its value from this property.

## See Also

### Managing Playback Information

- [isExplicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [isPlaying](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.

# playbackProgress (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The playback progress status for the content that the list item represents.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat playbackProgress;
```

<a id="Discussion"></a>

## Discussion

If the list item represents media content that is playable, set this property’s value to a fractional number between 0 and 1 to indicate its playback progress. The list item displays a progress bar that derives its value from this property.

## See Also

### Managing Playback Information

- [explicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playing](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
