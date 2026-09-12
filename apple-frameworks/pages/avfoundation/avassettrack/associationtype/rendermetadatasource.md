> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associationtype/rendermetadatasource](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype/rendermetadatasource)

# renderMetadataSource (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

## Declaration

```swift
static let renderMetadataSource: AVAssetTrack.AssociationType
```

<a id="discussion"></a>

## Discussion

This track association is not symmetric; when used with -\[AVAssetWriterInput addTrackAssociationWithTrackOfInput:type:\], the receiver should be an instance of AVAssetWriterInput with mediaType, AVMediaTypeMetadata, while the input parameter should be an instance of AVAssetWriterInput for the target track that would be rendered (for example, a video track).

## See Also

### Track association types

- [audioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [chapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [forcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [metadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [selectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [timecode](timecode.md): An association between a timecode track providing timing information for the main track.

# AVTrackAssociationTypeRenderMetadataSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

## Declaration

```objectivec
extern AVTrackAssociationType const AVTrackAssociationTypeRenderMetadataSource;
```

<a id="discussion"></a>

## Discussion

This track association is not symmetric; when used with -\[AVAssetWriterInput addTrackAssociationWithTrackOfInput:type:\], the receiver should be an instance of AVAssetWriterInput with mediaType, AVMediaTypeMetadata, while the input parameter should be an instance of AVAssetWriterInput for the target track that would be rendered (for example, a video track).

## See Also

### Track association types

- [AVTrackAssociationTypeAudioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [AVTrackAssociationTypeChapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [AVTrackAssociationTypeForcedSubtitlesOnly](forcedsubtitlesonly.md): An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.
- [AVTrackAssociationTypeMetadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [AVTrackAssociationTypeSelectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [AVTrackAssociationTypeTimecode](timecode.md): An association between a timecode track providing timing information for the main track.
