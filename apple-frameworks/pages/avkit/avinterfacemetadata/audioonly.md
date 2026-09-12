> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacemetadata/audioonly](https://developer.apple.com/documentation/avkit/avinterfacemetadata/audioonly)

# audioOnly

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the content is audio-only (no video component). Used to optimize UI layout and player controls for audio-focused presentations. When YES, video-related controls and layouts should be hidden or adapted for audio-only playback experiences.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAudioOnly) BOOL audioOnly;
```

## See Also

### Inspecting the metadata

- [title](title.md): Primary title or name of the media content for display in player UI and system interfaces. This should be the main identifying text for the content, such as a song title, episode name, or movie title.
- [subtitle](subtitle.md): Secondary descriptive text such as artist name, episode description, or additional context for the content. This provides supplementary information to help users identify and understand the content being played.
- [presentationSize](presentationsize.md): The natural pixel dimensions of the video content for display purposes. This represents the encoded size of the video stream and can be used to determine aspect ratio and optimal presentation layout. For audio-only content, this value is CGSizeZero.
- [albumArtworkRepresentations](albumartworkrepresentations.md): Array of available album artwork representations in various formats and sizes for this media content. Multiple representations allow the system to choose the most appropriate artwork for different display contexts (thumbnails, full-screen, high-DPI displays). Each representation specifies its dimensions, format, and URL for optimal loading and display performance.
