> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entitytargetvalue/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<Value, T>) -> T { get }
```

## See Also

### Accessing gesture info

- [entity](entity.md): The targeted entity.
- [gestureValue](gesturevalue.md): The gesture value updated by the gesture.
