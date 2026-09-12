> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinator/coordinate(using:)](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator/coordinate(using:))

# coordinate(using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Connects the playback coordinator to the coordination medium

## Declaration

```swift
func coordinate(using coordinationMedium: AVPlaybackCoordinationMedium?) throws
```

## Parameters

- `coordinationMedium`: The coordination medium the playback coordinator connects to. If NULL, the playback coordinator disconnects from any existing coordination medium.

<a id="discussion"></a>

## Discussion

This connects the playback coordinator to a coordination medium to enable sending and receiving messages from other connected playback coordinators. If the coordination medium is non-NULL, this will connect the playback coordinator to the specified coordination medium. If the coordination medium is set to NULL, this will disconnect the playback coordinator from the playback coordination medium. The player will no longer be coordinated with the other players connected to the coordination medium. The playback coordinator can either only coordinate with local players through an AVPlaybackCoordinationMedium or coordinate with a remote group session through the `coordinateWithSession` API. If the client attempts to connect to an AVPlaybackCoordinationMedium while already connected to a group session, this method will populate the outError parameter If the playback coordinator successfully connects to the coordination medium or disconnects from a coordination medium, the `outError` parameter will be nil. If the playback coordinator fails to connect to the specified coordination medium, the `outError` parameter will describe what went wrong.

## See Also

### Managing coordination

- [playbackCoordinationMedium](playbackcoordinationmedium.md): The AVPlaybackCoordinationMedium this playback coordinator is connected to.

# coordinateUsingCoordinationMedium:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Connects the playback coordinator to the coordination medium

## Declaration

```objectivec
- (BOOL) coordinateUsingCoordinationMedium:(AVPlaybackCoordinationMedium *) coordinationMedium error:(NSError **) outError;
```

## Parameters

- `coordinationMedium`: The coordination medium the playback coordinator connects to. If NULL, the playback coordinator disconnects from any existing coordination medium.
- `outError`: A pointer to an NSError object that will be populated with failure information if connecting to or disconnecting from the coordination medium fails.

<a id="discussion"></a>

## Discussion

This connects the playback coordinator to a coordination medium to enable sending and receiving messages from other connected playback coordinators. If the coordination medium is non-NULL, this will connect the playback coordinator to the specified coordination medium. If the coordination medium is set to NULL, this will disconnect the playback coordinator from the playback coordination medium. The player will no longer be coordinated with the other players connected to the coordination medium. The playback coordinator can either only coordinate with local players through an AVPlaybackCoordinationMedium or coordinate with a remote group session through the `coordinateWithSession` API. If the client attempts to connect to an AVPlaybackCoordinationMedium while already connected to a group session, this method will populate the outError parameter If the playback coordinator successfully connects to the coordination medium or disconnects from a coordination medium, the `outError` parameter will be nil. If the playback coordinator fails to connect to the specified coordination medium, the `outError` parameter will describe what went wrong.

## See Also

### Managing coordination

- [playbackCoordinationMedium](playbackcoordinationmedium.md): The AVPlaybackCoordinationMedium this playback coordinator is connected to.
