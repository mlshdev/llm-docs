> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/isenabled](https://developer.apple.com/documentation/realitykit/entity/isenabled)

# isEnabled

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that you set to enable or disable the entity and its descendants.

## Declaration

```swift
@MainActor @preconcurrency var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to `true` to enable the entity. Unless an ancestor is disabled, the entity and all of its enabled descendants, up to the first that’s disabled, report [isEnabledInHierarchy](isenabledinhierarchy.md) of `true`. If an ancestor is disabled, they all report `false`. The state of [isActive](isactive.md) for enabled entities is `true` if they are anchored, or `false` otherwise.

If you disable an entity, it and all of its descendants become both disabled ([isEnabledInHierarchy](isenabledinhierarchy.md) returns `false`) and inactive ([isActive](isactive.md) returns `false`), regardless of any other state.

When an entity is disabled, it’s no longer visible in your scene. However, the entity is still included in an [EntityQuery](../entityquery.md).

## See Also

### Managing the entity’s state

- [isEnabledInHierarchy](isenabledinhierarchy.md): A Boolean that indicates whether the entity and all of its ancestors are enabled.
- [isActive](isactive.md): A Boolean that indicates whether the entity is active.
- [isAnchored](isanchored.md): A Boolean that indicates whether the entity is anchored.
