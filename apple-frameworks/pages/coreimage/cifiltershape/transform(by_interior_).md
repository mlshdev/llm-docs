> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltershape/transform(by:interior:)](https://developer.apple.com/documentation/coreimage/cifiltershape/transform(by:interior:))

# transform(by:interior:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that results from applying a transform to the current filter shape.

## Declaration

```swift
func transform(by m: CGAffineTransform, interior flag: Bool) -> CIFilterShape
```

## Parameters

- `m`: A transform.
- `flag`: `false` specifies that the new filter shape object can contain all the pixels in the transformed shape (and possibly some that are outside the transformed shape). `true` specifies that the new filter shape object can contain  a subset of the pixels in the transformed shape (but none of those outside the transformed shape).

<a id="return-value"></a>

## Return Value

The transformed filter shape object.

## See Also

### Modifying a Filter Shape

- [insetBy(x:y:)](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersect(with:)](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersect(with:)](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [union(with:)](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [union(with:)](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.

# transformBy:interior: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape that results from applying a transform to the current filter shape.

## Declaration

```objectivec
- (CIFilterShape *) transformBy:(CGAffineTransform) m interior:(BOOL) flag;
```

## Parameters

- `m`: A transform.
- `flag`: `false` specifies that the new filter shape object can contain all the pixels in the transformed shape (and possibly some that are outside the transformed shape). `true` specifies that the new filter shape object can contain  a subset of the pixels in the transformed shape (but none of those outside the transformed shape).

<a id="return-value"></a>

## Return Value

The transformed filter shape object.

## See Also

### Modifying a Filter Shape

- [insetByX:Y:](insetby%28x_y_%29.md): Modifies a filter shape object so that it is inset by the specified x and y values.
- [intersectWith:](intersect%28with_%29-8iw.md): Creates a filter shape object that represents the intersection of the current filter shape and the specified filter shape object.
- [intersectWithRect:](intersect%28with_%29-2o2n8.md): Creates a filter shape that represents the intersection of the current filter shape and a rectangle.
- [unionWith:](union%28with_%29-52mnd.md): Creates a filter shape that results from the union of the current filter shape and another filter shape object.
- [unionWithRect:](union%28with_%29-75ebo.md): Creates a filter shape that results from the union of the current filter shape and a rectangle.
