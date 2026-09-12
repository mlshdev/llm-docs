> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/mutabletrack(compatiblewith:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/mutabletrack(compatiblewith:))

# mutableTrack(compatibleWith:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Provides a reference to a track from a mutable movie into which you can insert any time range.

## Declaration

```swift
func mutableTrack(compatibleWith track: AVAssetTrack) -> AVMutableMovieTrack?
```

## Parameters

- `track`: The [AVAssetTrack](../avassettrack.md) containing the desired time range.

<a id="return-value"></a>

## Return Value

An [AVMutableMovieTrack](../avmutablemovietrack.md) object that can accommodate the time range insertion. Returns nil when no track is available.

<a id="Discussion"></a>

## Discussion

Keep the number of tracks in a movie to a minimum, corresponding to the number of tracks for which media data must be presented in parallel. If media data of the same type is presented serially, even from multiple assets, a single track of that media type should be used. This method can help the client to identify an existing target track for an insertion.

## See Also

### Managing tracks

- [addMutableTrack(withMediaType:copySettingsFrom:options:)](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettings(from:options:)](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes the specified track from the target movie.

# mutableTrackCompatibleWithTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Provides a reference to a track from a mutable movie into which you can insert any time range.

## Declaration

```objectivec
- (AVMutableMovieTrack *) mutableTrackCompatibleWithTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The [AVAssetTrack](../avassettrack.md) containing the desired time range.

<a id="return-value"></a>

## Return Value

An [AVMutableMovieTrack](../avmutablemovietrack.md) object that can accommodate the time range insertion. Returns nil when no track is available.

<a id="Discussion"></a>

## Discussion

Keep the number of tracks in a movie to a minimum, corresponding to the number of tracks for which media data must be presented in parallel. If media data of the same type is presented serially, even from multiple assets, a single track of that media type should be used. This method can help the client to identify an existing target track for an insertion.

## See Also

### Managing tracks

- [addMutableTrackWithMediaType:copySettingsFromTrack:options:](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettingsFromTracks:options:](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack:](removetrack%28__%29.md): Removes the specified track from the target movie.
