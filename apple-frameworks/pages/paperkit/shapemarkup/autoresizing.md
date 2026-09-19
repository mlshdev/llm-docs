> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/shapemarkup/autoresizing

# autoresizing

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Automatic sizing behaviors for this markup.

## Declaration

```swift
var autoresizing: MarkupAutoresizing { get set }
```

<a id="discussion"></a>

## Discussion

Controls whether the markup automatically adjusts its dimensions to fit content changes.

> **Note**

> The layout mode (centered vs. top-anchored) is decided at init time and preserved across reassignment; setting `.flexibleHeight` here on a shape that didn’t have `.flexibleHeight` at init will use the legacy top-anchored layout. New shapes should express the mode through `init(...autoresizing:)` instead.
