> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinator/playbackcoordinationmedium](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator/playbackcoordinationmedium)

# playbackCoordinationMedium (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The AVPlaybackCoordinationMedium this playback coordinator is connected to.

## Declaration

```swift
var playbackCoordinationMedium: AVPlaybackCoordinationMedium? { get }
```

<a id="discussion"></a>

## Discussion

This is the AVPlaybackCoordinationMedium the playback coordinator is connected to. If not NULL, the playback coordinator is connected to the specified coordination medium. The playback coordinator is not available to coordinate with a group session. If NULL, the playback coordinator is not connected to any playback coordination medium. The playback coordinator is available to coordinate with a group session through the `coordinateWithSession` API.

## See Also

### Managing coordination

- [coordinate(using:)](coordinate%28using_%29.md): Connects the playback coordinator to the coordination medium

# playbackCoordinationMedium (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The AVPlaybackCoordinationMedium this playback coordinator is connected to.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVPlaybackCoordinationMedium * playbackCoordinationMedium;
```

<a id="discussion"></a>

## Discussion

This is the AVPlaybackCoordinationMedium the playback coordinator is connected to. If not NULL, the playback coordinator is connected to the specified coordination medium. The playback coordinator is not available to coordinate with a group session. If NULL, the playback coordinator is not connected to any playback coordination medium. The playback coordinator is available to coordinate with a group session through the `coordinateWithSession` API.

## See Also

### Managing coordination

- [coordinateUsingCoordinationMedium:error:](coordinate%28using_%29.md): Connects the playback coordinator to the coordination medium
