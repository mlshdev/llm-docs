> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/availabletrackassociationtypes](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/availabletrackassociationtypes)

# availableTrackAssociationTypes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 1.0+

An array of association types that the track uses to associate with other tracks.

## Declaration

```swift
var availableTrackAssociationTypes: [AVAssetTrack.AssociationType] { get }
```

## See Also

### Managing track associations

- [associatedTracks(ofType:)](associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
- [addTrackAssociation(to:type:)](addtrackassociation%28to_type_%29.md): Creates a specific type of track association between two tracks.
- [removeTrackAssociation(to:type:)](removetrackassociation%28to_type_%29.md): Removes a specific type of track association between two tracks.
