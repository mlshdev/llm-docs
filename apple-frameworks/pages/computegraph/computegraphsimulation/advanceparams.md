> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/advanceparams](https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams)

# ComputeGraphSimulation.AdvanceParams

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Parameters for advancing a compute graph simulation by one time step.

## Declaration

```swift
struct AdvanceParams
```

## Topics

### Initializers

- [init(deltaTime:commandBuffer:computeEncoder:)](advanceparams/init%28deltatime_commandbuffer_computeencoder_%29.md): Creates advance parameters with the required Metal objects.
- [init(deltaTime:commandBuffer:computeEncoder:localToWorld:worldToLocal:viewPosition:viewDirection:)](advanceparams/init%28deltatime_commandbuffer_computeencoder_localtoworld_worldtolocal_viewposition_viewdirection_%29.md)

### Instance Properties

- [commandBuffer](advanceparams/commandbuffer.md): The command buffer to encode simulation commands into.
- [computeEncoder](advanceparams/computeencoder.md): The compute command encoder to encode simulation dispatches with.
- [deltaTime](advanceparams/deltatime.md): The time interval, in seconds, to advance the simulation.
- [localToWorld](advanceparams/localtoworld.md): The transform from the system’s local space to world space.
- [maxSteps](advanceparams/maxsteps.md): The maximum number of fixed-size steps per advance.
- [viewDirection](advanceparams/viewdirection.md): The forward direction of the viewer in world space.
- [viewPosition](advanceparams/viewposition.md): The position of the viewer in world space.
- [worldToLocal](advanceparams/worldtolocal.md): The transform from world space to the system’s local space.
