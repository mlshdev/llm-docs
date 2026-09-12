> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/removetrackassociation(to:type:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/removetrackassociation(to:type:))

# removeTrackAssociation(to:type:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Removes an association from a composition track.

## Declaration

```swift
func removeTrackAssociation(to compositionTrack: AVCompositionTrack, type trackAssociationType: AVAssetTrack.AssociationType)
```

## Parameters

- `compositionTrack`: A composition track to remove the association from.
- `trackAssociationType`: The type of track association to remove.

## See Also

### Associating tracks

- [addTrackAssociation(to:type:)](addtrackassociation%28to_type_%29.md): Establishes a track association of a specific type between two tracks.

# removeTrackAssociationToTrack:type: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Removes an association from a composition track.

## Declaration

```objectivec
- (void) removeTrackAssociationToTrack:(AVCompositionTrack *) compositionTrack type:(AVTrackAssociationType) trackAssociationType;
```

## Parameters

- `compositionTrack`: A composition track to remove the association from.
- `trackAssociationType`: The type of track association to remove.

## See Also

### Associating tracks

- [addTrackAssociationToTrack:type:](addtrackassociation%28to_type_%29.md): Establishes a track association of a specific type between two tracks.
