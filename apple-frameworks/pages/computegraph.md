> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph

# Compute Graph (Swift)

**Framework:** Compute Graph  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro 3.0+

Build and run custom particle effects and compute simulations for RealityKit using a programmable node graph.

<a id="Overview"></a>

## Overview

Compute Graph is a node-based framework for building particle simulations and general-purpose GPU compute graphs in [RealityKit](realitykit.md). Where [ShaderGraph](https://developer.apple.com/documentation/shadergraph) lets you build material appearance through a node-based visual editor, Compute Graph provides the same graph-driven, connection-based authoring for simulation behavior. Use Compute Graph when you build tools or editors that need fine-grained, per-stage control over how simulations execute on the GPU. Reality Composer Pro uses this framework to author and preview particle systems for RealityKit scenes.

The Swift API centers on a three-step compilation pipeline. Describe a simulation as a [ComputeNodeGraph](computegraph/computenodegraph.md), a directed graph of typed nodes and edges. Then produce a [ComputeNodeGraph.Assembly](computegraph/computenodegraph/assembly.md) from the graph, which resolves the buffer, uniform, and texture layout the simulation requires. Compile that assembly into [ComputeNodeGraph.Pipelines](computegraph/computenodegraph/pipelines.md) to produce GPU shader code; a single set of pipelines can back multiple [ComputeGraphSimulation](computegraph/computegraphsimulation.md) instances running concurrently. Supply custom Metal Shading Language functions through a [ComputeNodeGraph.Library](computegraph/computenodegraph/library.md) alongside the framework’s built-in node namespaces.

At runtime, [ComputeGraphSimulation](computegraph/computegraphsimulation.md) drives GPU execution. Call [advance(\_:)](computegraph/computegraphsimulation/advance%28__%29.md) each frame, passing a [ComputeGraphSimulation.AdvanceParams](computegraph/computegraphsimulation/advanceparams.md) that carries the time delta, a Metal command buffer, a compute encoder, and optional world-space transforms. To inject elements programmatically, call [spawn(elements:in:using:)](computegraph/computegraphsimulation/spawn%28elements_in_using_%29.md) with [ElementSpawnParameters](computegraph/elementspawnparameters.md) values that set each element’s initial position, velocity, size, color, and lifetime.

## Topics

### Graph definition and assembly

- [ComputeNodeGraph](computegraph/computenodegraph.md)
- [ComputeNodeGraph.Assembly](computegraph/computenodegraph/assembly.md): Fully assembled configuration of compute graph nodes.
- [ComputeNodeGraph.Pipelines](computegraph/computenodegraph/pipelines.md): Fully-compiled shaders for a compute graph.
- [ComputeNodeGraph.PipelinesDescriptor](computegraph/computenodegraph/pipelinesdescriptor.md): Specifies the configuration used to compile a set of compute pipelines for a compute graph effect.
- [ComputeNodeGraph.NodeDefinition](computegraph/computenodegraph/nodedefinition.md)
- [ComputeNodeGraph.Library](computegraph/computenodegraph/library.md): A class defining a library of node definitions that can be added to a ComputeNodeGraph
- [ComputeNodeGraph.LibraryReference](computegraph/computenodegraph/libraryreference.md): A Metal library and an optional bundle identifier that locates shader functions.

### Node parameters and connections

- [PortReference](computegraph/portreference.md): A reference to another group’s values.
- [BinaryOperation](computegraph/binaryoperation.md): An enumeration of binary operations.
- [UnaryOperation](computegraph/unaryoperation.md): An enumeration of single-operand operations.
- [StandardLibraryFunction](computegraph/standardlibraryfunction.md)

### Simulation-stage nodes

- [element](computegraph/element.md): A set of nodes for reading and writing the current element within a particle simulation.
- [emitter](computegraph/emitter.md): A set of nodes for the emission stage that control how often and how many elements a simulation spawns.
- [initialize](computegraph/initialize.md): A set of nodes for the initialization stage that set an element’s starting state.
- [module](computegraph/module.md): A set of nodes that mutate per-particle state, including position, velocity, color, size, and lifetime.
- [output](computegraph/output.md): A set of nodes for the output stage that adjust an element’s appearance without modifying its underlying state.
- [force](computegraph/force.md): A set of nodes that apply physics forces to particles, including gravity, drag, noise, and twist.

### Utility nodes

- [graph](computegraph/graph.md): A set of nodes that provide graph-wide information, such as time and coordinate-space transforms, usable in any stage.
- [group](computegraph/group.md): A set of nodes for querying the group of the current particle. Available only when the simulation uses a grouped or strips element grouping.
- [texture](computegraph/texture.md): A set of nodes for the texture stage that sample and generate texture data.
- [random](computegraph/random.md): A set of nodes that generate pseudo-random scalars and vectors.
- [matrix4x4f](computegraph/matrix4x4f.md): A set of nodes that transform positions and directions with single-precision 4×4 matrices.
- [matrix4x4h](computegraph/matrix4x4h.md): A set of nodes that transform positions and directions with half-precision 4×4 matrices.
- [viewpoint](computegraph/viewpoint-swift.func.md): Returns the current viewpoint, if one is provided.
- [element_integrate](computegraph/element_integrate.md)
- [texture_sample](computegraph/texture_sample.md)
- [texture_sample1d](computegraph/texture_sample1d.md)
- [orient_to_velocity](computegraph/orient_to_velocity.md): Orient the particle by setting its `axisY` to the velocity’s current direction.
- [gridDebugCells](computegraph/griddebugcells.md)
- [gridFromPoints](computegraph/gridfrompoints.md)
- [spawn_demo](computegraph/spawn_demo.md)

### Running a simulation

- [ComputeGraphSimulation](computegraph/computegraphsimulation.md): A simulation of particles, which use a single pipeline.
- [ElementSpawnParameters](computegraph/elementspawnparameters.md): Parameters used to configure the initial state of a particle when it’s spawned in the simulation.
- [ElementGrouping](computegraph/elementgrouping.md): An enumeration of how elements are grouped.
- [ComputeGraphSimulation.SimulationRate](computegraph/computegraphsimulation/simulationrate-swift.struct.md): Specifies the rate and mode for simulation.
- [Sorting](computegraph/sorting.md): An enumeration of sorting modes.

### Graph resources

- [ComputeNodeGraph.SamplerSettings](computegraph/computenodegraph/samplersettings.md)
- [ComputeNodeGraph.SwizzleChannels](computegraph/computenodegraph/swizzlechannels.md)
- [AddressSpace](computegraph/addressspace.md): A GPU memory address space.

### Geometry and simulation inputs

- [ComputeNodeGraph.Topology](computegraph/computenodegraph/topology.md): The primitive topology used to assemble output geometry for an output stage.
- [CoordinateSpace](computegraph/coordinatespace.md): Simulation coordinate space, controlling how positions and orientations are stored.
- [ComputeNodeGraph.StructureLayout](computegraph/computenodegraph/structurelayout.md)
- [StripOrientation](computegraph/striporientation.md): An enumeration that specifies how a strip should be oriented.
- [Viewpoint](computegraph/viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](computegraph/mouseparams.md): Parameters describing mouse interaction in 3D space.

### Functions

- [filteredLinesFromNeighbors](computegraph/filteredlinesfromneighbors.md)
- [linesFromNeighbors](computegraph/linesfromneighbors.md)

# Compute Graph (Objective-C)

**Framework:** Compute Graph  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro 3.0+

Build and run custom particle effects and compute simulations for RealityKit using a programmable node graph.

<a id="Overview"></a>

## Overview

Compute Graph is a node-based framework for building particle simulations and general-purpose GPU compute graphs in [RealityKit](realitykit.md). Where [ShaderGraph](https://developer.apple.com/documentation/shadergraph) lets you build material appearance through a node-based visual editor, Compute Graph provides the same graph-driven, connection-based authoring for simulation behavior. Use Compute Graph when you build tools or editors that need fine-grained, per-stage control over how simulations execute on the GPU. Reality Composer Pro uses this framework to author and preview particle systems for RealityKit scenes.

The Swift API centers on a three-step compilation pipeline. Describe a simulation as a [ComputeNodeGraph](computegraph/computenodegraph.md), a directed graph of typed nodes and edges. Then produce a [ComputeNodeGraph.Assembly](computegraph/computenodegraph/assembly.md) from the graph, which resolves the buffer, uniform, and texture layout the simulation requires. Compile that assembly into [ComputeNodeGraph.Pipelines](computegraph/computenodegraph/pipelines.md) to produce GPU shader code; a single set of pipelines can back multiple [ComputeGraphSimulation](computegraph/computegraphsimulation.md) instances running concurrently. Supply custom Metal Shading Language functions through a [ComputeNodeGraph.Library](computegraph/computenodegraph/library.md) alongside the framework’s built-in node namespaces.

At runtime, [ComputeGraphSimulation](computegraph/computegraphsimulation.md) drives GPU execution. Call [advance(\_:)](computegraph/computegraphsimulation/advance%28__%29.md) each frame, passing a [ComputeGraphSimulation.AdvanceParams](computegraph/computegraphsimulation/advanceparams.md) that carries the time delta, a Metal command buffer, a compute encoder, and optional world-space transforms. To inject elements programmatically, call [spawn(elements:in:using:)](computegraph/computegraphsimulation/spawn%28elements_in_using_%29.md) with [ElementSpawnParameters](computegraph/elementspawnparameters.md) values that set each element’s initial position, velocity, size, color, and lifetime.

## Topics

### Geometry and simulation inputs

- [Viewpoint](computegraph/viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](computegraph/mouseparams.md): Parameters describing mouse interaction in 3D space.

### Macros

- [PS_ALWAYS_INLINE](computegraph/ps_always_inline.md)
- [PS_API](computegraph/ps_api.md)
- [PS_AVAILABILE](computegraph/ps_availabile.md)
- [PS_CONSTANT](computegraph/ps_constant.md)
- [PS_DEPRECATED](computegraph/ps_deprecated.md)
- [PS_DEVICE](computegraph/ps_device.md)
- [PS_ENUM](computegraph/ps_enum.md)
- [PS_INTERNAL](computegraph/ps_internal.md)
- [PS_THREAD](computegraph/ps_thread.md)
- [PS_THREADGROUP](computegraph/ps_threadgroup.md)
- [ps_binding_type](computegraph/ps_binding_type.md)
