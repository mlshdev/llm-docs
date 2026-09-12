> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebyunicodescalarliteral/unicodescalarliteraltype](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral/unicodescalarliteraltype)

# UnicodeScalarLiteralType

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents a Unicode scalar literal.

## Declaration

```swift
associatedtype UnicodeScalarLiteralType : _ExpressibleByBuiltinUnicodeScalarLiteral
```

<a id="discussion"></a>

## Discussion

Valid types for `UnicodeScalarLiteralType` are `Unicode.Scalar`, `Character`, `String`, and `StaticString`.
