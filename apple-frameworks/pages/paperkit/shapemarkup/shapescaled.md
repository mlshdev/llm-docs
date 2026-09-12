> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/shapescaled](https://developer.apple.com/documentation/paperkit/shapemarkup/shapescaled)

# shapeScaled

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The type of the shape with values scaled to the current frame.

## Declaration

```swift
var shapeScaled: ShapeMarkup.Shape { get set }
```

<a id="discussion"></a>

## Discussion

Coordinate values are specified in points relative to the shape’s `frame`. When you resize the shape, this property’s values automatically update to reflect the new dimensions.

Use `shape` if you need consistent relative proportions that don’t change when resizing.

```swift
var shape = ShapeMarkup(
    shape: .roundedRectangle(cornerRadius: 0.2),
    frame: CGRect(x: 0, y: 0, width: 100, height: 100)
)

// shapeScaled returns .roundedRectangle(cornerRadius: 20.0) // 20 points

shape.frame = CGRect(x: 0, y: 0, width: 200, height: 200)
// shapeScaled now returns .roundedRectangle(cornerRadius: 40.0) // 40 points
```

## See Also

### Choosing a shape type

- [shape](shape-swift.property.md): The type of the shape.
- [ShapeMarkup.Shape](shape-swift.enum.md)
