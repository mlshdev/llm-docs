> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/initialize

# initialize

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes for the initialization stage that set an element’s starting state.

## Topics

### Functions

- [initialize::sourceElementIndex](initialize/sourceelementindex.md): When initializing a new particle from an event triggered from another particle, this returns the source particle’s index with its system.
- [initialize::spawnIndex](initialize/spawnindex.md): For a derived element spawned from an emitter, returns the sequential index of the spawn from that emitter. If this was spawned from an EventSource or from the CPU, this value is the index within the current spawn request.

## See Also

### Simulation-stage nodes

- [element](element.md): A set of nodes for reading and writing the current element within a particle simulation.
- [emitter](emitter.md): A set of nodes for the emission stage that control how often and how many elements a simulation spawns.
- [module](module.md): A set of nodes that mutate per-particle state, including position, velocity, color, size, and lifetime.
- [output](output.md): A set of nodes for the output stage that adjust an element’s appearance without modifying its underlying state.
- [force](force.md): A set of nodes that apply physics forces to particles, including gravity, drag, noise, and twist.
