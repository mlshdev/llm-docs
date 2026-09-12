> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/componentview](https://developer.apple.com/documentation/system/filepath/componentview)

# FilePath.ComponentView

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A bidirectional, range replaceable collection of the non-root components that make up a file path.

## Declaration

```swift
struct ComponentView
```

<a id="overview"></a>

## Overview

ComponentView provides access to standard `BidirectionalCollection` algorithms for accessing components from the front or back, as well as standard `RangeReplaceableCollection` algorithms for modifying the file path using component or range of components granularity.

Example:

```swift
var path: FilePath = "/./home/./username/scripts/./tree"
let scriptIdx = path.components.lastIndex(of: "scripts")!
path.components.insert("bin", at: scriptIdx)
// path is "/./home/./username/bin/scripts/./tree"

path.components.removeAll { $0.kind == .currentDirectory }
// path is "/home/username/bin/scripts/tree"
```

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
