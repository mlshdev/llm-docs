> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct/init(_:color:width:)-2l7v](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct/init(_:color:width:)-2l7v)

# init(\_:color:width:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Creates an ink tool object with the specified color and line width values.

## Declaration

```swift
init(_ inkType: PKInkingTool.InkType, color: UIColor = UIColor.black, width: CGFloat? = nil)
```

## Parameters

- `inkType`: The shape of the tool, which can be [PKInkingTool.InkType.marker](inktype-swift.enum/marker.md), [PKInkingTool.InkType.pen](inktype-swift.enum/pen.md), or [PKInkingTool.InkType.pencil](inktype-swift.enum/pencil.md).
- `color`: The color to apply to drawn lines.
- `width`: The base width to apply to any drawn lines. The value in the `inkType` parameter and input from Apple Pencil affects the final width.

<a id="discussion"></a>

## Discussion

This initializer creates a new inking tool with the specified type, color, and width.

## See Also

### Creating an inking tool

- [init(\_:color:width:)](init%28__color_width_%29-4i3ft.md): Creates an ink tool object with the specified color and line width values.
- [init(ink:width:)](init%28ink_width_%29.md): Create an inking tool with the specified ink and width.
