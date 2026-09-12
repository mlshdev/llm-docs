> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/init(unicodescalarliteral:)](https://developer.apple.com/documentation/swift/unicode/scalar/init(unicodescalarliteral:))

# init(unicodeScalarLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Unicode scalar with the specified value.

## Declaration

```swift
init(unicodeScalarLiteral value: Unicode.Scalar)
```

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It may be used by the compiler when you use a string literal to initialize a `Unicode.Scalar` instance.

```swift
let letterK: Unicode.Scalar = "K"
print(letterK)
// Prints "K"
```

In this example, the assignment to the `letterK` constant is handled by this initializer behind the scenes.

## See Also

### Creating a Scalar

- [init(\_:)](init%28__%29-2oo2e.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-5d6us.md): Creates a duplicate of the given Unicode scalar.
- [init(\_:)](init%28__%29-9eo1y.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-18u1m.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-96l5f.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-4p868.md): Instantiates an instance of the conforming type from a string representation.
