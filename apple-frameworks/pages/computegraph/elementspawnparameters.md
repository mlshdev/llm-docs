> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/elementspawnparameters](https://developer.apple.com/documentation/computegraph/elementspawnparameters)

# ElementSpawnParameters

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Parameters used to configure the initial state of a particle when it’s spawned in the simulation.

## Declaration

```swift
struct ElementSpawnParameters
```

<a id="overview"></a>

## Overview

The values specified become initial values in the Initialization stage, which can read or overwrite the values.

<a id="Usage"></a>

## Usage

```swift
let params = ElementSpawnParameters(
    position: SIMD3<Float>(0, 1, 0),
    velocity: SIMD3<Float>(0, -1, 0),
    size: SIMD2<Float>(0.02, 0.02),
    color: SIMD4<Float>(1, 0.5, 0, 1),
    lifetime: 2.0
)
```

## Topics

### Initializers

- [init(position:velocity:size:color:lifetime:)](elementspawnparameters/init%28position_velocity_size_color_lifetime_%29.md): Creates a new set of particle spawn parameters.

### Instance Properties

- [color](elementspawnparameters/color.md): The initial color and alpha (transparency) of the particle.
- [lifetime](elementspawnparameters/lifetime.md): The initial lifetime of the particle in seconds.
- [position](elementspawnparameters/position.md): The initial 3D position of the particle in world space coordinates.
- [size](elementspawnparameters/size.md): The initial size of the particle as a 2D vector representing width and height.
- [velocity](elementspawnparameters/velocity.md): The initial velocity vector of the particle in world space units per second.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Elements and particles

- [ElementGrouping](elementgrouping.md): An enumeration of how elements are grouped.
- [Sorting](sorting.md): An enumeration of sorting modes.
