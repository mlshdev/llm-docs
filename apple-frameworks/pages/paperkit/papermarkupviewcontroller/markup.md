> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/markup

# markup

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The paper data that this view controller displays.

## Declaration

```swift
@MainActor @preconcurrency var markup: PaperMarkup? { get set }
```

<a id="discussion"></a>

## Discussion

Observe `markup` to watch for markup changes.

## See Also

### Displaying markup

- [contentView](contentview-4aeda.md): The content that markup appears on top of.
- [contentView](contentview-4hbkf.md): The content that markup appears on top of.
- [supportedFeatureSet](supportedfeatureset.md): The supported PaperKit features on this canvas.
