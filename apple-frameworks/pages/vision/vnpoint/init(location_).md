> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint/init(location:)](https://developer.apple.com/documentation/vision/vnpoint/init(location:))

# init(location:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object from the specified Core Graphics point.

## Declaration

```swift
convenience init(location: CGPoint)
```

## Parameters

- `location`: The Core Graphics point.

## See Also

### Creating a Point

- [init(x:y:)](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(coder:)](init%28coder_%29.md)
- [apply(\_:to:)](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zero](zero.md): A point object that represents the origin.

# initWithLocation: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a point object from the specified Core Graphics point.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CGPoint) location;
```

## Parameters

- `location`: The Core Graphics point.

## See Also

### Creating a Point

- [initWithX:y:](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [pointByApplyingVector:toPoint:](apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zeroPoint](zero.md): A point object that represents the origin.
