> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle](https://developer.apple.com/documentation/swiftui/pointerstyle)

# PointerStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+ · visionOS 2.0+

A style describing the appearance of the pointer (also called a cursor) when it’s hovered over a view.

## Declaration

```swift
struct PointerStyle
```

<a id="overview"></a>

## Overview

Use the [pointerStyle(\_:)](view/pointerstyle%28__%29.md) view modifier to set a view’s pointer style.

For guidance on choosing an appropriate pointer style, refer to [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices) in the Human Interface Guidelines.

## Topics

### Getting built-in pointer styles

- [default](pointerstyle/default.md): The pointer style that uses the default platform appearance.
- [horizontalText](pointerstyle/horizontaltext.md): The pointer style appropriate for selecting or inserting text in a horizontal layout.
- [verticalText](pointerstyle/verticaltext.md): The pointer style appropriate for selecting or inserting text in a vertical layout.
- [rectSelection](pointerstyle/rectselection.md): The pointer style appropriate for precise rectangular selection, such as selecting a portion of an image or multiple lines of text.
- [grabIdle](pointerstyle/grabidle.md): The pointer style appropriate to indicate that dragging to reposition content within specific bounds, such as panning a large image, is possible.
- [grabActive](pointerstyle/grabactive.md): The pointer style appropriate for actively dragging to reposition content within specific bounds, such as panning a large image.
- [link](pointerstyle/link.md): The pointer style appropriate for content opens a URL link to a webpage, document, or other item when clicked.
- [zoomIn](pointerstyle/zoomin.md): The pointer style appropriate to indicate that the content can be zoomed in.
- [zoomOut](pointerstyle/zoomout.md): The pointer style appropriate to indicate that the content can be zoomed out.
- [frameResize(position:directions:)](pointerstyle/frameresize%28position_directions_%29.md): The pointer style for resizing a rectangular frame from a specific edge or corner.
- [columnResize(directions:)](pointerstyle/columnresize%28directions_%29.md): The pointer style for resizing a column, or vertical division.
- [rowResize(directions:)](pointerstyle/rowresize%28directions_%29.md): The pointer style for resizing a row, or horizontal division.

### Creating custom pointer styles

- [image(\_:hotSpot:)](pointerstyle/image%28__hotspot_%29.md): Initializes a pointer style with a given image and hot spot.
- [shape(\_:eoFill:size:)](pointerstyle/shape%28__eofill_size_%29.md): Initializes a pointer style with a given shape.

### Supporting types

- [HorizontalDirection](horizontaldirection.md): A direction on the horizontal axis.
- [VerticalDirection](verticaldirection.md): A direction on the vertical axis.
- [FrameResizePosition](frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [FrameResizeDirection](frameresizedirection.md): The direction in which a rectangular frame can be resized.

### Type Properties

- [columnResize](pointerstyle/columnresize.md): The pointer style for resizing a column, or vertical division, in either direction.
- [rowResize](pointerstyle/rowresize.md): The pointer style for resizing a row, or horizontal division, in either direction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying pointer appearance

- [pointerStyle(\_:)](view/pointerstyle%28__%29.md): Sets the pointer style to display when the pointer is over the view.
- [pointerVisibility(\_:)](view/pointervisibility%28__%29.md): Sets the visibility of the pointer when it’s over the view.
