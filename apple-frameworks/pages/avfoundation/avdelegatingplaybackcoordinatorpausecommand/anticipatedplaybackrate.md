> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/anticipatedplaybackrate](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/anticipatedplaybackrate)

# anticipatedPlaybackRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The rate at which the coordinator expects the current item to play.

## Declaration

```swift
var anticipatedPlaybackRate: Float { get }
```

<a id="Discussion"></a>

## Discussion

Consider this command complete after the player is ready to start playback at the indicated rate.

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in preparation for a request to begin playback.

# anticipatedPlaybackRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The rate at which the coordinator expects the current item to play.

## Declaration

```objectivec
@property (nonatomic, readonly) float anticipatedPlaybackRate;
```

<a id="Discussion"></a>

## Discussion

Consider this command complete after the player is ready to start playback at the indicated rate.

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in preparation for a request to begin playback.
