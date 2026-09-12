> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerlassoitem](https://developer.apple.com/documentation/pencilkit/pktoolpickerlassoitem)

# PKToolPickerLassoItem (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An item that represents a lasso tool in the tool picker.

## Declaration

```swift
class PKToolPickerLassoItem
```

<a id="overview"></a>

## Overview

A lasso item represents a [PKLassoTool](pklassotool-swift.struct.md) — a tool for selecting stroked lines and shapes in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Creating a lasso item

- [init()](pktoolpickerlassoitem/init%28%29.md): Creates a new lasso item.

### Accessing the lasso tool

- [lassoTool](pktoolpickerlassoitem/lassotool-2xuhy.md): A lasso tool for selecting parts of a drawing.

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
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.

# PKToolPickerLassoItem (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An item that represents a lasso tool in the tool picker.

## Declaration

```objectivec
@interface PKToolPickerLassoItem : PKToolPickerItem
```

<a id="overview"></a>

## Overview

A lasso item represents a [PKLassoTool](pklassotool-swift.struct.md) — a tool for selecting stroked lines and shapes in a canvas view — in a [PKToolPicker](pktoolpicker.md).

## Topics

### Creating a lasso item

- [init](pktoolpickerlassoitem/init%28%29.md): Creates a new lasso item.

### Accessing the lasso tool

- [lassoTool](pktoolpickerlassoitem/lassotool-1urgb.md): A lasso tool for selecting parts of a drawing.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

## See Also

### Creating a tool picker

- [init](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [initWithToolItems:](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.
