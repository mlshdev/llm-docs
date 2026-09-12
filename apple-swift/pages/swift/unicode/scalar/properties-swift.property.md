> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.property](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.property)

# properties

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Properties of this scalar defined by the Unicode standard.

## Declaration

```swift
var properties: Unicode.Scalar.Properties { get }
```

<a id="discussion"></a>

## Discussion

Use this property to access the Unicode properties of a Unicode scalar value. The following code tests whether a string contains any math symbols:

```swift
let question = "Which is larger, 3 * 3 * 3 or 10 + 10 + 10?"
let hasMathSymbols = question.unicodeScalars.contains(where: {
    $0.properties.isMath
})
// hasMathSymbols == true
```

## See Also

### Inspecting a Scalar

- [value](value.md): A numeric representation of the Unicode scalar.
- [Unicode.Scalar.Properties](properties-swift.struct.md): A value that provides access to properties of a Unicode scalar that are defined by the Unicode standard.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [isASCII](isascii.md): A Boolean value indicating whether the Unicode scalar is an ASCII character.
