> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct/inktype-swift.enum](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct/inktype-swift.enum)

# PKInkingTool.InkType

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

The type that defines the shape of stroked lines.

## Declaration

```swift
enum InkType
```

## Topics

### Choosing ink types

- [PKInkingTool.InkType.marker](inktype-swift.enum/marker.md): An inking tool that creates the appearance of a felt-tip marker.
- [PKInkingTool.InkType.pen](inktype-swift.enum/pen.md): An inking tool that creates the appearance of a pen-based drawing.
- [PKInkingTool.InkType.pencil](inktype-swift.enum/pencil.md): An inking tool that creates the appearance of a narrow line from a pencil.
- [PKInkingTool.InkType.monoline](inktype-swift.enum/monoline.md): An inking tool that creates the appearance of a monoline pen.
- [PKInkingTool.InkType.fountainPen](inktype-swift.enum/fountainpen.md): An inking tool that creates the appearance of a calligraphy pen.
- [PKInkingTool.InkType.watercolor](inktype-swift.enum/watercolor.md): An inking tool that creates the appearance of a watercolor brush.
- [PKInkingTool.InkType.crayon](inktype-swift.enum/crayon.md): An inking tool that creates the appearance of a crayon.

### Getting the width information

- [defaultWidth](inktype-swift.enum/defaultwidth.md): The default line width for the specified tool type.
- [validWidthRange](inktype-swift.enum/validwidthrange.md): The range of widths allowed for an ink of this type.

### Supporting backward compatibility

- [requiredContentVersion](inktype-swift.enum/requiredcontentversion.md): The version of PencilKit necessary to use the ink type.

### Enumeration Cases

- [PKInkingTool.InkType.reed](inktype-swift.enum/reed.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting the tool type

- [inkType](inktype-swift.property.md): The tool type that determines the shape of the rendered content.
