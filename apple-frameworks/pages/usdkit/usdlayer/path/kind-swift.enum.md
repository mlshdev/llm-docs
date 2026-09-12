> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/kind-swift.enum](https://developer.apple.com/documentation/usdkit/usdlayer/path/kind-swift.enum)

# USDLayer.Path.Kind

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The classification of the path’s leaf element.

## Declaration

```swift
enum Kind
```

## Topics

### Enumeration Cases

- [USDLayer.Path.Kind.absoluteRoot](kind-swift.enum/absoluteroot.md): The path is the absolute root, `/`.
- [USDLayer.Path.Kind.empty](kind-swift.enum/empty.md): The path is empty.
- [USDLayer.Path.Kind.expression](kind-swift.enum/expression.md): Connection expression path. Legacy USD syntax retained for classifying paths parsed from older USDA data.
- [USDLayer.Path.Kind.mapper](kind-swift.enum/mapper.md): Connection mapper path. Legacy USD syntax retained for classifying paths parsed from older USDA data.
- [USDLayer.Path.Kind.mapperArgument](kind-swift.enum/mapperargument.md): Mapper-argument path. Legacy USD syntax retained for classifying paths parsed from older USDA data.
- [USDLayer.Path.Kind.prim](kind-swift.enum/prim.md): The path identifies a prim.
- [USDLayer.Path.Kind.primVariantSelection](kind-swift.enum/primvariantselection.md): The path is a variant selection.
- [USDLayer.Path.Kind.property](kind-swift.enum/property.md): The path identifies a property on a prim or relationship target.
- [USDLayer.Path.Kind.target](kind-swift.enum/target.md): The path is a relationship target.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
