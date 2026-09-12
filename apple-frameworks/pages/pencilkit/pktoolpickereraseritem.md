> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickereraseritem](https://developer.apple.com/documentation/pencilkit/pktoolpickereraseritem)

# PKToolPickerEraserItem (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

An item that represents an eraser tool in the tool picker.

## Declaration

```swift
class PKToolPickerEraserItem
```

<a id="overview"></a>

## Overview

An eraser item represents a [PKEraserTool](pkerasertool-swift.struct.md) — a tool for erasing content in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Creating an eraser item

- [init(type:)](pktoolpickereraseritem/init%28type_%29.md): Creates a new eraser item.
- [init(type:width:)](pktoolpickereraseritem/init%28type_width_%29.md): Creates a new eraser item with the specified width.

### Accessing the eraser tool

- [eraserTool](pktoolpickereraseritem/erasertool-92wqj.md): An eraser tool for erasing parts of a drawing.

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
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.

# PKToolPickerEraserItem (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

An item that represents an eraser tool in the tool picker.

## Declaration

```objectivec
@interface PKToolPickerEraserItem : PKToolPickerItem
```

<a id="overview"></a>

## Overview

An eraser item represents a [PKEraserTool](pkerasertool-swift.struct.md) — a tool for erasing content in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Creating an eraser item

- [initWithEraserType:](pktoolpickereraseritem/initwitherasertype_.md): Creates a new eraser item.
- [initWithEraserType:width:](pktoolpickereraseritem/initwitherasertype_width_.md): Creates a new eraser item with the specified width.

### Accessing the eraser tool

- [eraserTool](pktoolpickereraseritem/erasertool-4q3hp.md): An eraser tool for erasing parts of a drawing.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

## See Also

### Creating a tool picker

- [init](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [initWithToolItems:](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.
