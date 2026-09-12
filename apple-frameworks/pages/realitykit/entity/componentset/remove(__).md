> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/remove(_:)](https://developer.apple.com/documentation/realitykit/entity/componentset/remove(_:))

# remove(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes the component of the specified type from the collection.

## Declaration

```swift
@MainActor @preconcurrency func remove(_ componentType: any Component.Type)
```

## See Also

### Updating the set

- [set(\_:)](set%28__%29-8sii2.md): Adds a new component to the set, or overrides an existing one.
- [set(\_:)](set%28__%29-2qzsc.md): Adds multiple components to the set, overriding any existing components of the same type.
- [removeAll()](removeall%28%29.md): Removes all components from the collection.
