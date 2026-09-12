> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(_:_:)-404se](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(_:_:)-404se)

# subscript(\_:\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets or sets the component of the specified type.

## Declaration

```swift
@MainActor @preconcurrency subscript<T>(componentType: T.Type, backDeploy: Void = ()) -> T? where T : Component { get set }
```

## See Also

### Accessing components

- [subscript(componentType:)](subscript%28componenttype_%29-8y2jv.md): Gets or sets the component of the specified type.
