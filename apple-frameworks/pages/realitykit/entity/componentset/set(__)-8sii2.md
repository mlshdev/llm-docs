> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/componentset/set(_:)-8sii2

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds a new component to the set, or overrides an existing one.

## Declaration

```swift
@MainActor @preconcurrency func set<T>(_ component: T) where T : Component
```

## Parameters

- `component`: The component to add.

## See Also

### Updating the set

- [set(\_:)](set%28__%29-2qzsc.md): Adds multiple components to the set, overriding any existing components of the same type.
- [remove(\_:)](remove%28__%29.md): Removes the component of the specified type from the collection.
- [removeAll()](removeall%28%29.md): Removes all components from the collection.
