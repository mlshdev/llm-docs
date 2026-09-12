> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstance/sortcategory-swift.enum](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstance/sortcategory-swift.enum)

# LowLevelMeshInstance.SortCategory

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The sort category of this mesh instance.

## Declaration

```swift
enum SortCategory
```

## Topics

### Identifying sort categories

- [LowLevelMeshInstance.SortCategory.opaque](sortcategory-swift.enum/opaque.md): An opaque draw call that renders before all transparent instances.
- [LowLevelMeshInstance.SortCategory.transparent](sortcategory-swift.enum/transparent.md): A transparent draw call sorted back-to-front by distance from the camera.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sorting instances

- [sortCategory](sortcategory-swift.property.md): The sort category of this mesh instance.
