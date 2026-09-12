> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomcomponent/bloomscope](https://developer.apple.com/documentation/realitykit/bloomcomponent/bloomscope)

# BloomComponent.BloomScope

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct BloomScope
```

## Topics

### Accessing bloom scopes

- [hierarchical](bloomscope/hierarchical.md): Bloom is restricted to the bounding box of the attached entity’s mesh hierarchy.
- [unbounded](bloomscope/unbounded.md): Bloom is computed on the entire screen with no bounding box restriction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the bloom scope

- [scope](scope.md): The scope of where bloom will be computed
