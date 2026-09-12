> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associationtype/metadatareferent](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype/metadatareferent)

# metadataReferent (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An association between a metadata track and the track that it describes or annotates.

## Declaration

```swift
static let metadataReferent: AVAssetTrack.AssociationType
```

<a id="Discussion"></a>

## Discussion

This track association is optional for [AVAssetTrack](../../avassettrack.md) objects with the media type [metadata](../../avmediatype/metadata.md). When a metadata track lacks this track association, the system assumes the metadata describes or annotates the asset as a whole.

## See Also

### Track association types

- [audioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [chapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [forcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [selectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [timecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [renderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

# AVTrackAssociationTypeMetadataReferent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An association between a metadata track and the track that it describes or annotates.

## Declaration

```objectivec
extern AVTrackAssociationType const AVTrackAssociationTypeMetadataReferent;
```

<a id="Discussion"></a>

## Discussion

This track association is optional for [AVAssetTrack](../../avassettrack.md) objects with the media type [AVMediaTypeMetadata](../../avmediatype/metadata.md). When a metadata track lacks this track association, the system assumes the metadata describes or annotates the asset as a whole.

## See Also

### Track association types

- [AVTrackAssociationTypeAudioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [AVTrackAssociationTypeChapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [AVTrackAssociationTypeForcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [AVTrackAssociationTypeSelectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [AVTrackAssociationTypeTimecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [AVTrackAssociationTypeRenderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.
