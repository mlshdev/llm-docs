> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associationtype](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype)

# AVAssetTrack.AssociationType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define track association types.

## Declaration

```swift
struct AssociationType
```

## Topics

### Track association types

- [audioFallback](associationtype/audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [chapterList](associationtype/chapterlist.md): The associated track contains chapter information for the base track.
- [forcedSubtitlesOnly](associationtype/forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [metadataReferent](associationtype/metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [selectionFollower](associationtype/selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [timecode](associationtype/timecode.md): An association between a timecode track providing timing information for the main track.
- [renderMetadataSource](associationtype/rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype/init%28rawvalue:%29): Creates an association type with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVTrackAssociationType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define track association types.

## Declaration

```objectivec
typedef NSString * AVTrackAssociationType;
```

## Topics

### Track association types

- [AVTrackAssociationTypeAudioFallback](associationtype/audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [AVTrackAssociationTypeChapterList](associationtype/chapterlist.md): The associated track contains chapter information for the base track.
- [AVTrackAssociationTypeForcedSubtitlesOnly](associationtype/forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [AVTrackAssociationTypeMetadataReferent](associationtype/metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [AVTrackAssociationTypeSelectionFollower](associationtype/selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [AVTrackAssociationTypeTimecode](associationtype/timecode.md): An association between a timecode track providing timing information for the main track.
- [AVTrackAssociationTypeRenderMetadataSource](associationtype/rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

## See Also

### Accessing track associations

- [availableTrackAssociationTypes](availabletrackassociationtypes.md): Deprecated. An array of association types that the track uses to associate with other tracks.
- [associatedTracksOfType:](associatedtracks%28oftype_%29.md): Deprecated. Returns an array of associated tracks that have the specified association type.
