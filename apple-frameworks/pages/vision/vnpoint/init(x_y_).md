> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint/init(x:y:)](https://developer.apple.com/documentation/vision/vnpoint/init(x:y:))

# init(x:y:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object with the specified coordinates.

## Declaration

```swift
init(x: Double, y: Double)
```

## Parameters

- `x`: The x-coordinate value.
- `y`: The y-coordinate value.

## See Also

### Creating a Point

- [init(location:)](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [init(coder:)](init%28coder_%29.md)
- [apply(\_:to:)](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zero](zero.md): A point object that represents the origin.

# initWithX:y: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object with the specified coordinates.

## Declaration

```objectivec
- (instancetype) initWithX:(double) x y:(double) y;
```

## Parameters

- `x`: The x-coordinate value.
- `y`: The y-coordinate value.

## See Also

### Creating a Point

- [initWithLocation:](init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [pointByApplyingVector:toPoint:](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zeroPoint](zero.md): A point object that represents the origin.
