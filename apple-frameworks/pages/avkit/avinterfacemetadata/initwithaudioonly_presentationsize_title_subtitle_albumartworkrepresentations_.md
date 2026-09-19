> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemetadata/initwithaudioonly:presentationsize:title:subtitle:albumartworkrepresentations:

# initWithAudioOnly:presentationSize:title:subtitle:albumArtworkRepresentations:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method

Initializes a new metadata object with the specified properties.

## Declaration

```objectivec
- (instancetype) initWithAudioOnly:(BOOL) audioOnly presentationSize:(CGSize) presentationSize title:(NSString *) title subtitle:(NSString *) subtitle albumArtworkRepresentations:(NSArray<AVInterfaceAlbumArtwork *> *) albumArtworkRepresentations;
```

## Parameters

- `audioOnly`: Whether the content is audio-only (no video component).
- `presentationSize`: The pixel dimensions for video presentation.
- `title`: Primary title or name of the media content.
- `subtitle`: Secondary descriptive text such as artist name or episode description.
- `albumArtworkRepresentations`: Array of available album artwork representations in various formats and sizes.
