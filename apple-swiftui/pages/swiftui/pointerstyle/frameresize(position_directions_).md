> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle/frameresize(position:directions:)](https://developer.apple.com/documentation/swiftui/pointerstyle/frameresize(position:directions:))

# frameResize(position:directions:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 15.0+

The pointer style for resizing a rectangular frame from a specific edge or corner.

## Declaration

```swift
static func frameResize(position: FrameResizePosition, directions: FrameResizeDirection.Set = .all) -> PointerStyle
```

## Parameters

- `position`: The position along the perimeter of the frame (its edges and corners) from which it’s resized.
- `directions`: The directions in which the frame can be resized.

## See Also

### Getting built-in pointer styles

- [default](default.md): The pointer style that uses the default platform appearance.
- [horizontalText](horizontaltext.md): The pointer style appropriate for selecting or inserting text in a horizontal layout.
- [verticalText](verticaltext.md): The pointer style appropriate for selecting or inserting text in a vertical layout.
- [rectSelection](rectselection.md): The pointer style appropriate for precise rectangular selection, such as selecting a portion of an image or multiple lines of text.
- [grabIdle](grabidle.md): The pointer style appropriate to indicate that dragging to reposition content within specific bounds, such as panning a large image, is possible.
- [grabActive](grabactive.md): The pointer style appropriate for actively dragging to reposition content within specific bounds, such as panning a large image.
- [link](link.md): The pointer style appropriate for content opens a URL link to a webpage, document, or other item when clicked.
- [zoomIn](zoomin.md): The pointer style appropriate to indicate that the content can be zoomed in.
- [zoomOut](zoomout.md): The pointer style appropriate to indicate that the content can be zoomed out.
- [columnResize(directions:)](columnresize%28directions_%29.md): The pointer style for resizing a column, or vertical division.
- [rowResize(directions:)](rowresize%28directions_%29.md): The pointer style for resizing a row, or horizontal division.
