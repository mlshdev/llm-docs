> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/contains(_:using:transform:)](https://developer.apple.com/documentation/coregraphics/cgpath/contains(_:using:transform:))

# contains(\_:using:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified point is interior to the path.

## Declaration

```swift
func contains(_ point: CGPoint, using rule: CGPathFillRule = .winding, transform: CGAffineTransform = .identity) -> Bool
```

## Parameters

- `point`: The point to check.
- `rule`: The rule for determining which areas to treat as the interior of the path. Defaults to the [CGPathFillRule.winding](../cgpathfillrule/winding.md) rule if not specified.
- `transform`: An affine transform to apply to the point before checking for containment in the path. Defaults to the [CGAffineTransformIdentity](../cgaffinetransformidentity.md) transform if not specified.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point is interior to the path; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A point is contained in a path if it would be inside the painted region when the path is filled.

## See Also

### Related Documentation

- [CGPathFillRule](../cgpathfillrule.md): Rules for determining which regions are interior to a path, used by the [fillPath(using:)](../cgcontext/fillpath%28using_%29.md) and [clip(using:)](../cgcontext/clip%28using_%29.md) methods.

### Examining a Graphics Path

- [boundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [boundingBoxOfPath](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [currentPoint](currentpoint.md): Returns the current point in a graphics path.
- [isEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [isRect(\_:)](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
