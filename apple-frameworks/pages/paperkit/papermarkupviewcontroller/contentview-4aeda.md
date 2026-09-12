> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/contentview-4aeda](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/contentview-4aeda)

# contentView

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The content that markup appears on top of.

## Declaration

```swift
@MainActor @preconcurrency var contentView: UIView? { get set }
```

<a id="discussion"></a>

## Discussion

The system sizes the content view to the frame of the markup and adds it below all the markup and drawing. When `nil`, markup appears on top of a blank white canvas.

Default is `nil`.

## See Also

### Displaying markup

- [markup](markup.md): The paper data that this view controller displays.
- [contentView](contentview-4hbkf.md): The content that markup appears on top of.
- [supportedFeatureSet](supportedfeatureset.md): The supported PaperKit features on this canvas.
