> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/listoperationtype](https://developer.apple.com/documentation/usdkit/usdlayer/listoperationtype)

# USDLayer.ListOperationType

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Identifies an operation slot in a [USDLayer.ListOperation](listoperation.md).

## Declaration

```swift
enum ListOperationType
```

## Topics

### Enumeration Cases

- [USDLayer.ListOperationType.appended](listoperationtype/appended.md): Items added to the back.
- [USDLayer.ListOperationType.deleted](listoperationtype/deleted.md): Items to remove during composition.
- [USDLayer.ListOperationType.explicit](listoperationtype/explicit.md): Items that replace the entire list.
- [USDLayer.ListOperationType.prepended](listoperationtype/prepended.md): Items added to the front.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Editing scene description

- [copy(from:to:in:)](copy%28from_to_in_%29.md): Copies the spec at `srcPath` in this layer (and its children) to `dstPath`.
- [USDLayer.ListOperation](listoperation.md): A non-destructive list of incremental editing operations for list-valued metadata and properties.
- [USDLayer.Relocate](relocate.md): A single path relocation from source to target.
- [USDLayer.RelocatesMap](relocatesmap.md): A mapping from source paths to target paths for relocations.
- [USDLayer.ChangeList](changelist.md): A list of changes made to a layer.
