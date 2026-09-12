> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/withutf8(_:)](https://developer.apple.com/documentation/swift/string/withutf8(_:))

# withUTF8(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Runs `body` over the content of this string in contiguous memory. If this string is not contiguous, this will first make it contiguous, which will also speed up subsequent access. If this mutates the string, it will invalidate any pre-existing indices.

## Declaration

```swift
mutating func withUTF8<R, E>(_ body: (UnsafeBufferPointer<UInt8>) throws(E) -> R) throws(E) -> R where E : Error
```

<a id="discussion"></a>

## Discussion

Note that it is unsafe to escape the pointer provided to `body`. For example, strings of up to 15 UTF-8 code units in length may be represented in a small-string representation, and thus will be spilled into temporary stack space which is invalid after `withUTF8` finishes execution.

Complexity: O(n) if non-contiguous, O(1) if already contiguous

## See Also

### Working with Encodings

- [availableStringEncodings](availablestringencodings.md): An array of the encodings that strings support in the application’s environment.
- [defaultCStringEncoding](defaultcstringencoding.md): The C-string encoding assumed for any method accepting a C string as an argument.
- [localizedName(of:)](localizedname%28of_%29.md): Returns a human-readable string giving the name of the specified encoding.
- [isContiguousUTF8](iscontiguousutf8.md): Returns whether this string’s storage contains validly-encoded UTF-8 contents in contiguous memory.
- [makeContiguousUTF8()](makecontiguousutf8%28%29.md): If this string is not contiguous, make it so. If this mutates the string, it will invalidate any pre-existing indices.
