> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/reservedregion/kind-swift.struct

# ReservedRegion.Kind

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A kind of reserved region.

## Declaration

```swift
struct Kind
```

## Topics

### Getting reserved region kinds

- [division](kind-swift.struct/division.md): Beta. A region where content should split into two separate regions.
- [occlusion](kind-swift.struct/occlusion.md): Beta. A region that is occluded by an element.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting reserved regions

- [reservedRegions(kind:options:layoutDirectionBehavior:)](../geometryproxy/reservedregions%28kind_options_layoutdirectionbehavior_%29.md): Beta. Returns an array of reserved regions that match the selection options you specify.
- [ReservedRegion](../reservedregion.md): Beta. A region within a view’s coordinate space that another entity reserves.
- [ReservedRegion.QueryOptions](queryoptions.md): Beta. Options for querying reserved regions.
