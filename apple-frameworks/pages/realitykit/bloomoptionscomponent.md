> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomoptionscomponent](https://developer.apple.com/documentation/realitykit/bloomoptionscomponent)

# BloomOptionsComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that sets the properties for the bloom post-processing effects.

## Declaration

```swift
struct BloomOptionsComponent
```

<a id="overview"></a>

## Overview

This component has no effect without a BloomComponent in your scene.

It’s best to maintain a single BloomOptionsComponent in your scene. If more than one BloomOptionsComponent exists in your scene, one will be chosen based on proximity to the camera and depth in the entity hierarchy.

## Topics

### Configuring the bloom effect

- [strength](bloomoptionscomponent/strength.md): The intensity of the bloom effect.
- [threshold](bloomoptionscomponent/threshold.md): The brightness threshold for bloom activation.
- [blurRadius](bloomoptionscomponent/blurradius.md): The width of the bloom blur kernel as a percentage of viewport height

### Initializers

- [init()](bloomoptionscomponent/init%28%29.md): Creates a Bloom Options Component with default settings.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Bloom and tone mapping

- [BloomComponent](bloomcomponent.md): The `BloomComponent` adds a luminous glow effect around bright objects in the scene by extracting and blurring the brightest parts of the image, then combining them back with the original rendering. If scope is set to `unbounded` Bloom will be computed on the entire screen. If scope is set to `hierarchical` multiple Bloom Components can be used to opt in only the regions around certain objects for blooming.
- [ToneMappingComponent](tonemappingcomponent.md)
