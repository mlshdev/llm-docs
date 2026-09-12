> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/contentvisibleframe](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/contentvisibleframe)

# contentVisibleFrame

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The visible area of content in the scroll view.

## Declaration

```swift
@MainActor @preconcurrency var contentVisibleFrame: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

Modifying this property immediately moves the canvas, to animate changing the visible rect use [setContentVisibleFrame(\_:animated:)](setcontentvisibleframe%28__animated_%29.md).

## See Also

### Scrolling and zooming

- [scrollConfiguration](scrollconfiguration-swift.property.md): The configuration object that provides access to scroll view functionality.
- [PaperMarkupViewController.ScrollConfiguration](scrollconfiguration-swift.class.md): A cross-platform type that provides access to scroll view functionality.
- [setContentVisibleFrame(\_:animated:)](setcontentvisibleframe%28__animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomRange](zoomrange.md): A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.
