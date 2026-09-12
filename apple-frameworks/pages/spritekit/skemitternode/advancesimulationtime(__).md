> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/advancesimulationtime(_:)](https://developer.apple.com/documentation/spritekit/skemitternode/advancesimulationtime(_:))

# advanceSimulationTime(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances the emitter particle simulation.

## Declaration

```swift
func advanceSimulationTime(_ sec: TimeInterval)
```

## Parameters

- `sec`: The number of seconds to simulate.

<a id="Discussion"></a>

## Discussion

Once added to a scene, an emitter node automatically creates new particles in new animation frames. This method allows you to artificially advance a running emitter’s simulation, causing it to generate new particles and advance any existing particles. The most common use for this method is to prepopulate an emitter node with particles after it is first added to a scene.

If an emitter is paused, either directly or by one of its parent nodes being paused, [advanceSimulationTime(\_:)](advancesimulationtime%28__%29.md) has no effect. Listing 1 shows how to advance an emitter object while it is paused, by temporarily toggling its [isPaused](../sknode/ispaused.md) property while advancing the simulation.

Listing 1. Temporarily unpausing an emitter to advance simulation time

```swift
let emitter = SKEmitterNode()
let emitterPaused = emitter.isPaused
if emitterPaused {
    emitter.isPaused = false
}
emitter.advanceSimulationTime(5)
if emitterPaused {
    emitter.isPaused = true
}
```

Note that the [isPaused](../sknode/ispaused.md) property is inherited from a node’s parents, so even if the emitter hasn’t been explicitly paused but, for example, the scene has, this code will still work.

## See Also

### Controlling When Particles Are Created

- [resetSimulation()](resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](particlebirthrate.md): The rate at which new particles are created.
- [numParticlesToEmit](numparticlestoemit.md): The number of particles the emitter should emit before stopping.

# advanceSimulationTime: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Advances the emitter particle simulation.

## Declaration

```objectivec
- (void) advanceSimulationTime:(NSTimeInterval) sec;
```

## Parameters

- `sec`: The number of seconds to simulate.

<a id="Discussion"></a>

## Discussion

Once added to a scene, an emitter node automatically creates new particles in new animation frames. This method allows you to artificially advance a running emitter’s simulation, causing it to generate new particles and advance any existing particles. The most common use for this method is to prepopulate an emitter node with particles after it is first added to a scene.

If an emitter is paused, either directly or by one of its parent nodes being paused, [advanceSimulationTime:](advancesimulationtime%28__%29.md) has no effect. Listing 1 shows how to advance an emitter object while it is paused, by temporarily toggling its [paused](../sknode/ispaused.md) property while advancing the simulation.

Listing 1. Temporarily unpausing an emitter to advance simulation time

```swift
let emitter = SKEmitterNode()
let emitterPaused = emitter.isPaused
if emitterPaused {
    emitter.isPaused = false
}
emitter.advanceSimulationTime(5)
if emitterPaused {
    emitter.isPaused = true
}
```

Note that the [paused](../sknode/ispaused.md) property is inherited from a node’s parents, so even if the emitter hasn’t been explicitly paused but, for example, the scene has, this code will still work.

## See Also

### Controlling When Particles Are Created

- [resetSimulation](resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](particlebirthrate.md): The rate at which new particles are created.
- [numParticlesToEmit](numparticlestoemit.md): The number of particles the emitter should emit before stopping.
