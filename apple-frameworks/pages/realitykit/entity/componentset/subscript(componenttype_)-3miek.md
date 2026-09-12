> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(componenttype:)-3miek](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(componenttype:)-3miek)

# subscript(componentType:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@abi(@MainActor @preconcurrency subscript<T>(componentType: T.Type) -> T? where T : _ImplicitlyAnimatableBuiltinComponent { get set }) @MainActor @preconcurrency subscript<T>(componentType componentType: T.Type) -> T? where T : _ImplicitlyAnimatableBuiltinComponent { get set }
```

## See Also

### Accessing animatable components

- [subscript(\_:\_:)](subscript%28____%29-b2gl.md)
- [subscript(withoutAnimation:)](subscript%28withoutanimation_%29.md): Gets or sets the component of the specified type, without considering implicit animations.
