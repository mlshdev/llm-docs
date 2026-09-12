> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anykeypath](https://developer.apple.com/documentation/swift/anykeypath)

# AnyKeyPath

**Framework:** Swift  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type-erased key path, from any root type to any resulting value type.

## Declaration

```swift
class AnyKeyPath
```

## Topics

### Type Properties

- [rootType](anykeypath/roottype.md): The root type for this key path.
- [valueType](anykeypath/valuetype.md): The value type for this key path.

### Default Implementations

- [CustomDebugStringConvertible Implementations](anykeypath/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](anykeypath/equatable-implementations.md)
- [Hashable Implementations](anykeypath/hashable-implementations.md)

## Relationships

### Inherited By

- [PartialKeyPath](partialkeypath.md)

### Conforms To

- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)

## See Also

### Key Paths

- [KeyPath](keypath.md): A key path from a specific root type to a specific resulting value type.
- [PartialKeyPath](partialkeypath.md): A partially type-erased key path, from a concrete root type to any resulting value type.
