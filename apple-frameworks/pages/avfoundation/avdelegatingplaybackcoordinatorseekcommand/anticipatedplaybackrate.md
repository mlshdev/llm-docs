> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/anticipatedplaybackrate](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/anticipatedplaybackrate)

# anticipatedPlaybackRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The rate at which the coordinator expects playback to resume.

## Declaration

```swift
var anticipatedPlaybackRate: Float { get }
```

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [itemTime](itemtime.md): The time to seek to in the item timeline.
- [completionDueDate](completionduedate.md): The deadline by which the coordinator expects the delegate to handle the command.

# anticipatedPlaybackRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The rate at which the coordinator expects playback to resume.

## Declaration

```objectivec
@property (nonatomic, readonly) float anticipatedPlaybackRate;
```

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [itemTime](itemtime.md): The time to seek to in the item timeline.
- [completionDueDate](completionduedate.md): The deadline by which the coordinator expects the delegate to handle the command.
