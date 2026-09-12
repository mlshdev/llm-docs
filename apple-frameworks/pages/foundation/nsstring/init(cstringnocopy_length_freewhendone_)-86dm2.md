> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(cstringnocopy:length:freewhendone:)-86dm2](https://developer.apple.com/documentation/foundation/nsstring/init(cstringnocopy:length:freewhendone:)-86dm2)

# init(CStringNoCopy:length:freeWhenDone:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.

> Use [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md) instead.

## Declaration

```swift
convenience init?(CStringNoCopy bytes: UnsafeMutablePointer<CChar>, length: Int, freeWhenDone freeBuffer: Bool)
```

<a id="Discussion"></a>

## Discussion

This method converts `length` \* `sizeof(char)` bytes from `cString` and doesn’t stop short at a zero character. `cString` must contain data in the default C-string encoding and may not be `NULL`. The receiver becomes the owner of `cString`; if `flag` is [true](https://developer.apple.com/documentation/swift/true) it will free the memory when it no longer needs it, but if `flag` is [false](https://developer.apple.com/documentation/swift/false) it won’t. Returns an initialized object, which might be different from the original receiver.

You can use this method to create an immutable string from an immutable (`const char *`) C-string buffer. If you receive a warning message, you can disregard it; its purpose is simply to warn you that the C string passed as the method’s first argument may be modified. If you make certain the `freeWhenDone` argument to `initWithStringNoCopy` is [false](https://developer.apple.com/documentation/swift/false), the C string passed as the method’s first argument cannot be modified, so you can safely use `initWithStringNoCopy` to create an immutable string from an immutable (`const char *`) C-string buffer.

## See Also

### Deprecated

- [string(withCString:)](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [init(CString:)](init%28cstring_%29-vkuo.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withCString:length:)](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [init(CString:length:)](init%28cstring_length_%29-5ure3.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
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
