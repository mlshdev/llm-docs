> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltershape/intersect(with:)-2o2n8](https://developer.apple.com/documentation/coreimage/cifiltershape/intersect(with:)-2o2n8)

# intersect(with:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that represents the intersection of the current filter shape and a rectangle.

## Declaration

```swift
func intersect(with r: CGRect) -> CIFilterShape
```

## Parameters

- `r`: A rectangle. Core Image uses the rectangle specified by integer parts of the width and height.

<a id="return-value"></a>

## Return Value

The filter shape that results from the intersection

## See Also

### Modifying a Filter Shape

- [insetBy(x:y:)](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersect(with:)](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [transform(by:interior:)](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [union(with:)](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [union(with:)](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

# intersectWithRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that represents the intersection of the current filter shape and a rectangle.

## Declaration

```objectivec
- (CIFilterShape *) intersectWithRect:(CGRect) r;
```

## Parameters

- `r`: A rectangle. Core Image uses the rectangle specified by integer parts of the width and height.

<a id="return-value"></a>

## Return Value

The filter shape that results from the intersection

## See Also

### Modifying a Filter Shape

- [insetByX:Y:](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersectWith:](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [transformBy:interior:](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [unionWith:](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [unionWithRect:](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.
