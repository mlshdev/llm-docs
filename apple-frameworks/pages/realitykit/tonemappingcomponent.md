> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/tonemappingcomponent](https://developer.apple.com/documentation/realitykit/tonemappingcomponent)

# ToneMappingComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct ToneMappingComponent
```

## Topics

### Creating a tone mapping component

- [init(exposure:toeStrength:toeLength:shoulderStrength:shoulderLength:shoulderAngle:)](tonemappingcomponent/init%28exposure_toestrength_toelength_shoulderstrength_shoulderlength_shoulderangle_%29.md): Initializes a `ToneMappingComponent` with the specified parameters. Values outside of their respective ranges are clamped.

### Configuring the tone curve

- [exposure](tonemappingcomponent/exposure.md): In F-stops
- [toeStrength](tonemappingcomponent/toestrength.md): As a ratio, clamped to \[0.0, 1.0\]
- [toeLength](tonemappingcomponent/toelength.md): As a ratio, clamped to \[0.0, 1.0\], where 1.0 means 50% of white point
- [shoulderStrength](tonemappingcomponent/shoulderstrength.md): In Fstops, clamped to \[0.0, 10.0\]
- [shoulderLength](tonemappingcomponent/shoulderlength.md): As a ratio, clamped to \[0.0, 1.0\]
- [shoulderAngle](tonemappingcomponent/shoulderangle.md): As a ratio, clamped to \[0.0, 1.0\]

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Bloom and tone mapping

- [BloomComponent](bloomcomponent.md): The `BloomComponent` adds a luminous glow effect around bright objects in the scene by extracting and blurring the brightest parts of the image, then combining them back with the original rendering. If scope is set to `unbounded` Bloom will be computed on the entire screen. If scope is set to `hierarchical` multiple Bloom Components can be used to opt in only the regions around certain objects for blooming.
- [BloomOptionsComponent](bloomoptionscomponent.md): A component that sets the properties for the bloom post-processing effects.
