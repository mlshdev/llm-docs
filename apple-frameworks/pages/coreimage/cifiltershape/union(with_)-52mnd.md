> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltershape/union(with:)-52mnd](https://developer.apple.com/documentation/coreimage/cifiltershape/union(with:)-52mnd)

# union(with:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that results from the union of the current filter shape and another filter shape object.

## Declaration

```swift
func union(with s2: CIFilterShape) -> CIFilterShape
```

## Parameters

- `s2`: A filter shape object.

<a id="return-value"></a>

## Return Value

The filter shape object that results from the union.

## See Also

### Modifying a Filter Shape

- [insetBy(x:y:)](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersect(with:)](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersect(with:)](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transform(by:interior:)](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [union(with:)](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

# unionWith: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that results from the union of the current filter shape and another filter shape object.

## Declaration

```objectivec
- (CIFilterShape *) unionWith:(CIFilterShape *) s2;
```

## Parameters

- `s2`: A filter shape object.

<a id="return-value"></a>

## Return Value

The filter shape object that results from the union.

## See Also

### Modifying a Filter Shape

- [insetByX:Y:](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersectWith:](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersectWithRect:](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [transformBy:interior:](transform%28by_interior_%29.md): Creates a filter shape that results from applying a transform to the current filter shape.
- [unionWithRect:](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.
