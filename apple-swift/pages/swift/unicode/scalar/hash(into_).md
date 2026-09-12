> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/hash(into:)](https://developer.apple.com/documentation/swift/unicode/scalar/hash(into:))

# hash(into:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to use when combining the components of this instance.

## See Also

### Inspecting a Scalar

- [value](value.md): A numeric representation of the Unicode scalar.
- [properties](properties-swift.property.md): Properties of this scalar defined by the Unicode standard.
- [Unicode.Scalar.Properties](properties-swift.struct.md): A value that provides access to properties of a Unicode scalar that are defined by the Unicode standard.
- [isASCII](isascii.md): A Boolean value indicating whether the Unicode scalar is an ASCII character.
