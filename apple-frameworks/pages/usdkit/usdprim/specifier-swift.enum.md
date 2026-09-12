> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/specifier-swift.enum](https://developer.apple.com/documentation/usdkit/usdprim/specifier-swift.enum)

# USDPrim.Specifier

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

How a prim definition behaves in composition.

## Declaration

```swift
enum Specifier
```

## Topics

### Enumeration Cases

- [USDPrim.Specifier.class](specifier-swift.enum/class.md): Defines an abstract template for inheritance.
- [USDPrim.Specifier.def](specifier-swift.enum/def.md): Creates a concrete prim.
- [USDPrim.Specifier.over](specifier-swift.enum/over.md): Applies only if the prim exists in a weaker layer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Identifying the prim

- [path](path.md): The complete scene path to this prim, relative to its stage.
- [primPath](primpath.md): The complete scene path to this prim, relative to its stage.
- [isValid](isvalid.md): A Boolean value indicating whether this prim is valid.
- [specifier](specifier-swift.property.md): The specifier that describes how this prim is defined, such as `def`, `over`, or `class`.
- [stage](stage.md): The stage that owns this prim.
- [parent](parent.md): The immediate parent prim of this prim.
- [description](description.md): A summary description of this prim.
