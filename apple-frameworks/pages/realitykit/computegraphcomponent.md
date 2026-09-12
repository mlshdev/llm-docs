> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent](https://developer.apple.com/documentation/realitykit/computegraphcomponent)

# ComputeGraphComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that drives a compute graph–based particle simulation on an entity.

## Declaration

```swift
struct ComputeGraphComponent
```

<a id="overview"></a>

## Overview

Attach this component to any `Entity` to with a loaded `ComputeGraphResource` and execute it each frame using Metal compute pipelines. The system automatically creates and manages child entities for each graph output, each carrying its own `ModelComponent` and material.

```swift
var component = ComputeGraphComponent(resource: resource)
entity.components.set(component)
```

## Topics

### Structures

- [ComputeGraphComponent.UniformHandle](computegraphcomponent/uniformhandle.md)

### Initializers

- [init()](computegraphcomponent/init%28%29.md): Creates a `ComputeGraphComponent` with no resource attached.
- [init(resource:)](computegraphcomponent/init%28resource_%29.md): Creates a `ComputeGraphComponent` and immediately attaches the given resource.

### Instance Properties

- [materials](computegraphcomponent/materials.md): Per-output material overrides, keyed by output node identifier.
- [models](computegraphcomponent/models.md): Per-output model component overrides, keyed by output node identifier.
- [pipelines](computegraphcomponent/pipelines.md): The compiled pipelines used to execute the simulation.
- [randomSeed](computegraphcomponent/randomseed.md): An optional fixed random seed for the simulation.
- [resource](computegraphcomponent/resource.md): The compute graph resource that defines the simulation.
- [simulationRate](computegraphcomponent/simulationrate.md): The rate at which the simulation updates.
- [state](computegraphcomponent/state.md): The current playback state of the simulation.

### Instance Methods

- [fastForward()](computegraphcomponent/fastforward%28%29.md): Fast-forwards the simulation using the default prewarm behavior.
- [fastForward(stepCount:stepDeltaTime:)](computegraphcomponent/fastforward%28stepcount_stepdeltatime_%29.md): Advances the particle simulation by multiple steps in a single operation.
- [findBufferIndex(port:)](computegraphcomponent/findbufferindex%28port_%29.md)
- [firstBufferIndex(type:)](computegraphcomponent/firstbufferindex%28type_%29.md)
- [isOutputEnabled(\_:)](computegraphcomponent/isoutputenabled%28__%29.md): Reads the enabled state of an output identified by ID
- [pause()](computegraphcomponent/pause%28%29.md): Pauses the simulation, freezing it at its current state.
- [play()](computegraphcomponent/play%28%29.md): Resumes the simulation from a paused or stepped state.
- [replaceUniforms(\_:)](computegraphcomponent/replaceuniforms%28__%29.md): Replaces the entire uniform buffer with the given data.
- [setBuffer(\_:bufferOffset:elementCount:at:)](computegraphcomponent/setbuffer%28__bufferoffset_elementcount_at_%29.md): Binds a Metal buffer to a parameter.
- [setOutputEnabled(\_:enabled:)](computegraphcomponent/setoutputenabled%28__enabled_%29.md): Sets the enable state of an output identified by ID
- [setTexture(\_:at:)](computegraphcomponent/settexture%28__at_%29.md): Binds a Metal texture to a parameter at the given index.
- [setTexture(\_:port:)](computegraphcomponent/settexture%28__port_%29.md): Binds a Metal texture to a parameter identified by its port address.
- [setUniformData(\_:for:)](computegraphcomponent/setuniformdata%28__for_%29.md): Sets the value of a uniform to raw bytes.
- [setUniformValue(\_:for:)](computegraphcomponent/setuniformvalue%28__for_%29.md): Sets the value of a uniform to a `BitwiseCopyable` typed value.
- [setUniformValue(\_:named:)](computegraphcomponent/setuniformvalue%28__named_%29.md): Sets the value of a named uniform to a `BitwiseCopyable` typed value.
- [spawn(element:in:)](computegraphcomponent/spawn%28element_in_%29.md): Spawns a new element in the particle simulation.
- [spawn(elements:in:)](computegraphcomponent/spawn%28elements_in_%29.md): Spawns elements into the particle simulation.
- [step()](computegraphcomponent/step%28%29.md): Advances the simulation by a single frame, then pauses.
- [uniformHandle(named:)](computegraphcomponent/uniformhandle%28named_%29.md): Returns a handle for the named uniform.

### Enumerations

- [ComputeGraphComponent.SimulationState](computegraphcomponent/simulationstate.md): The playback state of a compute graph simulation.

## Relationships

### Conforms To

- [Component](component.md)
