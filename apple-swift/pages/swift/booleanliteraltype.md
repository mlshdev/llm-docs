> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/booleanliteraltype](https://developer.apple.com/documentation/swift/booleanliteraltype)

# BooleanLiteralType

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default type for an otherwise-unconstrained Boolean literal.

## Declaration

```swift
typealias BooleanLiteralType = Bool
```

<a id="discussion"></a>

## Discussion

When you create a constant or variable using one of the Boolean literals `true` or `false`, the resulting type is determined by the `BooleanLiteralType` alias. For example:

```swift
let isBool = true
print("isBool is a '\(type(of: isBool))'")
// Prints "isBool is a 'Bool'"
```

The type aliased by `BooleanLiteralType` must conform to the `ExpressibleByBooleanLiteral` protocol.

## See Also

### Basic Values

- [IntegerLiteralType](integerliteraltype.md): The default type for an otherwise-unconstrained integer literal.
- [FloatLiteralType](floatliteraltype.md): The default type for an otherwise-unconstrained floating-point literal.
