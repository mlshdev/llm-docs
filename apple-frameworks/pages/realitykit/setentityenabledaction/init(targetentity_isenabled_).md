> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/setentityenabledaction/init(targetentity:isenabled:)

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
