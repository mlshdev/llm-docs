> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/status-swift.enum/cancelled](https://developer.apple.com/documentation/avfoundation/avplayerlooper/status-swift.enum/cancelled)

# AVPlayerLooper.Status.cancelled (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The app canceled looping on the player.

## Declaration

```swift
case cancelled
```

<a id="Discussion"></a>

## Discussion

The system sets this status after you call the [disableLooping()](../disablelooping%28%29.md) method.

## See Also

### Status values

- [AVPlayerLooper.Status.unknown](unknown.md): The status isn’t known.
- [AVPlayerLooper.Status.ready](ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooper.Status.failed](failed.md): The looper isn’t able to perform looping playback due to an error.

# AVPlayerLooperStatusCancelled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The app canceled looping on the player.

## Declaration

```objectivec
AVPlayerLooperStatusCancelled
```

<a id="Discussion"></a>

## Discussion

The system sets this status after you call the [disableLooping](../disablelooping%28%29.md) method.

## See Also

### Status values

- [AVPlayerLooperStatusUnknown](unknown.md): The status isn’t known.
- [AVPlayerLooperStatusReady](ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooperStatusFailed](failed.md): The looper isn’t able to perform looping playback due to an error.
