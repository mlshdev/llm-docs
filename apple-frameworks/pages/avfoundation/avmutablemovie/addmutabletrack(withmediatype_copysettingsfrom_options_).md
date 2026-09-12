> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/addmutabletrack(withmediatype:copysettingsfrom:options:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/addmutabletrack(withmediatype:copysettingsfrom:options:))

# addMutableTrack(withMediaType:copySettingsFrom:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty track to the target movie.

## Declaration

```swift
func addMutableTrack(withMediaType mediaType: AVMediaType, copySettingsFrom track: AVAssetTrack?, options: [String : Any]? = nil) -> AVMutableMovieTrack?
```

## Parameters

- `mediaType`: The media type for the new track.
- `track`: An [AVAssetTrack](../avassettrack.md) containing the desired track settings to be transferred. Set to `nil` to create a track with default settings.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.

<a id="return-value"></a>

## Return Value

An [AVMutableMovieTrack](../avmutablemovietrack.md) object.

## See Also

### Managing tracks

- [mutableTrack(compatibleWith:)](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTracksCopyingSettings(from:options:)](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes the specified track from the target movie.

# addMutableTrackWithMediaType:copySettingsFromTrack:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds an empty track to the target movie.

## Declaration

```objectivec
- (AVMutableMovieTrack *) addMutableTrackWithMediaType:(AVMediaType) mediaType copySettingsFromTrack:(AVAssetTrack *) track options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `mediaType`: The media type for the new track.
- `track`: An [AVAssetTrack](../avassettrack.md) containing the desired track settings to be transferred. Set to `nil` to create a track with default settings.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.

<a id="return-value"></a>

## Return Value

An [AVMutableMovieTrack](../avmutablemovietrack.md) object.

## See Also

### Managing tracks

- [mutableTrackCompatibleWithTrack:](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTracksCopyingSettingsFromTracks:options:](addmutabletrackscopyingsettings%28from_options_%29.md): Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.
- [removeTrack:](removetrack%28__%29.md): Removes the specified track from the target movie.
