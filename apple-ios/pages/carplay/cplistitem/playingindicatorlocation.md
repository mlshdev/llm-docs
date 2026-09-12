> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/playingindicatorlocation](https://developer.apple.com/documentation/carplay/cplistitem/playingindicatorlocation)

# playingIndicatorLocation (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The location where the list item displays its Now Playing indicator.

## Declaration

```swift
var playingIndicatorLocation: CPListItemPlayingIndicatorLocation { get set }
```

<a id="Discussion"></a>

## Discussion

If the list item’s [isPlaying](isplaying.md) property is set to [true](https://developer.apple.com/documentation/swift/true), it uses the value of this property to position its Now Playing indicator. The default value is [CPListItemPlayingIndicatorLocation.leading](../cplistitemplayingindicatorlocation/leading.md).

## See Also

### Managing Playback Information

- [isExplicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [isPlaying](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.

# playingIndicatorLocation (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The location where the list item displays its Now Playing indicator.

## Declaration

```objectivec
@property (nonatomic, assign) CPListItemPlayingIndicatorLocation playingIndicatorLocation;
```

<a id="Discussion"></a>

## Discussion

If the list item’s [playing](isplaying.md) property is set to [true](https://developer.apple.com/documentation/swift/true), it uses the value of this property to position its Now Playing indicator. The default value is [CPListItemPlayingIndicatorLocationLeading](../cplistitemplayingindicatorlocation/leading.md).

## See Also

### Managing Playback Information

- [explicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playing](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.
