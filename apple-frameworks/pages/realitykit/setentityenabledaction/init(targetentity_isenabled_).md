> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/setentityenabledaction/init(targetentity:isenabled:)](https://developer.apple.com/documentation/realitykit/setentityenabledaction/init(targetentity:isenabled:))

# init(targetEntity:isEnabled:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new set entity enabled action.

## Declaration

```swift
init(targetEntity: ActionEntityResolution = .sourceEntity, isEnabled: Bool)
```

## Parameters

- `targetEntity`: The entity to disable or enable.
- `isEnabled`: A Boolean that you set to enable or disable the entity and its descendants.
