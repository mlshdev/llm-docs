> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/bindtarget/entitypath/parameter(_:)

# parameter(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Provides a bind target for a particular animated property.

## Declaration

```swift
func parameter(_ name: String) -> BindTarget
```

## Parameters

- `name`: The animated property’s name.

## See Also

### Accessing a bind target

- [jointTransforms](jointtransforms.md): A bind target for the entity’s joint transforms.
- [transform](transform.md): A bind target for the entity’s transform.
- [self](self.md): A bind target for the entity.
