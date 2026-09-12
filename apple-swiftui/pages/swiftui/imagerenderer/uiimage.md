> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/imagerenderer/uiimage](https://developer.apple.com/documentation/swiftui/imagerenderer/uiimage)

# uiImage

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current contents of the view, rasterized as a UIKit image.

## Declaration

```swift
@MainActor final var uiImage: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

The renderer notifies its `objectWillChange` publisher when the contents of the image may have changed.

## See Also

### Rendering images

- [render(rasterizationScale:renderer:)](render%28rasterizationscale_renderer_%29.md): Draws the renderer’s current contents to an arbitrary Core Graphics context.
- [cgImage](cgimage.md): The current contents of the view, rasterized as a Core Graphics image.
- [nsImage](nsimage.md): Conforms when `Content` conforms to `View`. The current contents of the view, rasterized as an AppKit image.
