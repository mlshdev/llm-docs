> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/set(_:)](https://developer.apple.com/documentation/realitykit/entity/componentset/set(_:))

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
