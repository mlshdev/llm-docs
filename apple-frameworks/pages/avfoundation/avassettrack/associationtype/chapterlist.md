> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associationtype/chapterlist](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype/chapterlist)

# chapterList (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The associated track contains chapter information for the base track.

## Declaration

```swift
static let chapterList: AVAssetTrack.AssociationType
```

<a id="Discussion"></a>

## Discussion

The track containing the chapter information can be a text track, a video track, or a timed metadata track.

## See Also

### Track association types

- [audioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [forcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [metadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [selectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [timecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [renderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

# AVTrackAssociationTypeChapterList (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The associated track contains chapter information for the base track.

## Declaration

```objectivec
extern AVTrackAssociationType const AVTrackAssociationTypeChapterList;
```

<a id="Discussion"></a>

## Discussion

The track containing the chapter information can be a text track, a video track, or a timed metadata track.

## See Also

### Track association types

- [AVTrackAssociationTypeAudioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [AVTrackAssociationTypeForcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [AVTrackAssociationTypeMetadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [AVTrackAssociationTypeSelectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [AVTrackAssociationTypeTimecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [AVTrackAssociationTypeRenderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.
