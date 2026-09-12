> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/emitter](https://developer.apple.com/documentation/computegraph/emitter)

# emitter

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes usable in the emission stage of a simulation, which control how often and how many elements to spawn.

## Topics

### Functions

- [emitter::burst](emitter/burst.md): Emit a single burst of particles when the system spawns.
- [emitter::continuous](emitter/continuous.md): Continuously emit particles at a fixed rate.
- [emitter::periodicBurst](emitter/periodicburst.md): Emit a burst of particles periodically.
- [emitter::setGroup](emitter/setgroup.md): Sets the element group(s) for spawn requests from this emitter.

## See Also

### Built-in nodes

- [element](element.md): A set of nodes for reading and writing the current element within a particle simulation.
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
