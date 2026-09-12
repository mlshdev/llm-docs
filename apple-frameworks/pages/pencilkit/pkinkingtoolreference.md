> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference)

# PKInkingToolReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.

## Declaration

```swift
class PKInkingToolReference
```

<a id="overview"></a>

## Overview

A [PKInkingTool](pkinkingtool-swift.struct.md) object supports the creation of new content on a [PKCanvasView](pkcanvasview.md). With an inking tool, the canvas turns touch input from the user into a continuously rendered stroke. The value in the [width](pkinkingtoolreference/width.md) property determines the base width of that stroke; however, that base value also depends on input from Apple Pencil, including force, azimuth, and angle data.

Create an inking tool programmatically, or display a [PKToolPicker](pktoolpicker.md) object and from which a user can select a tool. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to draw new content on the canvas. Assigning a new inking tool doesn’t change the characteristics for any previously drawn strokes.

## Topics

### Creating an inking tool

- [init(inkType:color:width:)](pkinkingtoolreference/init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [init(inkType:color:)](pkinkingtoolreference/init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.
- [init(ink:width:)](pkinkingtoolreference/init%28ink_width_%29.md): Create an inking tool with the specified ink and width.

### Getting the inking tool attributes

- [color](pkinkingtoolreference/color.md): The color of the ink.
- [width](pkinkingtoolreference/width.md): The base line width for new content.
- [ink](pkinkingtoolreference/ink.md): The ink that this tool creates strokes with.

### Getting the tool type

- [inkType](pkinkingtoolreference/inktype.md): The tool type that determines the shape of the rendered content.

### Working with colors

- [convert(\_:from:to:)](pkinkingtoolreference/convert%28__from_to_%29.md): Converts a color from one user interface style to another.

### Getting the standard ink widths

- [defaultWidth(forInkType:)](pkinkingtoolreference/defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [minimumWidth(forInkType:)](pkinkingtoolreference/minimumwidth%28forinktype_%29.md): Returns the minimum allowed line width for the specified tool type.
- [maximumWidth(forInkType:)](pkinkingtoolreference/maximumwidth%28forinktype_%29.md): Returns the maximum allowed line width for the specified tool type.

### Supporting backward compatibility

- [requiredContentVersion](pkinkingtoolreference/requiredcontentversion.md): The version of PencilKit necessary to use the inking tool.

### Initializers

- [init(inkType:color:width:azimuth:)](pkinkingtoolreference/init%28inktype_color_width_azimuth_%29.md)

### Instance Properties

- [azimuth](pkinkingtoolreference/azimuth.md): The base angle of the ink.

### Type Methods

- [invertColor(\_:)](pkinkingtoolreference/invertcolor%28__%29.md): Converts a color from light to dark appearance or vice versa.

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

# PKInkingTool (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that defines the drawing characteristics (width, color, pen style) to use when drawing lines on a canvas view.

## Declaration

```objectivec
@interface PKInkingTool : PKTool
```

<a id="overview"></a>

## Overview

A [PKInkingTool](pkinkingtool-swift.struct.md) object supports the creation of new content on a [PKCanvasView](pkcanvasview.md). With an inking tool, the canvas turns touch input from the user into a continuously rendered stroke. The value in the [width](pkinkingtoolreference/width.md) property determines the base width of that stroke; however, that base value also depends on input from Apple Pencil, including force, azimuth, and angle data.

Create an inking tool programmatically, or display a [PKToolPicker](pktoolpicker.md) object and from which a user can select a tool. Assign the resulting object to the [tool](pkcanvasview/tool-6str6.md) property of your [PKCanvasView](pkcanvasview.md) object. The canvas uses any subsequent touch sequences to draw new content on the canvas. Assigning a new inking tool doesn’t change the characteristics for any previously drawn strokes.

## Topics

### Creating an inking tool

- [initWithInkType:color:width:](pkinkingtoolreference/init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [initWithInkType:color:](pkinkingtoolreference/init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.
- [initWithInk:width:](pkinkingtoolreference/init%28ink_width_%29.md): Create an inking tool with the specified ink and width.

### Getting the inking tool attributes

- [color](pkinkingtoolreference/color.md): The color of the ink.
- [width](pkinkingtoolreference/width.md): The base line width for new content.
- [ink](pkinkingtoolreference/ink.md): The ink that this tool creates strokes with.

### Getting the tool type

- [inkType](pkinkingtoolreference/inktype.md): The tool type that determines the shape of the rendered content.
- [PKInkType](pkinktype.md): The type that defines the shape of stroked lines.
- [PKInkTypeMarker](pkinktypemarker.md): An inking tool that creates the appearance of a felt-tip marker.
- [PKInkTypePen](pkinktypepen.md): An inking tool that creates the appearance of drawing with a pen.
- [PKInkTypePencil](pkinktypepencil.md): An inking tool that creates the appearance of drawing with a pencil.
- [PKInkTypeMonoline](pkinktypemonoline.md): An inking tool that creates the appearance of a monoline pen.
- [PKInkTypeFountainPen](pkinktypefountainpen.md): An inking tool that creates the appearance of a calligraphy pen.
- [PKInkTypeWatercolor](pkinktypewatercolor.md): An inking tool that creates the appearance of a watercolor brush.
- [PKInkTypeCrayon](pkinktypecrayon.md): An inking tool that creates the appearance of a crayon.

### Working with colors

- [convertColor:fromUserInterfaceStyle:to:](pkinkingtoolreference/convert%28__from_to_%29.md): Converts a color from one user interface style to another.

### Getting the standard ink widths

- [defaultWidthForInkType:](pkinkingtoolreference/defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [minimumWidthForInkType:](pkinkingtoolreference/minimumwidth%28forinktype_%29.md): Returns the minimum allowed line width for the specified tool type.
- [maximumWidthForInkType:](pkinkingtoolreference/maximumwidth%28forinktype_%29.md): Returns the maximum allowed line width for the specified tool type.

### Supporting backward compatibility

- [requiredContentVersion](pkinkingtoolreference/requiredcontentversion.md): The version of PencilKit necessary to use the inking tool.

### Instance Properties

- [azimuth](pkinkingtoolreference/azimuth.md): The base angle of the ink.

### Instance Methods

- [initWithInkType:color:width:azimuth:](pkinkingtoolreference/init%28inktype_color_width_azimuth_%29.md)

### Type Methods

- [invertColor:](pkinkingtoolreference/invertcolor%28__%29.md): Converts a color from light to dark appearance or vice versa.

## Relationships

### Inherits From

- [PKTool](pktool-c.class.md)

## See Also

### Tools

- [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md): Incorporate a custom PencilKit tool picker with a variety of system and custom tools into a drawing app.
- [PKToolPicker](pktoolpicker.md): A tool palette that displays a selection of drawing tools and colors for tools that a person can choose from.
- [PKEraserTool](pkerasertoolreference.md): A tool for erasing previously drawn content in a canvas view.
- [PKLassoTool](pklassotoolreference.md): A tool for selecting stroked lines and shapes in a canvas view.
- [PKTool](pktool-c.class.md): An abstract base class for tools used by a canvas view.
- [PKResponderState](pkresponderstate.md): An object that controls PencilKit behavior associated with a responder.
- [PKToolPickerVisibility](pktoolpickervisibility.md): Constants that describe the visibility state of a tool picker.
- [PKToolPickerDelegate](pktoolpicker/delegate-swift.protocol.md)
- [PKToolPickerCustomItemControlOptions](pktoolpickercustomitem/controloptions.md): Options for which controls to present.
