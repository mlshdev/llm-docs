> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/duration](https://developer.apple.com/documentation/avfoundation/avplayeritem/duration)

# duration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The duration of the item.

## Declaration

```swift
nonisolated var duration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates the duration of the item, not considering either its [forwardPlaybackEndTime](forwardplaybackendtime.md) or [reversePlaybackEndTime](reverseplaybackendtime.md).

The system reports the value of this property as [indefinite](../../coremedia/cmtime/indefinite.md) until it loads the duration of the underlying asset. There are two ways to make sure you don’t access the value of duration until the system makes it available:

- Wait until the [status](status-swift.property.md) of the player item is [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md).
- Register for key-value observation of the property and request the initial value. If the system reports the initial value as [indefinite](../../coremedia/cmtime/indefinite.md), wait for the player item to notify you when [duration](duration.md) becomes available.

> **Note**

>  The value of [duration](duration.md) may remain [indefinite](../../coremedia/cmtime/indefinite.md) for live streams.

## See Also

### Accessing timing information

- [currentTime()](currenttime%28%29.md): Returns the current time of the item.
- [currentDate()](currentdate%28%29.md): Returns the current time of the item as a date.
- [timebase](timebase.md): The timebase information for the item.

# duration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The duration of the item.

## Declaration

```objectivec
@property (readonly) CMTime duration;
```

<a id="Discussion"></a>

## Discussion

This property indicates the duration of the item, not considering either its [forwardPlaybackEndTime](forwardplaybackendtime.md) or [reversePlaybackEndTime](reverseplaybackendtime.md).

The system reports the value of this property as [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md) until it loads the duration of the underlying asset. There are two ways to make sure you don’t access the value of duration until the system makes it available:

- Wait until the [status](status-swift.property.md) of the player item is [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md).
- Register for key-value observation of the property and request the initial value. If the system reports the initial value as [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md), wait for the player item to notify you when [duration](duration.md) becomes available.

> **Note**

>  The value of [duration](duration.md) may remain [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md) for live streams.

## See Also

### Accessing timing information

- [currentTime](currenttime%28%29.md): Returns the current time of the item.
- [currentDate](currentdate%28%29.md): Returns the current time of the item as a date.
- [timebase](timebase.md): The timebase information for the item.
