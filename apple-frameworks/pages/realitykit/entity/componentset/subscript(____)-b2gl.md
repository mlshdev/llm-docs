> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(_:_:)-b2gl

# subscript(\_:\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@MainActor @preconcurrency subscript<T>(componentType: T.Type, backDeploy: Void = ()) -> T? where T : _ImplicitlyAnimatableBuiltinComponent { get set }
```

## See Also

### Accessing animatable components

- [subscript(componentType:)](subscript%28componenttype_%29-3miek.md)
- [subscript(withoutAnimation:)](subscript%28withoutanimation_%29.md): Gets or sets the component of the specified type, without considering implicit animations.
