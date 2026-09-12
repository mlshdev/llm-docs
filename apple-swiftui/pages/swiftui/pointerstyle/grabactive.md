> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle/grabactive](https://developer.apple.com/documentation/swiftui/pointerstyle/grabactive)

# grabActive

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+

The pointer style appropriate for actively dragging to reposition content within specific bounds, such as panning a large image.

## Declaration

```swift
static let grabActive: PointerStyle
```

<a id="discussion"></a>

## Discussion

This pointer style displays a closed hand to indicate that the content is currently being repositioned. Typically it’s used along with the `PointerStyle.grabIdle` pointer style to indicate that repositioning the content is possible.

You may apply this pointer style to a single view or a view hierarchy using the [pointerStyle(\_:)](../view/pointerstyle%28__%29.md) modifier.

## See Also

### Getting built-in pointer styles

- [default](default.md): The pointer style that uses the default platform appearance.
- [horizontalText](horizontaltext.md): The pointer style appropriate for selecting or inserting text in a horizontal layout.
- [verticalText](verticaltext.md): The pointer style appropriate for selecting or inserting text in a vertical layout.
- [rectSelection](rectselection.md): The pointer style appropriate for precise rectangular selection, such as selecting a portion of an image or multiple lines of text.
- [grabIdle](grabidle.md): The pointer style appropriate to indicate that dragging to reposition content within specific bounds, such as panning a large image, is possible.
- [link](link.md): The pointer style appropriate for content opens a URL link to a webpage, document, or other item when clicked.
- [zoomIn](zoomin.md): The pointer style appropriate to indicate that the content can be zoomed in.
- [zoomOut](zoomout.md): The pointer style appropriate to indicate that the content can be zoomed out.
- [frameResize(position:directions:)](frameresize%28position_directions_%29.md): The pointer style for resizing a rectangular frame from a specific edge or corner.
- [columnResize(directions:)](columnresize%28directions_%29.md): The pointer style for resizing a column, or vertical division.
- [rowResize(directions:)](rowresize%28directions_%29.md): The pointer style for resizing a row, or horizontal division.
