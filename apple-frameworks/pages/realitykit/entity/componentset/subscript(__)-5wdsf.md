> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(_:)-5wdsf](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(_:)-5wdsf)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Gets or sets the component of the specified type.

## Declaration

```swift
@abi(@MainActor @preconcurrency subscript<T>(optimized componentType: T.Type) -> T? where T : Component { get set }) @MainActor @preconcurrency subscript<T>(componentType: T.Type) -> T? where T : Component { get set }
```

## See Also

### Accessing members

- [subscript(\_:)](subscript%28__%29-47rhg.md): Gets or sets the component with a specific dynamically supplied type.
