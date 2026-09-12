> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/status-swift.property](https://developer.apple.com/documentation/avfoundation/avplayerlooper/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A status that indicates the object’s ability to loop playback.

## Declaration

```swift
var status: AVPlayerLooper.Status { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [AVPlayerLooper.Status.failed](status-swift.enum/failed.md) or [AVPlayerLooper.Status.cancelled](status-swift.enum/cancelled.md), you can no longer use the looper for playback. You need to create a new instance to begin looping again.

This property is key-value observable.

## See Also

### Observing looping state

- [loopCount](loopcount.md): The number of times the object played the media.
- [AVPlayerLooper.Status](status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A status that indicates the object’s ability to loop playback.

## Declaration

```objectivec
@property (readonly) AVPlayerLooperStatus status;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [AVPlayerLooperStatusFailed](status-swift.enum/failed.md) or [AVPlayerLooperStatusCancelled](status-swift.enum/cancelled.md), you can no longer use the looper for playback. You need to create a new instance to begin looping again.

This property is key-value observable.

## See Also

### Observing looping state

- [loopCount](loopcount.md): The number of times the object played the media.
- [AVPlayerLooperStatus](status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.
