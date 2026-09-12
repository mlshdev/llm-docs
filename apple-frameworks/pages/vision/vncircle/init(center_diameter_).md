> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle/init(center:diameter:)](https://developer.apple.com/documentation/vision/vncircle/init(center:diameter:))

# init(center:diameter:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a circle with the specified center and diameter.

## Declaration

```swift
convenience init(center: VNPoint, diameter: Double)
```

## Parameters

- `center`: The circle center.
- `diameter`: The circle diameter.

## See Also

### Creating a Circle

- [init(center:radius:)](init%28center_radius_%29.md): Creates a circle with the specified center and radius.
- [init(coder:)](init%28coder_%29.md)
- [zero](zero.md): A circle object centered at the origin, with a radius of zero.

# initWithCenter:diameter: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a circle with the specified center and diameter.

## Declaration

```objectivec
- (instancetype) initWithCenter:(VNPoint *) center diameter:(double) diameter;
```

## Parameters

- `center`: The circle center.
- `diameter`: The circle diameter.

## See Also

### Creating a Circle

- [initWithCenter:radius:](init%28center_radius_%29.md): Creates a circle with the specified center and radius.
- [zeroCircle](zero.md): A circle object centered at the origin, with a radius of zero.
