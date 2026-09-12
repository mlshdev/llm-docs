> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/error](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/error)

# error (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An error that describes the cause of a failure.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` unless the [status](status.md) property of the player item is [WKAudioFilePlayerStatus.failed](../wkaudiofileplayerstatus/failed.md). When playback fails, the error indicates the reason for the failure.

## See Also

### Getting Information About the Player

- [currentItem](currentitem.md): Deprecated. The player’s current item.
- [status](status.md): Deprecated. The status of the player.

# error (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An error that describes the cause of a failure.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` unless the [status](status.md) property of the player item is [WKAudioFilePlayerStatusFailed](../wkaudiofileplayerstatus/failed.md). When playback fails, the error indicates the reason for the failure.

## See Also

### Getting Information About the Player

- [currentItem](currentitem.md): Deprecated. The player’s current item.
- [status](status.md): Deprecated. The status of the player.
