> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/isactive](https://developer.apple.com/documentation/realitykit/entity/isactive)

# isActive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that indicates whether the entity is active.

## Declaration

```swift
@MainActor @preconcurrency var isActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the entity is anchored in a scene, and it and all of its ancestors are enabled ([isEnabled](isenabled.md) is set to `true`). RealityKit doesn’t simulate or render inactive entities.

## See Also

### Managing the entity’s state

- [isEnabled](isenabled.md): A Boolean that you set to enable or disable the entity and its descendants.
- [isEnabledInHierarchy](isenabledinhierarchy.md): A Boolean that indicates whether the entity and all of its ancestors are enabled.
- [isAnchored](isanchored.md): A Boolean that indicates whether the entity is anchored.
