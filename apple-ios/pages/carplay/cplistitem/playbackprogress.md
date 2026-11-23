> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/playbackprogress

# playbackProgress (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current playback progress for a media item.

## Declaration

```swift
var playbackProgress: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

Set the value of this property to a floating-point value between `0.0` and `1.0`, with `0.0` indicating the start of playback and `1.0` indicating the end of playback.

When the [isPlaying](isplaying.md) property is `true`, CarPlay displays a progress bar and configures it with the value in this property. If you change the value of this property while the list item is visible, CarPlay updates the interface to reflect the new value.

## See Also

### Managing playback information

- [isPlaying](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

# playbackProgress (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current playback progress for a media item.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat playbackProgress;
```

<a id="discussion"></a>

## Discussion

Set the value of this property to a floating-point value between `0.0` and `1.0`, with `0.0` indicating the start of playback and `1.0` indicating the end of playback.

When the [playing](isplaying.md) property is `true`, CarPlay displays a progress bar and configures it with the value in this property. If you change the value of this property while the list item is visible, CarPlay updates the interface to reflect the new value.

## See Also

### Managing playback information

- [playing](isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playingIndicatorLocation](playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](../cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.
