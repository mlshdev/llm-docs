> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf8cstring](https://developer.apple.com/documentation/swift/string/utf8cstring)

# utf8CString

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A contiguously stored null-terminated UTF-8 representation of the string.

## Declaration

```swift
var utf8CString: ContiguousArray<CChar> { get }
```

<a id="discussion"></a>

## Discussion

To access the underlying memory, invoke `withUnsafeBufferPointer` on the array.

```swift
let s = "Hello!"
let bytes = s.utf8CString
print(bytes)
// Prints "[72, 101, 108, 108, 111, 33, 0]"

bytes.withUnsafeBufferPointer { ptr in
    print(strlen(ptr.baseAddress!))
}
// Prints "6"
```

## See Also

### Getting C Strings

- [withCString(\_:)](withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
- [withCString(encodedAs:\_:)](withcstring%28encodedas___%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.
