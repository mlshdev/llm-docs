> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/element

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

### Simulation-stage nodes

- [emitter](emitter.md): A set of nodes for the emission stage that control how often and how many elements a simulation spawns.
- [initialize](initialize.md): A set of nodes for the initialization stage that set an element’s starting state.
- [module](module.md): A set of nodes that mutate per-particle state, including position, velocity, color, size, and lifetime.
- [output](output.md): A set of nodes for the output stage that adjust an element’s appearance without modifying its underlying state.
- [force](force.md): A set of nodes that apply physics forces to particles, including gravity, drag, noise, and twist.
