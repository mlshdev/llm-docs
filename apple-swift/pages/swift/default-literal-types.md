> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/default-literal-types](https://developer.apple.com/documentation/swift/default-literal-types)

# Default Literal Types

**Framework:** Swift  
**Kind:** API Collection

Type aliases representing the concrete type that a literal takes when no other type information is provided.

<a id="Overview"></a>

## Overview

This example declares the `numberOfCookies` constant, using an integer literal to express its value:

```swift
let numberOfCookies = 5
// type(of: numberOfCookies) == Int.self
```

When a literal expression is written with no type information, Swift uses these type aliases to determine what type to use for the expression. In this case, the `numberOfCookies` constant has the default type for an integer literal, `Int`, as designated by the `IntegerLiteralType` type alias.

## Topics

### Basic Values

- [BooleanLiteralType](booleanliteraltype.md): The default type for an otherwise-unconstrained Boolean literal.
- [IntegerLiteralType](integerliteraltype.md): The default type for an otherwise-unconstrained integer literal.
- [FloatLiteralType](floatliteraltype.md): The default type for an otherwise-unconstrained floating-point literal.

### Strings and Text

- [StringLiteralType](stringliteraltype.md): The default type for an otherwise-unconstrained string literal.
- [ExtendedGraphemeClusterType](extendedgraphemeclustertype.md): The default type for an otherwise-unconstrained Unicode extended grapheme cluster literal.
- [UnicodeScalarType](unicodescalartype.md): The default type for an otherwise-unconstrained unicode scalar literal.
