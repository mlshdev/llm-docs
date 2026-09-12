> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltershape/insetby(x:y:)](https://developer.apple.com/documentation/coreimage/cifiltershape/insetby(x:y:))

# insetBy(x:y:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Modifies a filter shape object so that it is inset by the specified x and y values.

## Declaration

```swift
func insetBy(x dx: Int32, y dy: Int32) -> CIFilterShape
```

## Parameters

- `dx`: A value that specifies an inset in the x direction.
- `dy`: A value that specifies an inset in the y direction.

## See Also

### Modifying a Filter Shape

- [intersect(with:)](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersect(with:)](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transform(by:interior:)](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [union(with:)](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [union(with:)](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

# insetByX:Y: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Modifies a filter shape object so that it is inset by the specified x and y values.

## Declaration

```objectivec
- (CIFilterShape *) insetByX:(int) dx Y:(int) dy;
```

## Parameters

- `dx`: A value that specifies an inset in the x direction.
- `dy`: A value that specifies an inset in the y direction.

## See Also

### Modifying a Filter Shape

- [intersectWith:](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersectWithRect:](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transformBy:interior:](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [unionWith:](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [unionWithRect:](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.
