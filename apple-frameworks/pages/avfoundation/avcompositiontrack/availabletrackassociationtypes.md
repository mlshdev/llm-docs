> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/availabletrackassociationtypes

# availableTrackAssociationTypes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of association types that the track uses to associate with other tracks.

## Declaration

```swift
var availableTrackAssociationTypes: [AVAssetTrack.AssociationType] { get }
```

## See Also

### Accessing track associations

- [associatedTracks(ofType:)](associatedtracks%28oftype_%29.md): Returns an array of associated tracks that have the specified association type.
