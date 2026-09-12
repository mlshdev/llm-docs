> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle/default](https://developer.apple.com/documentation/swiftui/pointerstyle/default)

# default

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+ · visionOS 2.0+

The pointer style that uses the default platform appearance.

## Declaration

```swift
static let `default`: PointerStyle
```

<a id="discussion"></a>

## Discussion

This is the default pointer style for interacting with content and UI elements if no other pointer style is more appropriate. This pointer style displays an arrow in macOS and a circle in iPadOS and visionOS.

You might want to set this pointer style explicitly using the [pointerStyle(\_:)](../view/pointerstyle%28__%29.md) modifier to override another style in the environment.

## See Also

### Getting built-in pointer styles

- [horizontalText](horizontaltext.md): The pointer style appropriate for selecting or inserting text in a horizontal layout.
- [verticalText](verticaltext.md): The pointer style appropriate for selecting or inserting text in a vertical layout.
- [rectSelection](rectselection.md): The pointer style appropriate for precise rectangular selection, such as selecting a portion of an image or multiple lines of text.
- [grabIdle](grabidle.md): The pointer style appropriate to indicate that dragging to reposition content within specific bounds, such as panning a large image, is possible.
- [grabActive](grabactive.md): The pointer style appropriate for actively dragging to reposition content within specific bounds, such as panning a large image.
- [link](link.md): The pointer style appropriate for content opens a URL link to a webpage, document, or other item when clicked.
- [zoomIn](zoomin.md): The pointer style appropriate to indicate that the content can be zoomed in.
- [zoomOut](zoomout.md): The pointer style appropriate to indicate that the content can be zoomed out.
- [frameResize(position:directions:)](frameresize%28position_directions_%29.md): The pointer style for resizing a rectangular frame from a specific edge or corner.
- [columnResize(directions:)](columnresize%28directions_%29.md): The pointer style for resizing a column, or vertical division.
- [rowResize(directions:)](rowresize%28directions_%29.md): The pointer style for resizing a row, or horizontal division.
