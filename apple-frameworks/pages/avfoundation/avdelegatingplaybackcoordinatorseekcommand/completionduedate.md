> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/completionduedate](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/completionduedate)

# completionDueDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The deadline by which the coordinator expects the delegate to handle the command.

## Declaration

```swift
var completionDueDate: Date? { get }
```

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects playback to resume.
- [itemTime](itemtime.md): The time to seek to in the item timeline.

# completionDueDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The deadline by which the coordinator expects the delegate to handle the command.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * completionDueDate;
```

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects playback to resume.
- [itemTime](itemtime.md): The time to seek to in the item timeline.
