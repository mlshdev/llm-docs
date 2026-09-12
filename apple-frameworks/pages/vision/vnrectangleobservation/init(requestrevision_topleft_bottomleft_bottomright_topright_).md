> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrectangleobservation/init(requestrevision:topleft:bottomleft:bottomright:topright:)](https://developer.apple.com/documentation/vision/vnrectangleobservation/init(requestrevision:topleft:bottomleft:bottomright:topright:))

# init(requestRevision:topLeft:bottomLeft:bottomRight:topRight:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a rectangle observation from its corner points.

> Use [init(requestRevision:topLeft:topRight:bottomRight:bottomLeft:)](init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md) instead.

## Declaration

```swift
convenience init(requestRevision: Int, topLeft: CGPoint, bottomLeft: CGPoint, bottomRight: CGPoint, topRight: CGPoint)
```

## Parameters

- `requestRevision`: The rectangle detector revision number. A higher revision indicates more recent iterations of the framework.
- `topLeft`: The upper-left corner point.
- `bottomLeft`: The lower-left corner point.
- `bottomRight`: The lower-right corner point.
- `topRight`: The upper-right corner point.

## See Also

### Creating an Observation

- [init(requestRevision:topLeft:topRight:bottomRight:bottomLeft:)](init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md): Creates a rectangle observation from its corner points.

# rectangleObservationWithRequestRevision:topLeft:bottomLeft:bottomRight:topRight: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a rectangle observation from its corner points.

> Use [rectangleObservationWithRequestRevision:topLeft:topRight:bottomRight:bottomLeft:](init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md) instead.

## Declaration

```objectivec
+ (instancetype) rectangleObservationWithRequestRevision:(NSUInteger) requestRevision topLeft:(CGPoint) topLeft bottomLeft:(CGPoint) bottomLeft bottomRight:(CGPoint) bottomRight topRight:(CGPoint) topRight;
```

## Parameters

- `requestRevision`: The rectangle detector revision number. A higher revision indicates more recent iterations of the framework.
- `topLeft`: The upper-left corner point.
- `bottomLeft`: The lower-left corner point.
- `bottomRight`: The lower-right corner point.
- `topRight`: The upper-right corner point.

## See Also

### Creating an Observation

- [rectangleObservationWithRequestRevision:topLeft:topRight:bottomRight:bottomLeft:](init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md): Creates a rectangle observation from its corner points.
