> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions)

# EnvironmentResource.CreateOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A type that controls compression, sampling quality, and cubemap dimensions when creating an environment resource.

## Declaration

```swift
struct CreateOptions
```

<a id="overview"></a>

## Overview

The options provide control for balancing memory usage, quality, and processing power when creating an environment’s lighting data.

## Topics

### Creating the options

- [init(samplingQuality:specularCubeDimension:compression:)](createoptions/init%28samplingquality_specularcubedimension_compression_%29.md): Creates an environment creation options structure.

### Specifying the quality

- [EnvironmentResource.CreateOptions.SamplingQuality](createoptions/samplingquality-swift.enum.md): An object for controlling the skybox sampling quality for lighting textures.

### Accessing the option properties

- [compression](createoptions/compression.md): The compression to apply to environment textures.
- [samplingQuality](createoptions/samplingquality-swift.property.md): The skybox sampling quality for lighting textures.
- [specularCubeDimension](createoptions/specularcubedimension.md): The dimension of the computed specular cubemap for material reflections.

### Creating create options

- [init(skyboxMode:samplingQuality:specularCubeDimension:compression:)](createoptions/init%28skyboxmode_samplingquality_specularcubedimension_compression_%29.md): Creates an environment creation options structure.

### Configuring the skybox

- [skyboxMode](createoptions/skyboxmode.md): Skybox’s preservation in the environment resource.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the resource creation

- [EnvironmentResource.Compression](compression.md): The compression to apply when creating an environment resource.
