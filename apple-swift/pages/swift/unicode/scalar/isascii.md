> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/isascii](https://developer.apple.com/documentation/swift/unicode/scalar/isascii)

# isASCII

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the Unicode scalar is an ASCII character.

## Declaration

```swift
var isASCII: Bool { get }
```

<a id="discussion"></a>

## Discussion

ASCII characters have a scalar value between 0 and 127, inclusive. For example:

```swift
let canyon = "Cañón"
for scalar in canyon.unicodeScalars {
    print(scalar, scalar.isASCII, scalar.value)
}
// Prints "C true 67"
// Prints "a true 97"
// Prints "ñ false 241"
// Prints "ó false 243"
// Prints "n true 110"
```

## See Also

### Inspecting a Scalar

- [value](value.md): A numeric representation of the Unicode scalar.
- [properties](properties-swift.property.md): Properties of this scalar defined by the Unicode standard.
- [Unicode.Scalar.Properties](properties-swift.struct.md): A value that provides access to properties of a Unicode scalar that are defined by the Unicode standard.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
