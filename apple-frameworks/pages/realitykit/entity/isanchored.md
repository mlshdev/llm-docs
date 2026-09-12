> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/isanchored](https://developer.apple.com/documentation/realitykit/entity/isanchored)

# isAnchored

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that indicates whether the entity is anchored.

## Declaration

```swift
@MainActor @preconcurrency var isAnchored: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the entity is anchored in a scene. An entity that isn’t anchored becomes inactive ([isActive](isactive.md) returns `false`), meaning RealityKit doesn’t render or simulate it.

## See Also

### Managing the entity’s state

- [isEnabled](isenabled.md): A Boolean that you set to enable or disable the entity and its descendants.
- [isEnabledInHierarchy](isenabledinhierarchy.md): A Boolean that indicates whether the entity and all of its ancestors are enabled.
- [isActive](isactive.md): A Boolean that indicates whether the entity is active.
