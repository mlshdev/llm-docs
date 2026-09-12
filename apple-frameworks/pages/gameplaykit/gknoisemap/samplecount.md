> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/samplecount](https://developer.apple.com/documentation/gameplaykit/gknoisemap/samplecount)

# sampleCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The width and height of integer grid for which the noise map contains sampled noise values.

## Declaration

```swift
var sampleCount: vector_int2 { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only; you define the origin of a noise map when creating it with the [interpolatedValue(at:)](interpolatedvalue%28at_%29.md) initializer.

## See Also

### Inspecting a Noise Map

- [size](size.md): The size of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [origin](origin.md): The position of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [isSeamless](isseamless.md): A Boolean value indicating whether the noise map’s output can repeat seamlessly in all directions.

# sampleCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The width and height of integer grid for which the noise map contains sampled noise values.

## Declaration

```objectivec
@property (nonatomic, readonly) vector_int2 sampleCount;
```

<a id="Discussion"></a>

## Discussion

This property is read-only; you define the origin of a noise map when creating it with the [interpolatedValueAtPosition:](interpolatedvalue%28at_%29.md) initializer.

## See Also

### Inspecting a Noise Map

- [size](size.md): The size of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [origin](origin.md): The position of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [seamless](isseamless.md): A Boolean value indicating whether the noise map’s output can repeat seamlessly in all directions.
