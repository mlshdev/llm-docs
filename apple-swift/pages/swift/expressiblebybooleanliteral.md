> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebybooleanliteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)

# ExpressibleByBooleanLiteral

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be initialized with the Boolean literals `true` and `false`.

## Declaration

```swift
protocol ExpressibleByBooleanLiteral
```

<a id="overview"></a>

## Overview

`Bool`, `DarwinBoolean`, `ObjCBool`, and `WindowsBool` are treated as Boolean values. Expanding this set to include types that represent more than simple Boolean values is discouraged.

To add `ExpressibleByBooleanLiteral` conformance to your custom type, implement the `init(booleanLiteral:)` initializer that creates an instance of your type with the given Boolean value.

## Topics

### Associated Types

- [BooleanLiteralType](expressiblebybooleanliteral/booleanliteraltype.md): A type that represents a Boolean literal, such as `Bool`.

### Initializers

- [init(booleanLiteral:)](expressiblebybooleanliteral/init%28booleanliteral_%29.md): Creates an instance initialized to the given Boolean value.

## Relationships

### Conforming Types

- [Bool](bool.md)

## See Also

### Value Literals

- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md): A type that can be initialized with an integer literal.
- [ExpressibleByFloatLiteral](expressiblebyfloatliteral.md): A type that can be initialized with a floating-point literal.
- [ExpressibleByNilLiteral](expressiblebynilliteral.md): A type that can be initialized using the nil literal, `nil`.
- [StaticBigInt](staticbigint.md): An immutable arbitrary-precision signed integer.
