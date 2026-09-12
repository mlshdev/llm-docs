> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct)

# PKInkingTool

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

A structure that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.

## Declaration

```swift
struct PKInkingTool
```

## Mentioned In

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

<a id="overview"></a>

## Overview

A [PKInkingTool](pkinkingtool-swift.struct.md) object supports the creation of new content on a [PKCanvasView](pkcanvasview.md). With an inking tool, the canvas turns touch input from the user into a continuously rendered stroke. The value in the [width](pkinkingtool-swift.struct/width.md) property determines the base width of that stroke; however, that base value also depends on input from Apple Pencil, including force, azimuth, and angle data.

Create an inking tool programmatically, or display a [PKToolPicker](pktoolpicker.md) object and from which a user can select a tool. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to draw new content on the canvas. Assigning a new inking tool doesn’t change the characteristics for any previously drawn strokes.

## Topics

### Creating an inking tool

- [init(\_:color:width:)](pkinkingtool-swift.struct/init%28__color_width_%29-2l7v.md): Creates an ink tool object with the specified color and line width values.
- [init(\_:color:width:)](pkinkingtool-swift.struct/init%28__color_width_%29-4i3ft.md): Creates an ink tool object with the specified color and line width values.
- [init(ink:width:)](pkinkingtool-swift.struct/init%28ink_width_%29.md): Create an inking tool with the specified ink and width.

### Getting the width information

- [defaultWidth](pkinkingtool-swift.struct/inktype-swift.enum/defaultwidth.md): The default line width for the specified tool type.
- [validWidthRange](pkinkingtool-swift.struct/inktype-swift.enum/validwidthrange.md): The range of widths allowed for an ink of this type.

### Getting the inking tool attributes

- [color](pkinkingtool-swift.struct/color-5xmlo.md): The color of the ink.
- [color](pkinkingtool-swift.struct/color-22zaw.md): The color of the ink.
- [width](pkinkingtool-swift.struct/width.md): The width of the ink.
- [ink](pkinkingtool-swift.struct/ink.md): The ink used by this inking tool.

### Getting the tool type

- [inkType](pkinkingtool-swift.struct/inktype-swift.property.md): The tool type that determines the shape of the rendered content.
- [PKInkingTool.InkType](pkinkingtool-swift.struct/inktype-swift.enum.md): The type that defines the shape of stroked lines.

### Working with colors

- [convertColor(\_:from:to:)](pkinkingtool-swift.struct/convertcolor%28__from_to_%29.md): Convert a color from one user interface style to another.

### Supporting backward compatibility

- [requiredContentVersion](pkinkingtool-swift.struct/requiredcontentversion.md): The version of PencilKit necessary to use the inking tool.

### Using reference types

- [PKInkingToolReference](pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.

### Initializers

- [init(\_:color:width:azimuth:)](pkinkingtool-swift.struct/init%28__color_width_azimuth_%29-24rf4.md)
- [init(\_:color:width:azimuth:)](pkinkingtool-swift.struct/init%28__color_width_azimuth_%29-5dtjs.md)

### Instance Properties

- [azimuth](pkinkingtool-swift.struct/azimuth.md): The base angle of the ink.

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
- [PKEraserTool](pkerasertool-swift.struct.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](pklassotool-swift.struct.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pktool-swift.protocol.md): An interface adopted by drawing and writing tools used by a canvas view.
