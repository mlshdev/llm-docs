> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint/apply(_:to:)](https://developer.apple.com/documentation/vision/vnpoint/apply(_:to:))

# apply(\_:to:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object that’s shifted by the X and Y offsets of the specified vector.

## Declaration

```swift
class func apply(_ vector: VNVector, to point: VNPoint) -> VNPoint
```

## Parameters

- `vector`: The vector to apply to offset the point.
- `point`: The point to translate by the vector’s X and Y offsets.

## See Also

### Creating a Point

- [init(x:y:)](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(location:)](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [init(coder:)](init%28coder_%29.md)
- [zero](zero.md): A point object that represents the origin.

# pointByApplyingVector:toPoint: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object that’s shifted by the X and Y offsets of the specified vector.

## Declaration

```objectivec
+ (VNPoint *) pointByApplyingVector:(VNVector *) vector toPoint:(VNPoint *) point;
```

## Parameters

- `vector`: The vector to apply to offset the point.
- `point`: The point to translate by the vector’s X and Y offsets.

## See Also

### Creating a Point

- [initWithX:y:](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [initWithLocation:](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [zeroPoint](zero.md): A point object that represents the origin.
