> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/edge](https://developer.apple.com/documentation/roomplan/capturedroom/surface/edge)

# CapturedRoom.Surface.Edge

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a single edge of a surface.

## Declaration

```swift
enum Edge
```

<a id="overview"></a>

## Overview

Each [CapturedRoom.Surface](../surface.md) instance in a captured room’s surface arrays ([doors](../doors.md), [openings](../openings.md), [walls](../walls.md), and [windows](../windows.md)) has a set ([completedEdges](completededges.md)) that contains one of each case in this enumeration.

## Topics

### Accessing edge types

- [CapturedRoom.Surface.Edge.top](edge/top.md): An edge that identifies the top of a surface.
- [CapturedRoom.Surface.Edge.bottom](edge/bottom.md): An edge that identifies the bottom of a surface.
- [CapturedRoom.Surface.Edge.left](edge/left.md): An edge that identifies the left side of a surface.
- [CapturedRoom.Surface.Edge.right](edge/right.md): An edge that identifies the right side of a surface.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shaping a surface

- [completedEdges](completededges.md): An array of edges that outline the surface.
- [curve](curve-swift.property.md): An object that represents the curve of a surface.
- [CapturedRoom.Surface.Curve](curve-swift.struct.md): An object that represents a single curve of a surface.
- [polygonCorners](polygoncorners.md): A 2D polygon that represents nonuniform wall heights and floor shapes.
