> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.property](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.property)

# scrollConfiguration

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The configuration object that provides access to scroll view functionality.

## Declaration

```swift
@MainActor @preconcurrency var scrollConfiguration: PaperMarkupViewController.ScrollConfiguration { get }
```

## See Also

### Scrolling and zooming

- [PaperMarkupViewController.ScrollConfiguration](scrollconfiguration-swift.class.md): A cross-platform type that provides access to scroll view functionality.
- [contentVisibleFrame](contentvisibleframe.md): The visible area of content in the scroll view.
- [setContentVisibleFrame(\_:animated:)](setcontentvisibleframe%28__animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomRange](zoomrange.md): A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.
