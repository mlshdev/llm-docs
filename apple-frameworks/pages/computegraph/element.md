> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/element](https://developer.apple.com/documentation/computegraph/element)

# element

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes for reading and writing the current element within a particle simulation.

## Topics

### Functions

- [element::age](element/age.md): Returns the current age of the element in seconds.
- [element::ageOverLifetime](element/ageoverlifetime.md): Returns the normalized age of the element as a ratio of its lifetime.
- [element::color](element/color.md): Returns the current color of the element.
- [element::index](element/index.md): Returns the index of the current element.
- [element::lifetime](element/lifetime.md): Returns the total lifetime of the element in seconds.
- [element::position](element/position.md): Returns the current position of the element, in the graph’s coordinate space.
- [element::size](element/size.md): Returns the current size of the element.
- [element::terminate](element/terminate.md): Ends the lifetime of the current element, if terminate is true.
- [element::velocity](element/velocity.md): Returns the current velocity of the element.

## See Also

### Built-in nodes

- [emitter](emitter.md): A set of nodes usable in the emission stage of a simulation, which control how often and how many elements to spawn.
- [force](force.md): Apply physics forces including gravity, drag, noise, and twist.
- [initialize](initialize.md): Nodes usable within the initialization stage of an element.
- [output](output.md): Nodes usable within the output stage of an element. You can use these nodes to change the appearance of an element without making modifications to the element itself.
- [module](module.md): Mutate per-particle state with operations such as setPosition, addPosition, setVelocity, setColor, setSize, and setLifetime.
- [graph](graph.md): A set of nodes usable in any stage within a ComputeGraph.
- [group](group.md): Nodes for querying the group for a current particle. Requires a system whose simulation stage is configured as either `strips` or `grouped`.
- [texture](texture.md): Nodes usable within the texture stage, for generating textures.
- [random](random.md): Nodes for generating pseudo-random numbers.
- [matrix4x4f](matrix4x4f.md): Transform positions and directions using matrix4x4f.
- [matrix4x4h](matrix4x4h.md): Transform positions and directions using matrix4x4h.
