> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/reservedregion/queryoptions

# ReservedRegion.QueryOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

Options for querying reserved regions.

## Declaration

```swift
@frozen struct QueryOptions
```

## Topics

### Getting query options

- [includeInactive](queryoptions/includeinactive.md): Include inactive reserved regions.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting reserved regions

- [reservedRegions(kind:options:layoutDirectionBehavior:)](../geometryproxy/reservedregions%28kind_options_layoutdirectionbehavior_%29.md): Returns an array of reserved regions that match the selection options you specify.
- [ReservedRegion](../reservedregion.md): A region within a view’s coordinate space that another entity reserves.
- [ReservedRegion.Kind](kind-swift.struct.md): A kind of reserved region.
