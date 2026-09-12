> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/isexplicitcontent](https://developer.apple.com/documentation/carplay/cplistitem/isexplicitcontent)

# isExplicitContent (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the list item displays its explicit content indicator.

## Declaration

```swift
var isExplicitContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the list item displays an explicit content indicator beside its primary text. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Playback Information

- [isPlaying](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.

# explicitContent (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the list item displays its explicit content indicator.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isExplicitContent) BOOL explicitContent;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the list item displays an explicit content indicator beside its primary text. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Playback Information

- [playing](isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.
