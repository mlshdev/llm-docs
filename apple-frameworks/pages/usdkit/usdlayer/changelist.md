> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/changelist](https://developer.apple.com/documentation/usdkit/usdlayer/changelist)

# USDLayer.ChangeList

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A list of changes made to a layer.

## Declaration

```swift
struct ChangeList
```

<a id="overview"></a>

## Overview

Used by the layer change notification system to describe what modifications occurred between two states of a layer.

## Topics

### Structures

- [USDLayer.ChangeList.Entry](changelist/entry.md): A single change entry describing modifications at a path.

### Instance Properties

- [entries](changelist/entries.md): All change entries, keyed by the path of the affected spec.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing scene description

- [copy(from:to:in:)](copy%28from_to_in_%29.md): Copies the spec at `srcPath` in this layer (and its children) to `dstPath`.
- [USDLayer.ListOperation](listoperation.md): A non-destructive list of incremental editing operations for list-valued metadata and properties.
- [USDLayer.ListOperationType](listoperationtype.md): Identifies an operation slot in a [USDLayer.ListOperation](listoperation.md).
- [USDLayer.Relocate](relocate.md): A single path relocation from source to target.
- [USDLayer.RelocatesMap](relocatesmap.md): A mapping from source paths to target paths for relocations.
