> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface](https://developer.apple.com/documentation/roomplan/capturedroom/surface)

# CapturedRoom.Surface

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A 2D area in a room that the framework identifies as a surface.

## Declaration

```swift
struct Surface
```

<a id="overview"></a>

## Overview

A captured room ([CapturedRoom](../capturedroom.md)) contains an arrays of surfaces that it identifies in a scan, such as its [doors](doors.md), [openings](openings.md), [walls](walls.md), and [windows](windows.md).

## Topics

### Creating a surface

- [init(from:)](surface/init%28from_%29.md): Creates a surface by deserializing the specified decoder.

### Identifying a surface

- [identifier](surface/identifier.md): A unique alphanumeric value that the framework assigns the surface.
- [parentIdentifier](surface/parentidentifier.md): A unique alphanumeric value that identifies a surface’s parent surface.
- [category](surface/category-swift.property.md): A classification that the captured room assigns the surface.
- [CapturedRoom.Surface.Category](surface/category-swift.enum.md): Classifications of a surface in a captured room.
- [confidence](surface/confidence.md): A level of certainty in the surface’s category.

### Positioning and sizing a surface

- [transform](surface/transform.md): A matrix that defines the surface’s position and orientation in the scene.
- [dimensions](surface/dimensions.md): A bounding box that contains the surface.
- [story](surface/story.md): indicator for which story, level, or floor

### Shaping a surface

- [completedEdges](surface/completededges.md): An array of edges that outline the surface.
- [CapturedRoom.Surface.Edge](surface/edge.md): An object that represents a single edge of a surface.
- [curve](surface/curve-swift.property.md): An object that represents the curve of a surface.
- [CapturedRoom.Surface.Curve](surface/curve-swift.struct.md): An object that represents a single curve of a surface.
- [polygonCorners](surface/polygoncorners.md): A 2D polygon that represents nonuniform wall heights and floor shapes.

### Serializing a surface

- [encode(to:)](surface/encode%28to_%29.md): Serializes a surface to the specified encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting room details

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the room.
- [story](story.md): The story, floor number, or level on which the captured room resides within a larger structure.
- [floors](floors.md): An array of floors that the framework identifies during a scan.
- [doors](doors.md): An array of doors that the framework identifies during a scan.
- [objects](objects.md): An array of objects that the framework identifies during a scan.
- [CapturedRoom.Object](object.md): A 3D area in a room that the framework identifies as an object.
- [openings](openings.md): An array of openings that the framework identifies during a scan.
- [walls](walls.md): An array of walls that the framework identifies during a scan.
- [windows](windows.md): An array of windows that the framework identifies during a scan.
- [sections](sections.md): One or more room types that the framework observes in the room.
- [CapturedRoom.Section](section.md): An object that identifies a particular area in a captured room in relation to common types of room areas in a building.
- [CapturedRoom.Confidence](confidence.md): Levels of certainty in the classification of a particular detail in a scan.
- [version](version.md): A version number for the captured room.
