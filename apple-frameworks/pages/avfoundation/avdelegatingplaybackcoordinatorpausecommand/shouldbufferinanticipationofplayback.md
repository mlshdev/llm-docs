> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/shouldbufferinanticipationofplayback](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/shouldbufferinanticipationofplayback)

# shouldBufferInAnticipationOfPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the player starts buffering in preparation for a request to begin playback.

## Declaration

```swift
var shouldBufferInAnticipationOfPlayback: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A [true](https://developer.apple.com/documentation/swift/true) value indicates that a participant player requests starting playback at the [anticipatedPlaybackRate](anticipatedplaybackrate.md) value.

## See Also

### Accessing command details

- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects the current item to play.

# shouldBufferInAnticipationOfPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the player starts buffering in preparation for a request to begin playback.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldBufferInAnticipationOfPlayback;
```

<a id="Discussion"></a>

## Discussion

A [true](https://developer.apple.com/documentation/swift/true) value indicates that a participant player requests starting playback at the [anticipatedPlaybackRate](anticipatedplaybackrate.md) value.

## See Also

### Accessing command details

- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects the current item to play.
