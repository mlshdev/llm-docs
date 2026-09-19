> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemetadatatemplate/albumartworkrepresentations

# albumArtworkRepresentations

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Array of available album artwork representations in various formats and sizes for this media content. Multiple representations allow the system to choose the most appropriate artwork for different display contexts (thumbnails, full-screen, high-DPI displays). Each representation specifies its dimensions, format, and URL for optimal loading and display performance.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<AVInterfaceAlbumArtwork *> * albumArtworkRepresentations;
```
