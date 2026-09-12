> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/numparticlestoemit](https://developer.apple.com/documentation/spritekit/skemitternode/numparticlestoemit)

# numParticlesToEmit (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of particles the emitter should emit before stopping.

## Declaration

```swift
var numParticlesToEmit: Int { get set }
```

## Mentioned In

- [Creating Particle Effects](../creating-particle-effects.md)

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that emitter creates an endless stream of particles. If a non-zero value is provided, then the emitter stops generating particles after it has created the specified number of particles.

## See Also

### Controlling When Particles Are Created

- [advanceSimulationTime(\_:)](advancesimulationtime%28__%29.md): Advances the emitter particle simulation.
- [resetSimulation()](resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](particlebirthrate.md): The rate at which new particles are created.

# numParticlesToEmit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of particles the emitter should emit before stopping.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numParticlesToEmit;
```

## Mentioned In

- [Creating Particle Effects](../creating-particle-effects.md)

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that emitter creates an endless stream of particles. If a non-zero value is provided, then the emitter stops generating particles after it has created the specified number of particles.

## See Also

### Controlling When Particles Are Created

- [advanceSimulationTime:](advancesimulationtime%28__%29.md): Advances the emitter particle simulation.
- [resetSimulation](resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](particlebirthrate.md): The rate at which new particles are created.
