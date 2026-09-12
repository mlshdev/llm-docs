> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/mouseparams](https://developer.apple.com/documentation/computegraph/mouseparams)

# MouseParams (Swift)

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · Reality Composer Pro

Parameters describing mouse interaction in 3D space.

## Declaration

```swift
struct MouseParams
```

<a id="overview"></a>

## Overview

This structure captures both the position and direction of a mouse cursor projected into 3D coordinates, commonly used for ray casting or spatial interactions.

## Topics

### Initializers

- [init()](mouseparams/init%28%29.md)
- [init(position:direction:has_value:)](mouseparams/init%28position_direction_has_value_%29.md)

### Instance Properties

- [direction](mouseparams/direction.md): The normalized direction vector of the mouse ray, converted to the simulation’s coordinate system.
- [has_value](mouseparams/has_value.md): Indicates whether valid mouse parameters are available.
- [position](mouseparams/position.md): The 3D position of the mouse cursor in local space, converted to the simulation’s coordinate system.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Geometry and simulation inputs

- [CoordinateSpace](coordinatespace.md): Simulation coordinate space, controlling how positions and orientations are stored.
- [StripOrientation](striporientation.md): An enumeration that specifies how a strip should be oriented.
- [Viewpoint](viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.

# MouseParams (Objective-C)

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · Reality Composer Pro

Parameters describing mouse interaction in 3D space.

## Declaration

```objectivec
struct MouseParams;
```

<a id="overview"></a>

## Overview

This structure captures both the position and direction of a mouse cursor projected into 3D coordinates, commonly used for ray casting or spatial interactions.

## Topics

### Instance Properties

- [direction](mouseparams/direction.md): The normalized direction vector of the mouse ray, converted to the simulation’s coordinate system.
- [has_value](mouseparams/has_value.md): Indicates whether valid mouse parameters are available.
- [position](mouseparams/position.md): The 3D position of the mouse cursor in local space, converted to the simulation’s coordinate system.

## See Also

### Geometry and simulation inputs

- [Viewpoint](viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
