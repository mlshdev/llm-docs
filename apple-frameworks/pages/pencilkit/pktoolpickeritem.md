> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickeritem](https://developer.apple.com/documentation/pencilkit/pktoolpickeritem)

# PKToolPickerItem (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

The base class for an item in the tool picker.

## Declaration

```swift
class PKToolPickerItem
```

## Topics

### Identifying the item

- [identifier](pktoolpickeritem/identifier.md): A string that identifies the item in the tool picker.

### Instance Properties

- [tool](pktoolpickeritem/tool-2ji9h.md): A tool for drawing on a PKCanvasView.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKToolPickerCustomItem](pktoolpickercustomitem.md)
- [PKToolPickerEraserItem](pktoolpickereraseritem.md)
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md)
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md)
- [PKToolPickerRulerItem](pktoolpickerruleritem.md)
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md)

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
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.

# PKToolPickerItem (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

The base class for an item in the tool picker.

## Declaration

```objectivec
@interface PKToolPickerItem : NSObject
```

## Topics

### Identifying the item

- [identifier](pktoolpickeritem/identifier.md): A string that identifies the item in the tool picker.

### Instance Properties

- [tool](pktoolpickeritem/tool-918ln.md): The `PKTool` this tool picker item represents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKToolPickerCustomItem](pktoolpickercustomitem.md)
- [PKToolPickerEraserItem](pktoolpickereraseritem.md)
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md)
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md)
- [PKToolPickerRulerItem](pktoolpickerruleritem.md)
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating a tool picker

- [init](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [initWithToolItems:](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerCustomItem](pktoolpickercustomitem.md): An item that represents a custom tool in the tool picker.
