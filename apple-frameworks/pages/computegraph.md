> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph](https://developer.apple.com/documentation/computegraph)

# Compute Graph (Swift)

**Framework:** Compute Graph  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro 3.0+

Build and run custom particle effects and compute simulations for RealityKit using a programmable node graph.

<a id="Overview"></a>

## Overview

Compute Graph is a node-based framework for constructing particle simulations and general-purpose GPU compute graphs in [RealityKit](realitykit.md). Whereas [ShaderGraph](https://developer.apple.com/documentation/shadergraph) lets developers build material appearance through a node-based visual editor, Compute Graph provides the same graph-driven, connection-based authoring for simulation behavior. The technology targets tool and editor developers who need fine-grained, per-stage control over how particles and compute work proceeds.

The Swift API centers on a three-step compilation pipeline. Describe a simulation as a `GraphDefinition`, a directed graph of typed nodes and edges. Then assemble the graph into a `ComputeGraphAssembly`, which resolves the buffer, uniform, and texture layout the simulation requires. Compile that assembly into `ComputeGraphPipelines` to produce GPU shader code; a single set of pipelines can back multiple [ComputeGraphSimulation](computegraph/computegraphsimulation.md) instances running concurrently. `Library` and `SyntheticNodeLibrary` let you supply custom Metal Shading Language functions as node definitions alongside the framework’s built-in set in `ComputeGraphBuiltIns`.

At runtime, [ComputeGraphSimulation](computegraph/computegraphsimulation.md) drives GPU execution. Call [advance(\_:)](computegraph/computegraphsimulation/advance%28__%29.md) each frame, passing an [ComputeGraphSimulation.AdvanceParams](computegraph/computegraphsimulation/advanceparams.md) that carries the time delta, a Metal command buffer, a compute encoder, and optional world-space transforms. Bind `GraphBuffer`, `GraphTexture`, and `GraphUniform` resources before the first advance. To inject elements programmatically, call [spawn(elements:in:using:)](computegraph/computegraphsimulation/spawn%28elements_in_using_%29.md) with [ElementSpawnParameters](computegraph/elementspawnparameters.md) values that set each element’s initial position, velocity, size, color, and lifetime.

## Topics

### Simulation objects

- [ComputeGraphSimulation](computegraph/computegraphsimulation.md): A simulation of particles, which use a single pipeline.

### Built-in nodes

- [element](computegraph/element.md): A set of nodes for reading and writing the current element within a particle simulation.
- [emitter](computegraph/emitter.md): A set of nodes usable in the emission stage of a simulation, which control how often and how many elements to spawn.
- [force](computegraph/force.md): Apply physics forces including gravity, drag, noise, and twist.
- [initialize](computegraph/initialize.md): Nodes usable within the initialization stage of an element.
- [output](computegraph/output.md): Nodes usable within the output stage of an element. You can use these nodes to change the appearance of an element without making modifications to the element itself.
- [module](computegraph/module.md): Mutate per-particle state with operations such as setPosition, addPosition, setVelocity, setColor, setSize, and setLifetime.
- [graph](computegraph/graph.md): A set of nodes usable in any stage within a ComputeGraph.
- [group](computegraph/group.md): Nodes for querying the group for a current particle. Requires a system whose simulation stage is configured as either `strips` or `grouped`.
- [texture](computegraph/texture.md): Nodes usable within the texture stage, for generating textures.
- [random](computegraph/random.md): Nodes for generating pseudo-random numbers.
- [matrix4x4f](computegraph/matrix4x4f.md): Transform positions and directions using matrix4x4f.
- [matrix4x4h](computegraph/matrix4x4h.md): Transform positions and directions using matrix4x4h.

### Node parameters and connections

- [PortReference](computegraph/portreference.md): A reference to another group’s values.
- [BinaryOperation](computegraph/binaryoperation.md): An enumeration of binary operations.
- [UnaryOperation](computegraph/unaryoperation.md): An enumeration of single-operand operations.
- [StandardLibraryFunction](computegraph/standardlibraryfunction.md)

### Elements and particles

- [ElementGrouping](computegraph/elementgrouping.md): An enumeration of how elements are grouped.
- [ElementSpawnParameters](computegraph/elementspawnparameters.md): Parameters used to configure the initial state of a particle when it’s spawned in the simulation.
- [Sorting](computegraph/sorting.md): An enumeration of sorting modes.

### Graph resources

- [AddressSpace](computegraph/addressspace.md): A GPU memory address space.

### Geometry and simulation inputs

- [CoordinateSpace](computegraph/coordinatespace.md): Simulation coordinate space, controlling how positions and orientations are stored.
- [StripOrientation](computegraph/striporientation.md): An enumeration that specifies how a strip should be oriented.
- [Viewpoint](computegraph/viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](computegraph/mouseparams.md): Parameters describing mouse interaction in 3D space.

### Structures

- [ComputeNodeGraph](computegraph/computenodegraph.md)

### Functions

- [element_integrate](computegraph/element_integrate.md)
- [filteredLinesFromNeighbors](computegraph/filteredlinesfromneighbors.md)
- [gridDebugCells](computegraph/griddebugcells.md)
- [gridFromPoints](computegraph/gridfrompoints.md)
- [linesFromNeighbors](computegraph/linesfromneighbors.md)
- [orient_to_velocity](computegraph/orient_to_velocity.md): Orient the particle by setting its `axisY` to the velocity’s current direction.
- [spawn_demo](computegraph/spawn_demo.md)
- [texture_sample](computegraph/texture_sample.md)
- [texture_sample1d](computegraph/texture_sample1d.md)
- [viewpoint](computegraph/viewpoint-swift.func.md): Returns the current viewpoint, if one is provided.

# Compute Graph (Objective-C)

**Framework:** Compute Graph  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro 3.0+

Build and run custom particle effects and compute simulations for RealityKit using a programmable node graph.

<a id="Overview"></a>

## Overview

Compute Graph is a node-based framework for constructing particle simulations and general-purpose GPU compute graphs in [RealityKit](realitykit.md). Whereas [ShaderGraph](https://developer.apple.com/documentation/shadergraph) lets developers build material appearance through a node-based visual editor, Compute Graph provides the same graph-driven, connection-based authoring for simulation behavior. The technology targets tool and editor developers who need fine-grained, per-stage control over how particles and compute work proceeds.

The Swift API centers on a three-step compilation pipeline. Describe a simulation as a `GraphDefinition`, a directed graph of typed nodes and edges. Then assemble the graph into a `ComputeGraphAssembly`, which resolves the buffer, uniform, and texture layout the simulation requires. Compile that assembly into `ComputeGraphPipelines` to produce GPU shader code; a single set of pipelines can back multiple [ComputeGraphSimulation](computegraph/computegraphsimulation.md) instances running concurrently. `Library` and `SyntheticNodeLibrary` let you supply custom Metal Shading Language functions as node definitions alongside the framework’s built-in set in `ComputeGraphBuiltIns`.

At runtime, [ComputeGraphSimulation](computegraph/computegraphsimulation.md) drives GPU execution. Call [advance(\_:)](computegraph/computegraphsimulation/advance%28__%29.md) each frame, passing an [ComputeGraphSimulation.AdvanceParams](computegraph/computegraphsimulation/advanceparams.md) that carries the time delta, a Metal command buffer, a compute encoder, and optional world-space transforms. Bind `GraphBuffer`, `GraphTexture`, and `GraphUniform` resources before the first advance. To inject elements programmatically, call [spawn(elements:in:using:)](computegraph/computegraphsimulation/spawn%28elements_in_using_%29.md) with [ElementSpawnParameters](computegraph/elementspawnparameters.md) values that set each element’s initial position, velocity, size, color, and lifetime.

## Topics

### Geometry and simulation inputs

- [Viewpoint](computegraph/viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](computegraph/mouseparams.md): Parameters describing mouse interaction in 3D space.

### C macros

- [PS_API](computegraph/ps_api.md)
- [PS_AVAILABILE](computegraph/ps_availabile.md)
- [PS_DEPRECATED](computegraph/ps_deprecated.md)
- [PS_ALWAYS_INLINE](computegraph/ps_always_inline.md)
- [PS_CONSTANT](computegraph/ps_constant.md)
- [PS_DEVICE](computegraph/ps_device.md)
- [PS_THREAD](computegraph/ps_thread.md)
- [PS_THREADGROUP](computegraph/ps_threadgroup.md)
- [PS_ENUM](computegraph/ps_enum.md)
- [PS_INTERNAL](computegraph/ps_internal.md)
- [ps_binding_type](computegraph/ps_binding_type.md)
