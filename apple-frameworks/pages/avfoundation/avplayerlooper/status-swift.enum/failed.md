> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/status-swift.enum/failed](https://developer.apple.com/documentation/avfoundation/avplayerlooper/status-swift.enum/failed)

# AVPlayerLooper.Status.failed (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The looper isn’t able to perform looping playback due to an error.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

Examine the looper’s [error](../error.md) property to determine the cause of the failure.

## See Also

### Status values

- [AVPlayerLooper.Status.unknown](unknown.md): The status isn’t known.
- [AVPlayerLooper.Status.ready](ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooper.Status.cancelled](cancelled.md): The app canceled looping on the player.

# AVPlayerLooperStatusFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The looper isn’t able to perform looping playback due to an error.

## Declaration

```objectivec
AVPlayerLooperStatusFailed
```

<a id="Discussion"></a>

## Discussion

Examine the looper’s [error](../error.md) property to determine the cause of the failure.

## See Also

### Status values

- [AVPlayerLooperStatusUnknown](unknown.md): The status isn’t known.
- [AVPlayerLooperStatusReady](ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooperStatusCancelled](cancelled.md): The app canceled looping on the player.
