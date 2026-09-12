> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/recordsvideoorientationandmirroringchangesasmetadatatrack(for:)](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/recordsvideoorientationandmirroringchangesasmetadatatrack(for:))

# recordsVideoOrientationAndMirroringChangesAsMetadataTrack(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the movie file output records video orientation and mirroring information as a metadata track.

## Declaration

```swift
func recordsVideoOrientationAndMirroringChangesAsMetadataTrack(for connection: AVCaptureConnection) -> Bool
```

## Parameters

- `connection`: A connection delivering video media to the movie file output. This method throws an invalid argument exception if the value isn’t a video connection or if the connection doesn’t terminate at the movie file output.

## See Also

### Setting orientation

- [setRecordsVideoOrientationAndMirroringChangesAsMetadataTrack(\_:for:)](setrecordsvideoorientationandmirroringchangesasmetadatatrack%28__for_%29.md): Sets whether the movie file output creates a timed metadata track to capture changes to the connection’s video orientation and mirroring.

# recordsVideoOrientationAndMirroringChangesAsMetadataTrackForConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the movie file output records video orientation and mirroring information as a metadata track.

## Declaration

```objectivec
- (BOOL) recordsVideoOrientationAndMirroringChangesAsMetadataTrackForConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: A connection delivering video media to the movie file output. This method throws an invalid argument exception if the value isn’t a video connection or if the connection doesn’t terminate at the movie file output.

## See Also

### Setting orientation

- [setRecordsVideoOrientationAndMirroringChanges:asMetadataTrackForConnection:](setrecordsvideoorientationandmirroringchangesasmetadatatrack%28__for_%29.md): Sets whether the movie file output creates a timed metadata track to capture changes to the connection’s video orientation and mirroring.
