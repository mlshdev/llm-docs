> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/zoomrange](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/zoomrange)

# zoomRange

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.

## Declaration

```swift
@MainActor @preconcurrency var zoomRange: ClosedRange<CGFloat> { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1.0...1.0`.

## See Also

### Scrolling and zooming

- [scrollConfiguration](scrollconfiguration-swift.property.md): The configuration object that provides access to scroll view functionality.
- [PaperMarkupViewController.ScrollConfiguration](scrollconfiguration-swift.class.md): A cross-platform type that provides access to scroll view functionality.
- [contentVisibleFrame](contentvisibleframe.md): The visible area of content in the scroll view.
- [setContentVisibleFrame(\_:animated:)](setcontentvisibleframe%28__animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
