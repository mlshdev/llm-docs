> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/compositesubpart](https://developer.apple.com/documentation/hvf/compositesubpart)

# CompositeSubpart

**Framework:** hvf  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A subpart in a Composite part

## Declaration

```swift
struct CompositeSubpart
```

## Topics

### Initializers

- [init(partIndex:treePartOffset:treeAxisOffset:)](compositesubpart/init%28partindex_treepartoffset_treeaxisoffset_%29.md)

### Instance Properties

- [partIndex](compositesubpart/partindex.md): The index of the part this subpart renders
- [treeAxisOffset](compositesubpart/treeaxisoffset.md): The offset of the part’s axis value settings in the render context axis value tree (depth first)
- [treePartOffset](compositesubpart/treepartoffset.md): The offset of the part’s data in the render context transform tree (depth first)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
