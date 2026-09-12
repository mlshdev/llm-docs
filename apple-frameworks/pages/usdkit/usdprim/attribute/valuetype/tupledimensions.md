> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/valuetype/tupledimensions](https://developer.apple.com/documentation/usdkit/usdprim/attribute/valuetype/tupledimensions)

# USDPrim.Attribute.ValueType.TupleDimensions

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The shape of a value type’s components.

## Declaration

```swift
enum TupleDimensions
```

<a id="overview"></a>

## Overview

- `scalar`: a single value (e.g. `Float`, `Int`).
- `vector(n)`: an n-component tuple (e.g. `Float3` is `.vector(3)`).
- `matrix(rows:cols:)`: a 2D tuple (e.g. `Matrix4d` is `.matrix(rows: 4, cols: 4)`).

## Topics

### Enumeration Cases

- [USDPrim.Attribute.ValueType.TupleDimensions.matrix(rows:columns:)](tupledimensions/matrix%28rows_columns_%29.md)
- [USDPrim.Attribute.ValueType.TupleDimensions.scalar](tupledimensions/scalar.md)
- [USDPrim.Attribute.ValueType.TupleDimensions.vector(\_:)](tupledimensions/vector%28__%29.md)

### Instance Properties

- [componentCount](tupledimensions/componentcount.md): The total number of components across all dimensions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
