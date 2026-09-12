> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/init(_:)-2oo2e](https://developer.apple.com/documentation/swift/unicode/scalar/init(_:)-2oo2e)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Unicode scalar with the specified numeric value.

## Declaration

```swift
init(_ v: UInt8)
```

## Parameters

- `v`: The code point to use for the scalar.

<a id="discussion"></a>

## Discussion

For example, the following code sample creates a `Unicode.Scalar` instance with a value of `"7"`:

```swift
let codepoint: UInt8 = 55
let seven = Unicode.Scalar(codepoint)
print(seven)
// Prints "7"
```

## See Also

### Creating a Scalar

- [init(\_:)](init%28__%29-5d6us.md): Creates a duplicate of the given Unicode scalar.
- [init(\_:)](init%28__%29-9eo1y.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-18u1m.md): Creates a Unicode scalar with the specified numeric value.
- [init(\_:)](init%28__%29-96l5f.md): Creates a Unicode scalar with the specified numeric value.
- [init(unicodeScalarLiteral:)](init%28unicodescalarliteral_%29.md): Creates a Unicode scalar with the specified value.
- [init(\_:)](init%28__%29-4p868.md): Instantiates an instance of the conforming type from a string representation.
