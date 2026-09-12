> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/hashvalue](https://developer.apple.com/documentation/swift/double/hashvalue)

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

- [init()](init%28%29.md)
- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an instance initialized to the specified floating-point value.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(integerLiteral:)](init%28integerliteral_%29-6hc7j.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Double.FloatLiteralType](floatliteraltype.md): A type that represents a floating-point literal.
- [Double.IntegerLiteralType](integerliteraltype.md): A type that represents an integer literal.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [Double.Stride](stride.md): A type that represents the distance between two values.
- [write(to:)](write%28to_%29.md): Writes a textual representation of this instance into the given output stream.
