> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associationtype/forcedsubtitlesonly](https://developer.apple.com/documentation/avfoundation/avassettrack/associationtype/forcedsubtitlesonly)

# forcedSubtitlesOnly (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.

## Declaration

```swift
static let forcedSubtitlesOnly: AVAssetTrack.AssociationType
```

<a id="Discussion"></a>

## Discussion

Nonforced subtitles typically transcribe dialogue in a media asset and are typically not presented by default. Forced subtitles are those that are essential for presentation even if the user disables playback of normal subtitles (for example, when a character speaks in a language foreign to that of the audio track).

Subtitle tracks must present forced subtitles with the same content and the same language, but may have different timing.

## See Also

### Track association types

- [audioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [chapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [metadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [selectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [timecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [renderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.

# AVTrackAssociationTypeForcedSubtitlesOnly (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An association between a subtitle track containing forced and nonforced subtitles and one with a subtitle track containing only forced subtitles.

## Declaration

```objectivec
extern AVTrackAssociationType const AVTrackAssociationTypeForcedSubtitlesOnly;
```

<a id="Discussion"></a>

## Discussion

Nonforced subtitles typically transcribe dialogue in a media asset and are typically not presented by default. Forced subtitles are those that are essential for presentation even if the user disables playback of normal subtitles (for example, when a character speaks in a language foreign to that of the audio track).

Subtitle tracks must present forced subtitles with the same content and the same language, but may have different timing.

## See Also

### Track association types

- [AVTrackAssociationTypeAudioFallback](audiofallback.md): The track contains the same content as another track, but in a more widely supported format.
- [AVTrackAssociationTypeChapterList](chapterlist.md): The associated track contains chapter information for the base track.
- [AVTrackAssociationTypeMetadataReferent](metadatareferent.md): An association between a metadata track and the track that it describes or annotates.
- [AVTrackAssociationTypeSelectionFollower](selectionfollower.md): An association between two tracks that specifies when a user selects the main track, the system should follow that selection by automatically selecting the associated track.
- [AVTrackAssociationTypeTimecode](timecode.md): An association between a timecode track providing timing information for the main track.
- [AVTrackAssociationTypeRenderMetadataSource](rendermetadatasource.md): Indicates an association between a metadata track and another track where the metadata provides additional information for rendering of that track.
