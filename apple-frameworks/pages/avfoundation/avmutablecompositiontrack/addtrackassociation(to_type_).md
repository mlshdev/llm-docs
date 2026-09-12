> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/addtrackassociation(to:type:)](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/addtrackassociation(to:type:))

# addTrackAssociation(to:type:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Establishes a track association of a specific type between two tracks.

## Declaration

```swift
func addTrackAssociation(to compositionTrack: AVCompositionTrack, type trackAssociationType: AVAssetTrack.AssociationType)
```

## Parameters

- `compositionTrack`: A composition track to associate.
- `trackAssociationType`: The type of track association to create between tracks.

## See Also

### Associating tracks

- [removeTrackAssociation(to:type:)](removetrackassociation%28to_type_%29.md): Removes an association from a composition track.

# addTrackAssociationToTrack:type: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Establishes a track association of a specific type between two tracks.

## Declaration

```objectivec
- (void) addTrackAssociationToTrack:(AVCompositionTrack *) compositionTrack type:(AVTrackAssociationType) trackAssociationType;
```

## Parameters

- `compositionTrack`: A composition track to associate.
- `trackAssociationType`: The type of track association to create between tracks.

## See Also

### Associating tracks

- [removeTrackAssociationToTrack:type:](removetrackassociation%28to_type_%29.md): Removes an association from a composition track.
