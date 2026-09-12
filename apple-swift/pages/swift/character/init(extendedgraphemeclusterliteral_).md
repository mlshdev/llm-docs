> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/init(extendedgraphemeclusterliteral:)](https://developer.apple.com/documentation/swift/character/init(extendedgraphemeclusterliteral:))

# init(extendedGraphemeClusterLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a character with the specified value.

## Declaration

```swift
init(extendedGraphemeClusterLiteral value: Character)
```

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It is used by the compiler when you use a string literal to initialize a `Character` instance. For example:

```swift
let oBreve: Character = "o\u{306}"
print(oBreve)
// Prints "ŏ"
```

The assignment to the `oBreve` constant calls this initializer behind the scenes.

## See Also

### Infrequently Used Functionality

- [init(unicodeScalarLiteral:)](init%28unicodescalarliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.UnicodeScalarLiteralType`.
