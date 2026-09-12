> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/set(_:)-2qzsc](https://developer.apple.com/documentation/realitykit/entity/componentset/set(_:)-2qzsc)

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds multiple components to the set, overriding any existing components of the same type.

## Declaration

```swift
@MainActor @preconcurrency func set(_ components: [any Component])
```

## Parameters

- `components`: An array of components to add.

<a id="discussion"></a>

## Discussion

If the input array includes multiple components of the same type, the set adds the component with the highest index. This is because the set can only hold one component of each type.

## See Also

### Updating the set

- [set(\_:)](set%28__%29-8sii2.md): Adds a new component to the set, or overrides an existing one.
- [remove(\_:)](remove%28__%29.md): Removes the component of the specified type from the collection.
- [removeAll()](removeall%28%29.md): Removes all components from the collection.
