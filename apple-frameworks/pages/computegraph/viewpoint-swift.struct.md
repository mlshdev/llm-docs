> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/viewpoint-swift.struct](https://developer.apple.com/documentation/computegraph/viewpoint-swift.struct)

# Viewpoint (Swift)

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · Reality Composer Pro

Camera viewpoint parameters in 3D space.

## Declaration

```swift
struct Viewpoint
```

<a id="overview"></a>

## Overview

This structure represents a camera or observer’s position and viewing direction, with optional availability flags for each component. This allows partial viewpoint information to be represented when only position or direction is known.

## Topics

### Initializers

- [init()](viewpoint-swift.struct/init%28%29.md)
- [init(position:direction:has_position:has_direction:)](viewpoint-swift.struct/init%28position_direction_has_position_has_direction_%29.md)

### Instance Properties

- [direction](viewpoint-swift.struct/direction.md): The normalized direction vector indicating where the camera is looking, in the simulation’s coordinate system
- [has_direction](viewpoint-swift.struct/has_direction.md): Indicates whether a valid direction is available.
- [has_position](viewpoint-swift.struct/has_position.md): Indicates whether a valid position is available.
- [position](viewpoint-swift.struct/position.md): The 3D position of the camera or viewpoint, in the simulation’s coordinate system.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Geometry and simulation inputs

- [CoordinateSpace](coordinatespace.md): Simulation coordinate space, controlling how positions and orientations are stored.
- [StripOrientation](striporientation.md): An enumeration that specifies how a strip should be oriented.
- [MouseParams](mouseparams.md): Parameters describing mouse interaction in 3D space.

# Viewpoint (Objective-C)

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · Reality Composer Pro

Camera viewpoint parameters in 3D space.

## Declaration

```objectivec
struct Viewpoint;
```

<a id="overview"></a>

## Overview

This structure represents a camera or observer’s position and viewing direction, with optional availability flags for each component. This allows partial viewpoint information to be represented when only position or direction is known.

## Topics

### Instance Properties

- [direction](viewpoint-swift.struct/direction.md): The normalized direction vector indicating where the camera is looking, in the simulation’s coordinate system
- [has_direction](viewpoint-swift.struct/has_direction.md): Indicates whether a valid direction is available.
- [has_position](viewpoint-swift.struct/has_position.md): Indicates whether a valid position is available.
- [position](viewpoint-swift.struct/position.md): The 3D position of the camera or viewpoint, in the simulation’s coordinate system.

## See Also

### Geometry and simulation inputs

- [MouseParams](mouseparams.md): Parameters describing mouse interaction in 3D space.
