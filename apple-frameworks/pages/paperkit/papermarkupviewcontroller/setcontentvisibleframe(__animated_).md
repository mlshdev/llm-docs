> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/setcontentvisibleframe(_:animated:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/setcontentvisibleframe(_:animated:))

# setContentVisibleFrame(\_:animated:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Zooms to a specific area of the content so that it’s visible in the scroll view.

## Declaration

```swift
@MainActor @preconcurrency func setContentVisibleFrame(_ rect: CGRect, animated: Bool)
```

<a id="discussion"></a>

## Discussion

- rect: A rectangle defining an area of the content view. The rectangle should be in the coordinate space of the data model.
- animated: `true` if the scrolling should be animated, `false` if it should be immediate.

This method scrolls the content so that the area defined by rect is just visible. If the area is already visible, the method does nothing.

## See Also

### Scrolling and zooming

- [scrollConfiguration](scrollconfiguration-swift.property.md): The configuration object that provides access to scroll view functionality.
- [PaperMarkupViewController.ScrollConfiguration](scrollconfiguration-swift.class.md): A cross-platform type that provides access to scroll view functionality.
- [contentVisibleFrame](contentvisibleframe.md): The visible area of content in the scroll view.
- [zoomRange](zoomrange.md): A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.
