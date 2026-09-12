> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/loopcount](https://developer.apple.com/documentation/avfoundation/avplayerlooper/loopcount)

# loopCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of times the object played the media.

## Declaration

```swift
var loopCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value starts at 0 and increments as the player continues to loop the replica player items.

This property is key-value observable.

## See Also

### Observing looping state

- [status](status-swift.property.md): A status that indicates the object’s ability to loop playback.
- [AVPlayerLooper.Status](status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.

# loopCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of times the object played the media.

## Declaration

```objectivec
@property (readonly) NSInteger loopCount;
```

<a id="Discussion"></a>

## Discussion

This value starts at 0 and increments as the player continues to loop the replica player items.

This property is key-value observable.

## See Also

### Observing looping state

- [status](status-swift.property.md): A status that indicates the object’s ability to loop playback.
- [AVPlayerLooperStatus](status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.
