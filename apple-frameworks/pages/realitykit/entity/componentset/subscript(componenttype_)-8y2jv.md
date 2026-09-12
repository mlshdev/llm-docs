> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(componenttype:)-8y2jv](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(componenttype:)-8y2jv)

# subscript(componentType:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets or sets the component of the specified type.

## Declaration

```swift
@abi(@MainActor @preconcurrency subscript<T>(componentType: T.Type) -> T? where T : Component { get set }) @MainActor @preconcurrency subscript<T>(componentType componentType: T.Type) -> T? where T : Component { get set }
```

## See Also

### Accessing components

- [subscript(\_:\_:)](subscript%28____%29-404se.md): Gets or sets the component of the specified type.
