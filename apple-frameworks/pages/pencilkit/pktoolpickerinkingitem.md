> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerinkingitem](https://developer.apple.com/documentation/pencilkit/pktoolpickerinkingitem)

# PKToolPickerInkingItem (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

An item that represents an inking tool in the tool picker.

## Declaration

```swift
class PKToolPickerInkingItem
```

<a id="overview"></a>

## Overview

An inking item represents a [PKInkingTool](pkinkingtool-swift.struct.md) — a tool for drawing marks in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Accessing the inking tool

- [inkingTool](pktoolpickerinkingitem/inkingtool-1hcet.md): A tool for drawing on a canvas view.

### Initializers

- [init(type:color:width:azimuth:identifier:)](pktoolpickerinkingitem/init%28type_color_width_azimuth_identifier_%29-7gkxh.md): Create a new inking tool item.
- [init(type:color:width:azimuth:identifier:)](pktoolpickerinkingitem/init%28type_color_width_azimuth_identifier_%29-y8h5.md): Create a new inking tool item.
- [init(type:color:width:identifier:)](pktoolpickerinkingitem/init%28type_color_width_identifier_%29-1tsup.md): Create a new inking tool item.
- [init(type:color:width:identifier:)](pktoolpickerinkingitem/init%28type_color_width_identifier_%29-7kzdq.md): Create a new inking tool item.

### Instance Properties

- [allowsColorSelection](pktoolpickerinkingitem/allowscolorselection.md): Present color selection UI to the user. Default value is YES.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a tool picker

- [init()](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [init(toolItems:)](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.

# PKToolPickerInkingItem (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

An item that represents an inking tool in the tool picker.

## Declaration

```objectivec
@interface PKToolPickerInkingItem : PKToolPickerItem
```

<a id="overview"></a>

## Overview

An inking item represents a [PKInkingTool](pkinkingtool-swift.struct.md) — a tool for drawing marks in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Creating an inking item

- [initWithInkType:color:width:](pktoolpickerinkingitem/initwithinktype_color_width_.md): Creates a new inking item with the specified ink type, color, and width.
- [initWithInkType:color:width:identifier:](pktoolpickerinkingitem/initwithinktype_color_width_identifier_.md): Creates a new inking item with the specified ink type, color, width, and identifier.

### Accessing the inking tool

- [inkingTool](pktoolpickerinkingitem/inkingtool-625y9.md): A tool for drawing on a canvas view.

### Instance Properties

- [allowsColorSelection](pktoolpickerinkingitem/allowscolorselection.md): Present color selection UI to the user. Default value is YES.

### Instance Methods

- [initWithInkType:](pktoolpickerinkingitem/initwithinktype_.md): Create a new tool picker item with a `PKInkType`.
- [initWithInkType:color:](pktoolpickerinkingitem/initwithinktype_color_.md)
- [initWithInkType:color:width:azimuth:identifier:](pktoolpickerinkingitem/initwithinktype_color_width_azimuth_identifier_.md)
- [initWithInkType:width:](pktoolpickerinkingitem/initwithinktype_width_.md): Create a new tool picker item with a `PKInkType`.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

## See Also

### Creating a tool picker

- [init](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [initWithToolItems:](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.
