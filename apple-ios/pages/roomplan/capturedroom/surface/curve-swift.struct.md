> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/curve-swift.struct](https://developer.apple.com/documentation/roomplan/capturedroom/surface/curve-swift.struct)

# CapturedRoom.Surface.Curve

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a single curve of a surface.

## Declaration

```swift
struct Curve
```

<a id="overview"></a>

## Overview

Each [CapturedRoom.Surface](../surface.md) instance in a captured room’s surface arrays ([doors](../doors.md), [openings](../openings.md), [walls](../walls.md), and [windows](../windows.md)) that models a curved real-world surface contains an optional property ([curve](curve-swift.property.md)) of this type.

## Topics

### Measuring a curve

- [startAngle](curve-swift.struct/startangle.md): An angle that begins the curve.
- [endAngle](curve-swift.struct/endangle.md): The angle at the end of the curve.
- [radius](curve-swift.struct/radius.md): The radius of the curve.

### Instance Properties

- [center](curve-swift.struct/center.md): Center of the curve, in local coordinates. Corresponds to xz center coordinates

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shaping a surface

- [completedEdges](completededges.md): An array of edges that outline the surface.
- [CapturedRoom.Surface.Edge](edge.md): An object that represents a single edge of a surface.
- [curve](curve-swift.property.md): An object that represents the curve of a surface.
- [polygonCorners](polygoncorners.md): A 2D polygon that represents nonuniform wall heights and floor shapes.
