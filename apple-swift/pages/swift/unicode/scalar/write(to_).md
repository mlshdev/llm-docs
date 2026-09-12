> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/write(to:)](https://developer.apple.com/documentation/swift/unicode/scalar/write(to:))

# write(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the textual representation of the Unicode scalar into the given output stream.

## Declaration

```swift
func write<Target>(to target: inout Target) where Target : TextOutputStream
```

## Parameters

- `target`: An output stream.

## See Also

### Printing and Displaying a Scalar

- [description](description.md): A textual representation of the Unicode scalar.
- [escaped(asASCII:)](escaped%28asascii_%29.md): Returns a string representation of the Unicode scalar.
- [utf16](utf16.md)
- [Unicode.Scalar.UTF16View](utf16view.md)
- [debugDescription](debugdescription.md): An escaped textual representation of the Unicode scalar, suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the `Unicode.Scalar` instance.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Unicode.Scalar` instance.
