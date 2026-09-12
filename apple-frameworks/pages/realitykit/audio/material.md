> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/material](https://developer.apple.com/documentation/realitykit/audio/material)

# Audio.Material

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that describes the acoustic characteristics of a surface.

## Declaration

```swift
struct Material
```

<a id="overview"></a>

## Overview

An audio material defines how a surface absorbs and scatters sound energy across frequency bands. Use preset materials for common real-world surfaces, or create custom materials from raw absorption and scattering coefficients.

```swift
// Use a preset material:
let walls: Audio.Material = .concrete

// Create a custom material:
let custom = Audio.Material(
    absorption: .init([0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10]),
    scattering: .init([0.10, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01])
)

// Modify a preset material:
let thickCarpet: Audio.Material = .carpet.scalingAbsorption { frequency in
    frequency > 1000 ? 0.5 : .zero
}
```

## Topics

### Creating a material

- [init(name:absorption:scattering:)](material/init%28name_absorption_scattering_%29.md): Creates an audio material from absorption and scattering data.

### Using hard surface materials

- [concrete](material/concrete.md): A material that simulates the acoustic properties of concrete.
- [brick](material/brick.md): A material that simulates the acoustic properties of brick.
- [glass](material/glass.md): A material that simulates the acoustic properties of glass.
- [metal](material/metal.md): A material that simulates the acoustic properties of metal.
- [tile](material/tile.md): A material that simulates the acoustic properties of tile.
- [marble](material/marble.md): A material that simulates the acoustic properties of marble.
- [wood](material/wood.md): A material that simulates the acoustic properties of wood.
- [parquet](material/parquet.md): A material that simulates the acoustic properties of parquet flooring.
- [dryWall](material/drywall.md): A material that simulates the acoustic properties of drywall.
- [plaster](material/plaster.md): A material that simulates the acoustic properties of plaster.

### Using soft furnishing materials

- [carpet](material/carpet.md): A material that simulates the acoustic properties of carpet.
- [curtain](material/curtain.md): A material that simulates the acoustic properties of a curtain.
- [mattress](material/mattress.md): A material that simulates the acoustic properties of a mattress.
- [seatingUpholstered](material/seatingupholstered.md): A material that simulates the acoustic properties of upholstered seating.
- [seatingHard](material/seatinghard.md): A material that simulates the acoustic properties of hard seating.

### Using natural surface materials

- [water](material/water.md): A material that simulates the acoustic properties of water.
- [ice](material/ice.md): A material that simulates the acoustic properties of ice.
- [snow](material/snow.md): A material that simulates the acoustic properties of snow.
- [sand](material/sand.md): A material that simulates the acoustic properties of sand.
- [soil](material/soil.md): A material that simulates the acoustic properties of soil.
- [gravel](material/gravel.md): A material that simulates the acoustic properties of gravel.
- [trees](material/trees.md): A material that simulates the acoustic properties of trees.

### Adjusting acoustic properties

- [scalingAbsorption(by:)](material/scalingabsorption%28by_%29.md): Scale the absorption data by a frequency-dependent scalar value between -1 and 1.
- [scalingScattering(by:)](material/scalingscattering%28by_%29.md): Scale the scattering data by a frequency-dependent scalar value between -1 and 1.

### Instance Properties

- [name](material/name.md): The name of the audio material.

### Instance Methods

- [absorption(\_:)](material/absorption%28__%29.md): Creates a new audio material with the provided absorption data.
- [scattering(\_:)](material/scattering%28__%29.md): Creates a new audio material with the provided scattering data.

### Type Properties

- [default](material/default.md): Default audio material.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining acoustic properties

- [Audio.Absorption](absorption.md): An object that holds a set of absorption data.
- [Audio.Scattering](scattering.md): An object that holds a set of scattering data.
