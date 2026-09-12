> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(cstring:)-vkuo](https://developer.apple.com/documentation/foundation/nsstring/init(cstring:)-vkuo)

# init(CString:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.

> Use `NSString/init(CString:encoding:)-20f9h` instead.

## Declaration

```swift
convenience init?(CString bytes: UnsafePointer<CChar>)
```

<a id="Discussion"></a>

## Discussion

`cString` must be a zero-terminated C string in the default C string encoding, and may not be `NULL`. Returns an initialized object, which might be different from the original receiver.

To create an immutable string from an immutable C string buffer, do not attempt to use this method. Instead, use [init(CStringNoCopy:length:freeWhenDone:)](init%28cstringnocopy_length_freewhendone_%29-86dm2.md).

## See Also

### Deprecated

- [string(withCString:)](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [string(withCString:length:)](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [init(CString:length:)](init%28cstring_length_%29-5ure3.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [init(CStringNoCopy:length:freeWhenDone:)](init%28cstringnocopy_length_freewhendone_%29-86dm2.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withContentsOfFile:)](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [string(withContentsOf:)](string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the location named by a given URL.
- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [write(to:atomically:)](write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters(\_:)](getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString()](cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString()](lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength()](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString(\_:)](getcstring%28__%29.md): Deprecated. Invokes [getCString(\_:maxLength:range:remaining:)](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
