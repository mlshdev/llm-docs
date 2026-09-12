> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/status](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/status)

# status (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The status of the player.

## Declaration

```swift
var status: WKAudioFilePlayerStatus { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [WKAudioFilePlayerStatus.failed](../wkaudiofileplayerstatus/failed.md), the [error](error.md) property contains the reason for the failure.

## See Also

### Getting Information About the Player

- [currentItem](currentitem.md): Deprecated. The player’s current item.
- [error](error.md): Deprecated. An error that describes the cause of a failure.

# status (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The status of the player.

## Declaration

```objectivec
@property (nonatomic, readonly) WKAudioFilePlayerStatus status;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [WKAudioFilePlayerStatusFailed](../wkaudiofileplayerstatus/failed.md), the [error](error.md) property contains the reason for the failure.

## See Also

### Getting Information About the Player

- [currentItem](currentitem.md): Deprecated. The player’s current item.
- [error](error.md): Deprecated. An error that describes the cause of a failure.
