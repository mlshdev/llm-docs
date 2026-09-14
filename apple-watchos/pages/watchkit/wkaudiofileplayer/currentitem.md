> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/currentitem

# currentItem (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The player’s current item.

## Declaration

```swift
var currentItem: WKAudioFilePlayerItem? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set at initialization time.

## See Also

### Getting Information About the Player

- [status](status.md): Deprecated. The status of the player.
- [error](error.md): Deprecated. An error that describes the cause of a failure.

# currentItem (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The player’s current item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKAudioFilePlayerItem * currentItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set at initialization time.

## See Also

### Getting Information About the Player

- [status](status.md): Deprecated. The status of the player.
- [error](error.md): Deprecated. An error that describes the cause of a failure.
