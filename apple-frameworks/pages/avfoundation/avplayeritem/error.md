> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/error](https://developer.apple.com/documentation/avfoundation/avplayeritem/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The error that caused the player item to fail.

## Declaration

```swift
nonisolated var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an error that describes what caused the player item to no longer be able to be played.

If the receiver’s status is not [AVPlayerItem.Status.failed](status-swift.enum/failed.md), the value of this property is `nil`.

## See Also

### Determining readiness

- [status](status-swift.property.md): The status of the player item.
- [AVPlayerItem.Status](status-swift.enum.md): The statuses for a player item.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The error that caused the player item to fail.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an error that describes what caused the player item to no longer be able to be played.

If the receiver’s status is not [AVPlayerItemStatusFailed](status-swift.enum/failed.md), the value of this property is `nil`.

## See Also

### Determining readiness

- [status](status-swift.property.md): The status of the player item.
- [AVPlayerItemStatus](status-swift.enum.md): The statuses for a player item.
