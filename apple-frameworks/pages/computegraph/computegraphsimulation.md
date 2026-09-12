> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation](https://developer.apple.com/documentation/computegraph/computegraphsimulation)

# ComputeGraphSimulation

**Framework:** Compute Graph  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A simulation of particles, which use a single pipeline.

## Declaration

```swift
final class ComputeGraphSimulation
```

<a id="overview"></a>

## Overview

This class is independent of the output, which makes for simpler testing.

## Topics

### Structures

- [ComputeGraphSimulation.AdvanceParams](computegraphsimulation/advanceparams.md): Parameters for advancing a compute graph simulation by one time step.
- [ComputeGraphSimulation.SimulationRate](computegraphsimulation/simulationrate-swift.struct.md): Specifies the rate and mode for simulation.

### Initializers

- [init(pipelines:)](computegraphsimulation/init%28pipelines_%29.md): Initialize a ComputeGraphSimulation for the given pipelines, or a default pipeline if not specified.
- [init(pipelines:commandQueue:)](computegraphsimulation/init%28pipelines_commandqueue_%29.md): Initialize a ComputeGraphSimulation for the given pipelines

### Instance Properties

- [commandQueue](computegraphsimulation/commandqueue.md)
- [graphUniforms](computegraphsimulation/graphuniforms.md): Returns a read-only copy of the uniforms buffer.
- [pipelines](computegraphsimulation/pipelines.md)
- [simulationRate](computegraphsimulation/simulationrate-swift.property.md): Specifies the current simulation rate.

### Instance Methods

- [addUserResource(\_:)](computegraphsimulation/adduserresource%28__%29.md): Registers a resource for residency on all command encoders used by this simulation.
- [advance(\_:)](computegraphsimulation/advance%28__%29.md): Advances the simulation by one time step, encoding all simulation stage dispatches into the command buffer and encoder provided by `params`.
- [buffer(at:)](computegraphsimulation/buffer%28at_%29.md)
- [fastForward()](computegraphsimulation/fastforward%28%29.md)
- [fastForward(stepCount:stepDeltaTime:)](computegraphsimulation/fastforward%28stepcount_stepdeltatime_%29.md): Advances the particle simulation by multiple steps in a single operation.
- [isOutputEnabled(\_:)](computegraphsimulation/isoutputenabled%28__%29.md): Returns whether the specified output is currently enabled for simulation.
- [modifyUniforms(\_:)](computegraphsimulation/modifyuniforms%28__%29.md): Provides read/write access to the entire uniforms buffer for CPU access.
- [reset(encoder:)](computegraphsimulation/reset%28encoder_%29.md): Resets the simulation to its initial state, clearing all live elements and accumulated time.
- [resetRandomSeeds(using:)](computegraphsimulation/resetrandomseeds%28using_%29.md): Resets random seeds using the provided randomness function.
- [setBuffer(\_:bufferOffset:at:)](computegraphsimulation/setbuffer%28__bufferoffset_at_%29-772ch.md)
- [setBuffer(\_:bufferOffset:at:)](computegraphsimulation/setbuffer%28__bufferoffset_at_%29-bmmd.md)
- [setBuffer(\_:bufferOffset:elementCount:at:)](computegraphsimulation/setbuffer%28__bufferoffset_elementcount_at_%29.md)
- [setBuffers(\_:bufferOffsets:)](computegraphsimulation/setbuffers%28__bufferoffsets_%29.md)
- [setOutputEnabled(\_:enabled:)](computegraphsimulation/setoutputenabled%28__enabled_%29.md): Enables or disables execution of the provided output stage, without disabling the system it represents.
- [setTexture(\_:at:)](computegraphsimulation/settexture%28__at_%29.md): Binds a Metal texture to the texture slot at the given index.
- [setTextures(\_:)](computegraphsimulation/settextures%28__%29.md)
- [setUniform(\_:named:)](computegraphsimulation/setuniform%28__named_%29.md): Finds the named uniform and sets it to the given BitwiseCopyable value.
- [setUniformData(\_:at:)](computegraphsimulation/setuniformdata%28__at_%29.md)
- [setUniformValue(\_:at:)](computegraphsimulation/setuniformvalue%28__at_%29.md): Copies the contents of `value` into the location specified by `relocation`
- [setUserResources(\_:)](computegraphsimulation/setuserresources%28__%29.md): Sets additional resources for residency on all command buffers used by this simulation, replacing any previously added resources.
- [spawn(elements:in:using:)](computegraphsimulation/spawn%28elements_in_using_%29.md): Spawns new elements into the simulation with the given initial parameters.
- [texture(at:)](computegraphsimulation/texture%28at_%29.md)
