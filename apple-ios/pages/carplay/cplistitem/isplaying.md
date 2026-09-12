> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/isplaying](https://developer.apple.com/documentation/carplay/cplistitem/isplaying)

# isPlaying (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the list item displays its Now Playing indicator.

## Declaration

```swift
var isPlaying: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the list item displays its Now Playing indicator and positions it using the location that the [playingIndicatorLocation](playingindicatorlocation.md) property specifies. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Playback Information

- [isExplicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.

# playing (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the list item displays its Now Playing indicator.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isPlaying) BOOL playing;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the list item displays its Now Playing indicator and positions it using the location that the [playingIndicatorLocation](playingindicatorlocation.md) property specifies. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Playback Information

- [explicitContent](isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](playbackprogress.md): The playback progress status for the content that the list item represents.
