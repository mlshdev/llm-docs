> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/billboardaction/init(transitionin:transitionout:)

# init(transitionIn:transitionOut:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new billboard action.

## Declaration

```swift
init(transitionIn: BillboardAction.Transition = .init(), transitionOut: BillboardAction.Transition = .init())
```

## Parameters

- `transitionIn`: The rate of change at the beginning of the action.
- `transitionOut`: The rate of change at the end of the action.
