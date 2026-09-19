> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/contentview-4hbkf

# contentView

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The content that markup appears on top of.

## Declaration

```swift
@MainActor @preconcurrency var contentView: NSView? { get set }
```

<a id="discussion"></a>

## Discussion

The system sizes the content view to the frame of the `markup` and adds it below all the markup and drawing. When `nil`, markup appears on top of a blank white canvas.

Default is `nil`.

## See Also

### Displaying markup

- [markup](markup.md): The paper data that this view controller displays.
- [contentView](contentview-4aeda.md): The content that markup appears on top of.
- [supportedFeatureSet](supportedfeatureset.md): The supported PaperKit features on this canvas.
