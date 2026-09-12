> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/path(_:)](https://developer.apple.com/documentation/realitykit/bindtarget/path(_:))

# BindTarget.path(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Provides a complex bind path capable of animating additional entities other than the current entity.

## Declaration

```swift
case path(BindPath)
```

## See Also

### Choosing a bind target

- [BindTarget.internal(\_:)](internal%28__%29.md): A bind target that refers to a framework-provided property.
- [BindTarget.jointTransforms](jointtransforms.md): An option that specifies that the entity’s joint transforms animate.
- [BindTarget.parameter(\_:)](parameter%28__%29.md): Provides a property that animates from the given textual name.
- [BindTarget.transform](transform.md): A option that specifies that the target entity’s transform animates.
