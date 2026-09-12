> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertool-swift.struct](https://developer.apple.com/documentation/pencilkit/pkerasertool-swift.struct)

# PKEraserTool

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

A tool for erasing previously drawn content in a canvas view.

## Declaration

```swift
struct PKEraserTool
```

<a id="overview"></a>

## Overview

A [PKEraserTool](pkerasertool-swift.struct.md) object supports the deletion of content from a [PKCanvasView](pkcanvasview.md) object. The eraser tool’s type determines whether the canvas removes entire items or just the portion of an item that it touches.

Create an eraser tool programmatically or display a [PKToolPicker](pktoolpicker.md) object and let the user select the eraser. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to erase content on the canvas.

## Topics

### Creating an eraser tool

- [init(\_:)](pkerasertool-swift.struct/init%28__%29.md): Creates an eraser tool object that removes objects wholly or partially from a canvas view.
- [init(\_:width:)](pkerasertool-swift.struct/init%28__width_%29.md): Creates an eraser tool object with the specified width.

### Getting the eraser type

- [eraserType](pkerasertool-swift.struct/erasertype-swift.property.md): The behavior adopted by the eraser when deleting content.
- [PKEraserTool.EraserType](pkerasertool-swift.struct/erasertype-swift.enum.md): Constants that indicate the behavior of the eraser.

### Specifying the width

- [width](pkerasertool-swift.struct/width.md): The width of the eraser.

### Using reference types

- [PKEraserToolReference](pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [PKTool](pktool-swift.protocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tools

- [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pkinkingtool-swift.struct.md): A structure that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKLassoTool](pklassotool-swift.struct.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pktool-swift.protocol.md): An interface adopted by drawing and writing tools used by a canvas view.
