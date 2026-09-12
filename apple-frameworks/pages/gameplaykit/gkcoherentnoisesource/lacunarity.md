> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcoherentnoisesource/lacunarity](https://developer.apple.com/documentation/gameplaykit/gkcoherentnoisesource/lacunarity)

# lacunarity (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rate at which successive octaves of the noise function increase in frequency.

## Declaration

```swift
var lacunarity: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

Lacunarity determines the change in frequency between octaves. Smaller values result in coarser noise with more visible structure; finer values result in finer, more uniform noise. The default value is `2.0`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the size and spacing of features in generated noise.
- [octaveCount](octavecount.md): The number of octaves of the underlying noise function to use for generating noise.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.

# lacunarity (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rate at which successive octaves of the noise function increase in frequency.

## Declaration

```objectivec
@property (nonatomic) double lacunarity;
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

Lacunarity determines the change in frequency between octaves. Smaller values result in coarser noise with more visible structure; finer values result in finer, more uniform noise. The default value is `2.0`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the size and spacing of features in generated noise.
- [octaveCount](octavecount.md): The number of octaves of the underlying noise function to use for generating noise.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.
