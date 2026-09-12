> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/has(_:)](https://developer.apple.com/documentation/realitykit/entity/componentset/has(_:))

# has(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns a Boolean value that indicates whether the set contains a component of the given type.

## Declaration

```swift
@MainActor @preconcurrency func has(_ componentType: any Component.Type) -> Bool
```

## Parameters

- `componentType`: A component type, like `ModelComponent.Self`.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the set contains a component of the given type.
