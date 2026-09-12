> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/hashvalue](https://developer.apple.com/documentation/swift/int/hashvalue)

# hashValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The hash value.

## Declaration

```swift
var hashValue: Int { get }
```

<a id="discussion"></a>

## Discussion

Hash values are not guaranteed to be equal across different executions of your program. Do not save hash values to use during a future execution.

> **Important**

> `hashValue` is deprecated as a `Hashable` requirement. To conform to `Hashable`, implement the `hash(into:)` requirement instead. The compiler provides an implementation for `hashValue` for you.

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md): Creates a new value equal to zero.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Int.IntegerLiteralType](integerliteraltype.md): A type that represents an integer literal.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [Int.Stride](stride.md): A type that represents the distance between two values.
