> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/removetrackassociation(to:type:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/removetrackassociation(to:type:))

# removeTrackAssociation(to:type:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes a specific type of track association between two tracks.

## Declaration

```swift
func removeTrackAssociation(to movieTrack: AVMovieTrack, type trackAssociationType: AVAssetTrack.AssociationType)
```

## Parameters

- `movieTrack`: The AVMovieTrack object that is associated with the receiver.
- `trackAssociationType`: The type of track association to remove between the receiver and the specified movie track.

## See Also

### Managing track associations

- [availableTrackAssociationTypes](availabletrackassociationtypes.md): An array of association types that the track uses to associate with other tracks.
- [associatedTracks(ofType:)](associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
- [addTrackAssociation(to:type:)](addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.

# removeTrackAssociationToTrack:type: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Removes a specific type of track association between two tracks.

## Declaration

```objectivec
- (void) removeTrackAssociationToTrack:(AVMovieTrack *) movieTrack type:(AVTrackAssociationType) trackAssociationType;
```

## Parameters

- `movieTrack`: The AVMovieTrack object that is associated with the receiver.
- `trackAssociationType`: The type of track association to remove between the receiver and the specified movie track.

## See Also

### Managing track associations

- [associatedTracksOfType:](associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
- [addTrackAssociationToTrack:type:](addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
