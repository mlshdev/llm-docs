> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/animatedartwork/supportedaspectratios

# supportedAspectRatios

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The aspect ratios this artwork supports.

## Declaration

```swift
let supportedAspectRatios: [AnimatedArtwork.AspectRatio]
```

<a id="discussion"></a>

## Discussion

The system requests preview and video assets for each supported ratio. Provide at least one ratio.
