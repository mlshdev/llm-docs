> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module

# module

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes that mutate per-particle state, including position, velocity, color, size, and lifetime.

## Topics

### Namespaces

- [module::debug](module/debug.md)

### Functions

- [module::addPosition](module/addposition.md): Moves an element by adding an offset to its current position.
- [module::addVelocity](module/addvelocity.md): Adds a velocity delta to the element’s current velocity.
- [module::setAlpha](module/setalpha.md): Sets the alpha (opacity) value of an element.
- [module::setColor](module/setcolor.md): Sets the color of an element to the specified RGBA value.
- [module::setLifetime](module/setlifetime.md): Sets the lifetime of an element in seconds.
- [module::setPosition](module/setposition.md): Sets the position of an element to the specified coordinates.
- [module::setSize](module/setsize.md): Sets the size of an element to the specified dimensions. Size is in meters.
- [module::setVelocity](module/setvelocity.md): Sets the velocity of an element to the specified value.

## See Also

### Simulation-stage nodes

- [element](element.md): A set of nodes for reading and writing the current element within a particle simulation.
- [emitter](emitter.md): A set of nodes for the emission stage that control how often and how many elements a simulation spawns.
- [initialize](initialize.md): A set of nodes for the initialization stage that set an element’s starting state.
- [output](output.md): A set of nodes for the output stage that adjust an element’s appearance without modifying its underlying state.
- [force](force.md): A set of nodes that apply physics forces to particles, including gravity, drag, noise, and twist.
