> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkperlinnoisesource/persistence](https://developer.apple.com/documentation/gameplaykit/gkperlinnoisesource/persistence)

# persistence (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rate at which successive octaves of the noise function decrease in amplitude.

## Declaration

```swift
var persistence: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

Persistence determines the change in amplitude between octaves. Smaller values result in smoother noise; larger values increase roughness. The default value is `0.5`.

# persistence (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rate at which successive octaves of the noise function decrease in amplitude.

## Declaration

```objectivec
@property (nonatomic) double persistence;
```

<a id="Discussion"></a>

## Discussion

Coherent noise is composed from several applications of a pseudorandom function. Each successive application, or *octave*, increases in frequency and decreases in amplitude relative to the previous octave. This combination of many octaves produces the fractal appearance that makes coherent noise resemble natural phenomena like clouds, stone, and water.

Persistence determines the change in amplitude between octaves. Smaller values result in smoother noise; larger values increase roughness. The default value is `0.5`.
