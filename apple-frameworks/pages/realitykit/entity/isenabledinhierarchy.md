> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/isenabledinhierarchy](https://developer.apple.com/documentation/realitykit/entity/isenabledinhierarchy)

# isEnabledInHierarchy

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that indicates whether the entity and all of its ancestors are enabled.

## Declaration

```swift
@MainActor @preconcurrency var isEnabledInHierarchy: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the entity and all of its ancestors are enabled, regardless of anchor state.

## See Also

### Managing the entity’s state

- [isEnabled](isenabled.md): A Boolean that you set to enable or disable the entity and its descendants.
- [isActive](isactive.md): A Boolean that indicates whether the entity is active.
- [isAnchored](isanchored.md): A Boolean that indicates whether the entity is anchored.
