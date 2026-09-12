> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/relocatesmap](https://developer.apple.com/documentation/usdkit/usdlayer/relocatesmap)

# USDLayer.RelocatesMap

**Framework:** USDKit  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A mapping from source paths to target paths for relocations.

## Declaration

```swift
typealias RelocatesMap = Dictionary<USDLayer.Path, USDLayer.Path>
```

## See Also

### Editing scene description

- [copy(from:to:in:)](copy%28from_to_in_%29.md): Copies the spec at `srcPath` in this layer (and its children) to `dstPath`.
- [USDLayer.ListOperation](listoperation.md): A non-destructive list of incremental editing operations for list-valued metadata and properties.
- [USDLayer.ListOperationType](listoperationtype.md): Identifies an operation slot in a [USDLayer.ListOperation](listoperation.md).
- [USDLayer.Relocate](relocate.md): A single path relocation from source to target.
- [USDLayer.ChangeList](changelist.md): A list of changes made to a layer.
