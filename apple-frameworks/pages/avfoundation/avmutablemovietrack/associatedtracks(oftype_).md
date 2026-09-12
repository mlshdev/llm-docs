> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/associatedtracks(oftype:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/associatedtracks(oftype:))

# associatedTracks(ofType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of associated tracks that have the specified association type.

## Declaration

```swift
func associatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType) -> [AVAssetTrack]
```

## Parameters

- `trackAssociationType`: The requested track association type.

<a id="return-value"></a>

## Return Value

An array of tracks matching the specified track association type, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load associated tracks asynchronously using [loadAssociatedTracks(ofType:completionHandler:)](../avassettrack/loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableTrackAssociationTypes](../avassettrack/availabletrackassociationtypes.md) property.

## See Also

### Managing track associations

- [availableTrackAssociationTypes](availabletrackassociationtypes.md): An array of association types that the track uses to associate with other tracks.
- [addTrackAssociation(to:type:)](addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
- [removeTrackAssociation(to:type:)](removetrackassociation%28to_type_%29.md): Removes a specific type of track association between two tracks.

# associatedTracksOfType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns an array of associated tracks that have the specified association type.

## Declaration

```objectivec
- (NSArray<AVAssetTrack *> *) associatedTracksOfType:(AVTrackAssociationType) trackAssociationType;
```

## Parameters

- `trackAssociationType`: The requested track association type.

<a id="return-value"></a>

## Return Value

An array of tracks matching the specified track association type, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load associated tracks asynchronously using [loadAssociatedTracksOfType:completionHandler:](../avassettrack/loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableTrackAssociationTypes](../avassettrack/availabletrackassociationtypes.md) property.

## See Also

### Managing track associations

- [addTrackAssociationToTrack:type:](addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
- [removeTrackAssociationToTrack:type:](removetrackassociation%28to_type_%29.md): Removes a specific type of track association between two tracks.
