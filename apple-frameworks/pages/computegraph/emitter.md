> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/emitter

# emitter

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes for the emission stage that control how often and how many elements a simulation spawns.

## Topics

### Functions

- [emitter::burst](emitter/burst.md): Emit a single burst of particles when the system spawns.
- [emitter::continuous](emitter/continuous.md): Continuously emit particles at a fixed rate.
- [emitter::periodicBurst](emitter/periodicburst.md): Emit a burst of particles periodically.
- [emitter::setGroup](emitter/setgroup.md): Sets the element group(s) for spawn requests from this emitter.

## See Also

### Simulation-stage nodes

- [element](element.md): A set of nodes for reading and writing the current element within a particle simulation.
- [initialize](initialize.md): A set of nodes for the initialization stage that set an element’s starting state.
- [module](module.md): A set of nodes that mutate per-particle state, including position, velocity, color, size, and lifetime.
- [output](output.md): A set of nodes for the output stage that adjust an element’s appearance without modifying its underlying state.
- [force](force.md): A set of nodes that apply physics forces to particles, including gravity, drag, noise, and twist.
