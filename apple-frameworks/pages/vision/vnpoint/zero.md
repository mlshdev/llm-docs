> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint/zero](https://developer.apple.com/documentation/vision/vnpoint/zero)

# zero (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A point object that represents the origin.

## Declaration

```swift
class var zero: VNPoint { get }
```

<a id="Discussion"></a>

## Discussion

The origin point is (0.0, 0.0).

## See Also

### Creating a Point

- [init(x:y:)](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(location:)](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [init(coder:)](init%28coder_%29.md)
- [apply(\_:to:)](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.

# zeroPoint (Objective-C)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A point object that represents the origin.

## Declaration

```objectivec
@property (class, strong, readonly) VNPoint * zeroPoint;
```

<a id="Discussion"></a>

## Discussion

The origin point is (0.0, 0.0).

## See Also

### Creating a Point

- [initWithX:y:](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [initWithLocation:](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [pointByApplyingVector:toPoint:](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
