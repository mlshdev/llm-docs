> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/mutabletrack(compatiblewith:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/mutabletrack(compatiblewith:))

# mutableTrack(compatibleWith:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a composition track into which you can insert any time range of the specified asset track.

## Declaration

```swift
func mutableTrack(compatibleWith track: AVAssetTrack) -> AVMutableCompositionTrack?
```

## Parameters

- `track`: The asset track to find a composition track for.

<a id="return-value"></a>

## Return Value

A mutable composition track, of `nil` if a compatible track isn’t available.

<a id="Discussion"></a>

## Discussion

To optimize performance, limit the number of tracks to only what you need to present media data in parallel. To present media data of the same type serially, even from multiple assets, use a single track of that media type. You use this method to identify a suitable existing target track for an insertion.

If there’s no compatible track available, you can create a new track of the same media type as `track` using [addMutableTrack(withMediaType:preferredTrackID:)](addmutabletrack%28withmediatype_preferredtrackid_%29.md).

This method is the counterpart to [compatibleTrack(for:)](../avurlasset/compatibletrack%28for_%29.md) on [AVAsset](../avasset.md).

## See Also

### Managing composition tracks

- [addMutableTrack(withMediaType:preferredTrackID:)](addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes a specified track from the composition.

# mutableTrackCompatibleWithTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a composition track into which you can insert any time range of the specified asset track.

## Declaration

```objectivec
- (AVMutableCompositionTrack *) mutableTrackCompatibleWithTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The asset track to find a composition track for.

<a id="return-value"></a>

## Return Value

A mutable composition track, of `nil` if a compatible track isn’t available.

<a id="Discussion"></a>

## Discussion

To optimize performance, limit the number of tracks to only what you need to present media data in parallel. To present media data of the same type serially, even from multiple assets, use a single track of that media type. You use this method to identify a suitable existing target track for an insertion.

If there’s no compatible track available, you can create a new track of the same media type as `track` using [addMutableTrackWithMediaType:preferredTrackID:](addmutabletrack%28withmediatype_preferredtrackid_%29.md).

This method is the counterpart to [compatibleTrackForCompositionTrack:](../avurlasset/compatibletrack%28for_%29.md) on [AVAsset](../avasset.md).

## See Also

### Managing composition tracks

- [addMutableTrackWithMediaType:preferredTrackID:](addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.
- [removeTrack:](removetrack%28__%29.md): Removes a specified track from the composition.
