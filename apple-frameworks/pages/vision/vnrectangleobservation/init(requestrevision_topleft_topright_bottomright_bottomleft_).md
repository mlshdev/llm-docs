> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrectangleobservation/init(requestrevision:topleft:topright:bottomright:bottomleft:)](https://developer.apple.com/documentation/vision/vnrectangleobservation/init(requestrevision:topleft:topright:bottomright:bottomleft:))

# init(requestRevision:topLeft:topRight:bottomRight:bottomLeft:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a rectangle observation from its corner points.

## Declaration

```swift
convenience init(requestRevision: Int, topLeft: CGPoint, topRight: CGPoint, bottomRight: CGPoint, bottomLeft: CGPoint)
```

## Parameters

- `requestRevision`: The rectangle detector revision number. A higher revision indicates more recent iterations of the framework.
- `topLeft`: The upper-left corner point.
- `topRight`: The upper-right corner point.
- `bottomRight`: The lower-right corner point.
- `bottomLeft`: The lower-left corner point.

## See Also

### Creating an Observation

- [init(requestRevision:topLeft:bottomLeft:bottomRight:topRight:)](init%28requestrevision_topleft_bottomleft_bottomright_topright_%29.md): Deprecated. Creates a rectangle observation from its corner points.

# rectangleObservationWithRequestRevision:topLeft:topRight:bottomRight:bottomLeft: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a rectangle observation from its corner points.

## Declaration

```objectivec
+ (instancetype) rectangleObservationWithRequestRevision:(NSUInteger) requestRevision topLeft:(CGPoint) topLeft topRight:(CGPoint) topRight bottomRight:(CGPoint) bottomRight bottomLeft:(CGPoint) bottomLeft;
```

## Parameters

- `requestRevision`: The rectangle detector revision number. A higher revision indicates more recent iterations of the framework.
- `topLeft`: The upper-left corner point.
- `topRight`: The upper-right corner point.
- `bottomRight`: The lower-right corner point.
- `bottomLeft`: The lower-left corner point.

## See Also

### Creating an Observation

- [rectangleObservationWithRequestRevision:topLeft:bottomLeft:bottomRight:topRight:](init%28requestrevision_topleft_bottomleft_bottomright_topright_%29.md): Deprecated. Creates a rectangle observation from its corner points.
