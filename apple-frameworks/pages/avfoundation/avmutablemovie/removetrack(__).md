> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/removetrack(_:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/removetrack(_:))

# removeTrack(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified track from the target movie.

## Declaration

```swift
func removeTrack(_ track: AVMovieTrack)
```

## Parameters

- `track`: The movie to be removed.

## See Also

### Managing tracks

- [mutableTrack(compatibleWith:)](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrack(withMediaType:copySettingsFrom:options:)](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettings(from:options:)](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.

# removeTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes the specified track from the target movie.

## Declaration

```objectivec
- (void) removeTrack:(AVMovieTrack *) track;
```

## Parameters

- `track`: The movie to be removed.

## See Also

### Managing tracks

- [mutableTrackCompatibleWithTrack:](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrackWithMediaType:copySettingsFromTrack:options:](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [addMutableTracksCopyingSettingsFromTracks:options:](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
