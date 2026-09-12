> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertoolreference](https://developer.apple.com/documentation/pencilkit/pkerasertoolreference)

# PKEraserToolReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A tool for erasing previously drawn content in a canvas view.

## Declaration

```swift
class PKEraserToolReference
```

<a id="overview"></a>

## Overview

A [PKEraserTool](pkerasertool-swift.struct.md) object supports the deletion of content from a [PKCanvasView](pkcanvasview.md) object. The eraser tool’s type determines whether the canvas removes entire items or just the portion of an item that it touches.

Create an eraser tool programmatically or display a [PKToolPicker](pktoolpicker.md) object and let the user select the eraser. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to erase content on the canvas.

## Topics

### Creating an eraser tool

- [init(eraserType:)](pkerasertoolreference/init%28erasertype_%29.md): Creates an eraser tool object that removes objects wholly or partially from a canvas view.
- [init(eraserType:width:)](pkerasertoolreference/init%28erasertype_width_%29.md)

### Getting the eraser type

- [eraserType](pkerasertoolreference/erasertype.md): The behavior adopted by the eraser when deleting content.

### Getting the width information

- [width](pkerasertoolreference/width.md): The width of the eraser.
- [defaultWidth(for:)](pkerasertoolreference/defaultwidth%28for_%29.md): The default width for the specified eraser type.
- [minimumWidth(for:)](pkerasertoolreference/minimumwidth%28for_%29.md): The minimum width for the specified eraser type.
- [maximumWidth(for:)](pkerasertoolreference/maximumwidth%28for_%29.md): The maximum width for the specified eraser type.

## Relationships

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PKEraserTool (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A tool for erasing previously drawn content in a canvas view.

## Declaration

```objectivec
@interface PKEraserTool : PKTool
```

<a id="overview"></a>

## Overview

A [PKEraserTool](pkerasertool-swift.struct.md) object supports the deletion of content from a [PKCanvasView](pkcanvasview.md) object. The eraser tool’s type determines whether the canvas removes entire items or just the portion of an item that it touches.

Create an eraser tool programmatically or display a [PKToolPicker](pktoolpicker.md) object and let the user select the eraser. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to erase content on the canvas.

## Topics

### Creating an eraser tool

- [initWithEraserType:](pkerasertoolreference/init%28erasertype_%29.md): Creates an eraser tool object that removes objects wholly or partially from a canvas view.
- [initWithEraserType:width:](pkerasertoolreference/init%28erasertype_width_%29.md)

### Getting the eraser type

- [eraserType](pkerasertoolreference/erasertype.md): The behavior adopted by the eraser when deleting content.
- [PKEraserType](pkerasertype.md): Constants that indicate the behavior of the eraser.

### Getting the width information

- [width](pkerasertoolreference/width.md): The width of the eraser.
- [defaultWidthForEraserType:](pkerasertoolreference/defaultwidth%28for_%29.md): The default width for the specified eraser type.
- [minimumWidthForEraserType:](pkerasertoolreference/minimumwidth%28for_%29.md): The minimum width for the specified eraser type.
- [maximumWidthForEraserType:](pkerasertoolreference/maximumwidth%28for_%29.md): The maximum width for the specified eraser type.

## Relationships

### Inherits From

- [PKTool](pktool-c.class.md)

## See Also

### Tools

- [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKLassoTool](pklassotoolreference.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKResponderState](pkresponderstate.md): An object that controls PencilKit behavior associated with a responder.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](pktoolpicker/delegate-swift.protocol.md)
- [PKToolPickerCustomItemControlOptions](pktoolpickercustomitem/controloptions.md): Options for which controls to present.
