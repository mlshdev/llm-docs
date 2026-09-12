> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/artworkrepresentations](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/artworkrepresentations)

# artworkRepresentations

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Array of available artwork representations in various formats and sizes.

## Declaration

```swift
var artworkRepresentations: [AVPlaybackUserInterfaceContentArtwork]
```

<a id="discussion"></a>

## Discussion

Multiple representations allow the system to choose the most appropriate artwork for different display contexts (thumbnails, full-screen, high-DPI displays). Each representation specifies its dimensions, format, and URL for optimal loading and display performance.
