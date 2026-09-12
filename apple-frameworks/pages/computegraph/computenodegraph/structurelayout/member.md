> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/structurelayout/member](https://developer.apple.com/documentation/computegraph/computenodegraph/structurelayout/member)

# ComputeNodeGraph.StructureLayout.Member

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

## Declaration

```swift
struct Member
```

## Topics

### Initializers

- [init(name:type:offset:)](member/init%28name_type_offset_%29.md)

### Instance Properties

- [dataType](member/datatype.md): Data type. For types such as `.struct` and `.pointer`, see [typeName](member/typename.md) and `components` for additional information.
- [lengthInBytes](member/lengthinbytes.md)
- [members](member/members.md)
- [name](member/name.md): Name of this member in the containing structure
- [offset](member/offset.md): Offset, in bytes, of this member in its containing structure
- [type](member/type.md)
- [typeName](member/typename.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
