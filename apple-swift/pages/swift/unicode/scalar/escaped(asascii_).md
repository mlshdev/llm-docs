> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/escaped(asascii:)](https://developer.apple.com/documentation/swift/unicode/scalar/escaped(asascii:))

# escaped(asASCII:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the Unicode scalar.

## Declaration

```swift
func escaped(asASCII forceASCII: Bool) -> String
```

## Parameters

- `forceASCII`: Pass `true` if you need the result to use only ASCII characters; otherwise, pass `false`.

<a id="return-value"></a>

## Return Value

A string representation of the scalar.

<a id="discussion"></a>

## Discussion

Scalar values representing characters that are normally unprintable or that otherwise require escaping are escaped with a backslash.

```swift
let tab = Unicode.Scalar(9)!
print(tab)
// Prints " "
print(tab.escaped(asASCII: false))
// Prints "\t"
```

When the `forceASCII` parameter is `true`, a `Unicode.Scalar` instance with a value greater than 127 is represented using an escaped numeric value; otherwise, non-ASCII characters are represented using their typical string value.

```swift
let bap = Unicode.Scalar(48165)!
print(bap.escaped(asASCII: false))
// Prints "밥"
print(bap.escaped(asASCII: true))
// Prints "\u{BC25}"
```

## See Also

### Printing and Displaying a Scalar

- [description](description.md): A textual representation of the Unicode scalar.
- [write(to:)](write%28to_%29.md): Writes the textual representation of the Unicode scalar into the given output stream.
- [utf16](utf16.md)
- [Unicode.Scalar.UTF16View](utf16view.md)
- [debugDescription](debugdescription.md): An escaped textual representation of the Unicode scalar, suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the `Unicode.Scalar` instance.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Unicode.Scalar` instance.
