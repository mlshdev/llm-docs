> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/availablestringencodings](https://developer.apple.com/documentation/swift/string/availablestringencodings)

# availableStringEncodings

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the encodings that strings support in the application’s environment.

## Declaration

```swift
static var availableStringEncodings: [String.Encoding] { get }
```

## See Also

### Working with Encodings

- [defaultCStringEncoding](defaultcstringencoding.md): The C-string encoding assumed for any method accepting a C string as an argument.
- [localizedName(of:)](localizedname%28of_%29.md): Returns a human-readable string giving the name of the specified encoding.
- [isContiguousUTF8](iscontiguousutf8.md): Returns whether this string’s storage contains validly-encoded UTF-8 contents in contiguous memory.
- [makeContiguousUTF8()](makecontiguousutf8%28%29.md): If this string is not contiguous, make it so. If this mutates the string, it will invalidate any pre-existing indices.
- [withUTF8(\_:)](withutf8%28__%29.md): Runs `body` over the content of this string in contiguous memory. If this string is not contiguous, this will first make it contiguous, which will also speed up subsequent access. If this mutates the string, it will invalidate any pre-existing indices.
