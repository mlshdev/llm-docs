> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcoherentnoisesource/octavecount](https://developer.apple.com/documentation/gameplaykit/gkcoherentnoisesource/octavecount)

# octaveCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of octaves of the underlying noise function to use for generating noise.

## Declaration

```swift
var octaveCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

This property determines the number of octaves of the noise function that the noise source combines to produce noise. A smaller number results in smoother, simpler output; larger numbers result in rougher, more complex output. The default value is `6`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the size and spacing of features in generated noise.
- [lacunarity](lacunarity.md): The rate at which successive octaves of the noise function increase in frequency.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.

# octaveCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of octaves of the underlying noise function to use for generating noise.

## Declaration

```objectivec
@property (nonatomic) NSInteger octaveCount;
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

This property determines the number of octaves of the noise function that the noise source combines to produce noise. A smaller number results in smoother, simpler output; larger numbers result in rougher, more complex output. The default value is `6`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the size and spacing of features in generated noise.
- [lacunarity](lacunarity.md): The rate at which successive octaves of the noise function increase in frequency.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.
