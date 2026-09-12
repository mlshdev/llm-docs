> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle/init(center:radius:)](https://developer.apple.com/documentation/vision/vncircle/init(center:radius:))

# init(center:radius:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a circle with the specified center and radius.

## Declaration

```swift
init(center: VNPoint, radius: Double)
```

## Parameters

- `center`: The circle center.
- `radius`: The circle radius.

## See Also

### Creating a Circle

- [init(center:diameter:)](init%28center_diameter_%29.md): Creates a circle with the specified center and diameter.
- [init(coder:)](init%28coder_%29.md)
- [zero](zero.md): A circle object centered at the origin, with a radius of zero.

# initWithCenter:radius: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a circle with the specified center and radius.

## Declaration

```objectivec
- (instancetype) initWithCenter:(VNPoint *) center radius:(double) radius;
```

## Parameters

- `center`: The circle center.
- `radius`: The circle radius.

## See Also

### Creating a Circle

- [initWithCenter:diameter:](init%28center_diameter_%29.md): Creates a circle with the specified center and diameter.
- [zeroCircle](zero.md): A circle object centered at the origin, with a radius of zero.
