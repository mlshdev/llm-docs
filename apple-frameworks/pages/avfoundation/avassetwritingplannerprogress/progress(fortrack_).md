> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplannerprogress/progress(fortrack:)](https://developer.apple.com/documentation/avfoundation/avassetwritingplannerprogress/progress(fortrack:))

# progress(forTrack:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the progress for a specific track identified by its assemblyTrackID.

## Declaration

```swift
func progress(forTrack assemblyTrackID: CMPersistentTrackID) -> Float
```

## Parameters

- `assemblyTrackID`: The track ID to query progress for.

<a id="return-value"></a>

## Return Value

A float value between 0.0 and 1.0 representing the percentage of duration completed for the track. Returns 0.0 if the track ID is not found.

<a id="discussion"></a>

## Discussion

The progress is calculated as the ratio of completed duration to total duration for the track.

## See Also

### Getting progress

- [overallProgress](overallprogress.md): The overall progress across all tracks.

# progressForTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the progress for a specific track identified by its assemblyTrackID.

## Declaration

```objectivec
- (float) progressForTrack:(CMPersistentTrackID) assemblyTrackID;
```

## Parameters

- `assemblyTrackID`: The track ID to query progress for.

<a id="return-value"></a>

## Return Value

A float value between 0.0 and 1.0 representing the percentage of duration completed for the track. Returns 0.0 if the track ID is not found.

<a id="discussion"></a>

## Discussion

The progress is calculated as the ratio of completed duration to total duration for the track.

## See Also

### Getting progress

- [overallProgress](overallprogress.md): The overall progress across all tracks.
