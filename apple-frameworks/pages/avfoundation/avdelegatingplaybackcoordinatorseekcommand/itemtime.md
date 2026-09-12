> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/itemtime](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/itemtime)

# itemTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The time to seek to in the item timeline.

## Declaration

```swift
var itemTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t automatically resume playback after seeking to this time. The coordinator issues a new play command when all participants are ready to resume.

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects playback to resume.
- [completionDueDate](completionduedate.md): The deadline by which the coordinator expects the delegate to handle the command.

# itemTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The time to seek to in the item timeline.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime itemTime;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t automatically resume playback after seeking to this time. The coordinator issues a new play command when all participants are ready to resume.

## See Also

### Accessing command details

- [shouldBufferInAnticipationOfPlayback](shouldbufferinanticipationofplayback.md): A Boolean value that indicates whether the player starts buffering in anticipation of a request to begin playback.
- [anticipatedPlaybackRate](anticipatedplaybackrate.md): The rate at which the coordinator expects playback to resume.
- [completionDueDate](completionduedate.md): The deadline by which the coordinator expects the delegate to handle the command.
