> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activestatemachinenode/wasreset](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activestatemachinenode/wasreset)

# wasReset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the node was reset during the last evaluation tick.

## Declaration

```swift
var wasReset: Bool { get }
```

## See Also

### Inspecting the node state

- [currentState](currentstate.md): The ID of the state the state machine is currently in.
- [previousState](previousstate.md): The ID of the state the state machine was in immediately before [currentState](currentstate.md).
- [lastTransition](lasttransition.md): The ID of the most recent transition the state machine took.
