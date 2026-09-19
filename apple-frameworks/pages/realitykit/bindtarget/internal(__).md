> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/bindtarget/internal(_:)

# BindTarget.internal(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

A bind target that refers to a framework-provided property.

## Declaration

```swift
case `internal`(InternalBindPath)
```

## See Also

### Choosing a bind target

- [BindTarget.jointTransforms](jointtransforms.md): An option that specifies that the entity’s joint transforms animate.
- [BindTarget.parameter(\_:)](parameter%28__%29.md): Provides a property that animates from the given textual name.
- [BindTarget.path(\_:)](path%28__%29.md): Provides a complex bind path capable of animating additional entities other than the current entity.
- [BindTarget.transform](transform.md): A option that specifies that the target entity’s transform animates.
