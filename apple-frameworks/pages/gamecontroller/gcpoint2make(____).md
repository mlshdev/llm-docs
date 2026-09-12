> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpoint2make(_:_:)](https://developer.apple.com/documentation/gamecontroller/gcpoint2make(_:_:))

# GCPoint2Make(\_:\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

Returns a point with the specified coordinates in a two-dimensional coordinate system.

## Declaration

```swift
func GCPoint2Make(_ x: Float, _ y: Float) -> GCPoint2
```

## Parameters

- `x`: The x-coordinate of the point.
- `y`: The y-coordinate of the point.

<a id="return-value"></a>

## Return Value

A point in a two-dimensional coordinate system.

## See Also

### Creating a point

- [init()](gcpoint2/init%28%29.md): Creates a two dimensional point with coordinates `(0, 0)`.
- [init(x:y:)](gcpoint2/init%28x_y_%29.md): Creates a two dimensional point with the given coordinates.
- [GCPoint2Zero](gcpoint2zero.md): The origin for a two dimensional point.

# GCPoint2Make (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

Returns a point with the specified coordinates in a two-dimensional coordinate system.

## Declaration

```objectivec
static GCPoint2 GCPoint2Make(float x, float y);
```

## Parameters

- `x`: The x-coordinate of the point.
- `y`: The y-coordinate of the point.

<a id="return-value"></a>

## Return Value

A point in a two-dimensional coordinate system.

## See Also

### Creating a point

- [GCPoint2Zero](gcpoint2zero.md): The origin for a two dimensional point.
