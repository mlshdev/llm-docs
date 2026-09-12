> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/listoperation](https://developer.apple.com/documentation/usdkit/usdlayer/listoperation)

# USDLayer.ListOperation

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A non-destructive list of incremental editing operations for list-valued metadata and properties.

## Declaration

```swift
struct ListOperation<T> where T : USDLayer._ListOperationElement
```

## Topics

### Initializers

- [init(explicitItems:)](listoperation/init%28explicititems_%29-4klr9.md): Creates an explicit-mode list operation with the given items.
- [init(explicitItems:)](listoperation/init%28explicititems_%29-6l0al.md): Deprecated. Conforms when `T` is `Int`.
- [init(explicitItems:)](listoperation/init%28explicititems_%29-7iesv.md): Deprecated. Conforms when `T` is `UInt`.
- [init(prependedItems:appendedItems:deletedItems:)](listoperation/init%28prependeditems_appendeditems_deleteditems_%29-1tkyo.md): Creates a list operation with the given prepended/appended/deleted items. Pass no arguments for an empty operation with no slots authored.
- [init(prependedItems:appendedItems:deletedItems:)](listoperation/init%28prependeditems_appendeditems_deleteditems_%29-8poys.md): Deprecated. Conforms when `T` is `Int`.
- [init(prependedItems:appendedItems:deletedItems:)](listoperation/init%28prependeditems_appendeditems_deleteditems_%29-ngyh.md): Deprecated. Conforms when `T` is `UInt`.

### Instance Properties

- [appliedItems](listoperation/applieditems.md): The composed result of applying all operations from strongest to weakest opinion.
- [hasKeys](listoperation/haskeys.md): Whether any operation slot has been authored.
- [isExplicit](listoperation/isexplicit.md): Whether the operation is in explicit mode — i.e., its items replace the entire list during composition.

### Instance Methods

- [clear()](listoperation/clear%28%29.md): Removes all authored slots, leaving an empty operation.
- [clearAndMakeExplicit()](listoperation/clearandmakeexplicit%28%29.md): Removes all authored slots and switches to explicit mode with no items.
- [compose(stronger:for:)](listoperation/compose%28stronger_for_%29.md): Composes a stronger operation into this one for the given slot.
- [has(item:)](listoperation/has%28item_%29.md): Returns a Boolean value that indicates whether `item` appears in any slot of this operation.
- [items(for:)](listoperation/items%28for_%29.md): Returns the items in the given operation’s slot.
- [replaceItems(in:at:count:with:)](listoperation/replaceitems%28in_at_count_with_%29.md): Replaces `count` items in `operation`’s slot starting at `index` with `newItems`.
- [setItems(\_:for:)](listoperation/setitems%28__for_%29.md): Sets the items in the given operation’s slot.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Editing scene description

- [copy(from:to:in:)](copy%28from_to_in_%29.md): Copies the spec at `srcPath` in this layer (and its children) to `dstPath`.
- [USDLayer.ListOperationType](listoperationtype.md): Identifies an operation slot in a [USDLayer.ListOperation](listoperation.md).
- [USDLayer.Relocate](relocate.md): A single path relocation from source to target.
- [USDLayer.RelocatesMap](relocatesmap.md): A mapping from source paths to target paths for relocations.
- [USDLayer.ChangeList](changelist.md): A list of changes made to a layer.
