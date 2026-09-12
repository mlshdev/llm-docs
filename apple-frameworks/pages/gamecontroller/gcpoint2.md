> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpoint2](https://developer.apple.com/documentation/gamecontroller/gcpoint2)

# GCPoint2 (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A structure that represents a normalized point in a two-dimensional coordinate system.

## Declaration

```swift
struct GCPoint2
```

## Topics

### Creating a point

- [init()](gcpoint2/init%28%29.md): Creates a two dimensional point with coordinates `(0, 0)`.
- [init(x:y:)](gcpoint2/init%28x_y_%29.md): Creates a two dimensional point with the given coordinates.
- [GCPoint2Make(\_:\_:)](gcpoint2make%28____%29.md): Returns a point with the specified coordinates in a two-dimensional coordinate system.
- [GCPoint2Zero](gcpoint2zero.md): The origin for a two dimensional point.

### Accessing coordinates

- [x](gcpoint2/x.md): The x-coordinate for the point.
- [y](gcpoint2/y.md): The y-coordinate for the point.

### Comparing and converting points

- [GCPoint2Equal(\_:\_:)](gcpoint2equal%28____%29.md): Returns whether two points are equal.
- [NSStringFromGCPoint2(\_:)](nsstringfromgcpoint2%28__%29.md): Returns a string representation of a point.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting the value

- [value](gcaxis2dinput/value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](gcaxis2dinput/valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](gcaxis2dinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxis2dinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

# GCPoint2 (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A structure that represents a normalized point in a two-dimensional coordinate system.

## Declaration

```objectivec
struct GCPoint2;
```

## Topics

### Creating a point

- [GCPoint2Make](gcpoint2make%28____%29.md): Returns a point with the specified coordinates in a two-dimensional coordinate system.
- [GCPoint2Zero](gcpoint2zero.md): The origin for a two dimensional point.

### Accessing coordinates

- [x](gcpoint2/x.md): The x-coordinate for the point.
- [y](gcpoint2/y.md): The y-coordinate for the point.

### Comparing and converting points

- [GCPoint2Equal](gcpoint2equal%28____%29.md): Returns whether two points are equal.
- [NSStringFromGCPoint2](nsstringfromgcpoint2%28__%29.md): Returns a string representation of a point.

## See Also

### Getting the value

- [value](gcaxis2dinput/value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](gcaxis2dinput/valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](gcaxis2dinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxis2dinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.
