> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pklassotoolreference](https://developer.apple.com/documentation/pencilkit/pklassotoolreference)

# PKLassoToolReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A tool for selecting stroked lines and shapes in a canvas view.

## Declaration

```swift
class PKLassoToolReference
```

<a id="overview"></a>

## Overview

A [PKLassoToolReference](pklassotoolreference.md) object supports the selection of content on a [PKCanvasView](pkcanvasview.md). When active, the canvas uses incoming touch events to determine what content to add to the selection.

Create a lasso tool programmatically or display a [PKToolPicker](pktoolpicker.md) object from which the user selects the tool. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to select content on the canvas.

## Topics

### Creating a lasso tool

- [init()](pklassotoolreference/init%28%29.md): Creates a lasso tool object for selecting content on a canvas view.

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

# PKLassoTool (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A tool for selecting stroked lines and shapes in a canvas view.

## Declaration

```objectivec
@interface PKLassoTool : PKTool
```

<a id="overview"></a>

## Overview

A [PKLassoTool](pklassotoolreference.md) object supports the selection of content on a [PKCanvasView](pkcanvasview.md). When active, the canvas uses incoming touch events to determine what content to add to the selection.

Create a lasso tool programmatically or display a [PKToolPicker](pktoolpicker.md) object from which the user selects the tool. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to select content on the canvas.

## Topics

### Creating a lasso tool

- [init](pklassotoolreference/init%28%29.md): Creates a lasso tool object for selecting content on a canvas view.

## Relationships

### Inherits From

- [PKTool](pktool-c.class.md)

## See Also

### Tools

- [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKInkingTool](pkinkingtoolreference.md): An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.
- [PKEraserTool](pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.
- [PKTool](pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKResponderState](pkresponderstate.md): An object that controls PencilKit behavior associated with a responder.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](pktoolpicker/delegate-swift.protocol.md)
- [PKToolPickerCustomItemControlOptions](pktoolpickercustomitem/controloptions.md): Options for which controls to present.
