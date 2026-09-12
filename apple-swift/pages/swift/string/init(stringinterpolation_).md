> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(stringinterpolation:)](https://developer.apple.com/documentation/swift/string/init(stringinterpolation:))

# init(stringInterpolation:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from an interpolated string literal.

## Declaration

```swift
init(stringInterpolation: DefaultStringInterpolation)
```

<a id="discussion"></a>

## Discussion

You don’t need to call this initializer directly. It’s used by the compiler when you create a string using string interpolation. Instead, use string interpolation to create a new string by including values, literals, variables, or expressions enclosed in parentheses, prefixed by a backslash (`\(`…`)`).

```swift
let price = 2
let number = 3
let message = """
              If one cookie costs \(price) dollars, \
              \(number) cookies cost \(price * number) dollars.
              """
print(message)
// Prints "If one cookie costs 2 dollars, 3 cookies cost 6 dollars."
```

## See Also

### Infrequently Used Functionality

- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [init(\_:)](init%28__%29-5a5lw.md)
- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates an instance initialized to the given string value.
- [init(unicodeScalarLiteral:)](init%28unicodescalarliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.UnicodeScalarLiteralType`.
- [init(extendedGraphemeClusterLiteral:)](init%28extendedgraphemeclusterliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.StringLiteralType`.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `String` instance.
- [withContiguousStorageIfAvailable(\_:)](withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.
