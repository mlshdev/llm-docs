> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/addmutabletrackscopyingsettings(from:options:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/addmutabletrackscopyingsettings(from:options:))

# addMutableTracksCopyingSettings(from:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.

## Declaration

```swift
func addMutableTracksCopyingSettings(from existingTracks: [AVAssetTrack], options: [String : Any]? = nil) -> [AVMutableMovieTrack]
```

## Parameters

- `existingTracks`: An array of asset tracks to be added.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.

<a id="return-value"></a>

## Return Value

An array of [AVMutableMovieTrack](../avmutablemovietrack.md) objects. The index of a track in this array is the same as the index of its source track in the `existingTracks` array.

<a id="Discussion"></a>

## Discussion

Properties involving pairs of tracks,such as track references, are copied from the source tracks to the target tracks.

## See Also

### Managing tracks

- [mutableTrack(compatibleWith:)](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrack(withMediaType:copySettingsFrom:options:)](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes the specified track from the target movie.

# addMutableTracksCopyingSettingsFromTracks:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Adds one or more empty tracks to the target movie and copies the track settings from the source tracks.

## Declaration

```objectivec
- (NSArray<AVMutableMovieTrack *> *) addMutableTracksCopyingSettingsFromTracks:(NSArray<AVAssetTrack *> *) existingTracks options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `existingTracks`: An array of asset tracks to be added.
- `options`: A dictionary that contains key for specifying the movie object initialization. Currently, no keys are defined.

<a id="return-value"></a>

## Return Value

An array of [AVMutableMovieTrack](../avmutablemovietrack.md) objects. The index of a track in this array is the same as the index of its source track in the `existingTracks` array.

<a id="Discussion"></a>

## Discussion

Properties involving pairs of tracks,such as track references, are copied from the source tracks to the target tracks.

## See Also

### Managing tracks

- [mutableTrackCompatibleWithTrack:](mutabletrack%28compatiblewith_%29.md): Provides a reference to a track from a mutable movie into which you can insert any time range.
- [addMutableTrackWithMediaType:copySettingsFromTrack:options:](addmutabletrack%28withmediatype_copysettingsfrom_options_%29.md): Adds an empty track to the target movie.
- [removeTrack:](removetrack%28__%29.md): Removes the specified track from the target movie.
