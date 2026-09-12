> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/qualitymode](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/qualitymode)

# SpotLightComponent.Shadow.QualityMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS · visionOS 27.0+

Constants that select the shadow-filtering algorithm a spotlight uses.

## Declaration

```swift
struct QualityMode
```

<a id="overview"></a>

## Overview

[low](qualitymode/low.md) produces a hard-edged shadow with a uniform width. The shadow ignores [lightSize](lightsize.md) and the distance between the light, the shadow-casting geometry, and the receiving surface.

[medium](qualitymode/medium.md) and [high](qualitymode/high.md) produce *soft* shadows whose penumbra widens as the receiving surface moves farther from the caster, approximating the appearance of an area light. [high](qualitymode/high.md) takes more samples per pixel than [medium](qualitymode/medium.md), producing a smoother penumbra at greater GPU cost.

## Topics

### Choosing a quality level

- [low](qualitymode/low.md)
- [medium](qualitymode/medium.md)

### Initializers

- [init(rawValue:)](qualitymode/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](qualitymode/rawvalue.md)

### Type Properties

- [high](qualitymode/high.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring shadow quality

- [quality](quality.md): The shadow-filtering algorithm this light uses.
- [lightSize](lightsize.md): The radius of the spotlight’s emitting surface, in meters.
