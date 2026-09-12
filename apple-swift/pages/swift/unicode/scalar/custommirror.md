> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/custommirror](https://developer.apple.com/documentation/swift/unicode/scalar/custommirror)

# customMirror

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mirror that reflects the `Unicode.Scalar` instance.

## Declaration

```swift
var customMirror: Mirror { get }
```

## See Also

### Printing and Displaying a Scalar

- [description](description.md): A textual representation of the Unicode scalar.
- [write(to:)](write%28to_%29.md): Writes the textual representation of the Unicode scalar into the given output stream.
- [escaped(asASCII:)](escaped%28asascii_%29.md): Returns a string representation of the Unicode scalar.
- [utf16](utf16.md)
- [Unicode.Scalar.UTF16View](utf16view.md)
- [debugDescription](debugdescription.md): An escaped textual representation of the Unicode scalar, suitable for debugging.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Unicode.Scalar` instance.
