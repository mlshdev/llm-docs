> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/autoresizing](https://developer.apple.com/documentation/paperkit/shapemarkup/autoresizing)

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
