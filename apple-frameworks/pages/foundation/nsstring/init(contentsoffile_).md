> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(contentsoffile:)](https://developer.apple.com/documentation/foundation/nsstring/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.

> Use [init(contentsOfFile:encoding:)](init%28contentsoffile_encoding_%29.md) or [init(contentsOfFile:usedEncoding:)](init%28contentsoffile_usedencoding_%29.md) instead.

## Declaration

```swift
convenience init?(contentsOfFile path: String)
```

<a id="Discussion"></a>

## Discussion

Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`. If the contents begin with a byte-order mark (`U+FEFF` or `U+FFFE`), interprets the contents as UTF-16 code units; otherwise interprets the contents as data in the default C string encoding. Returns an initialized object, which might be different from the original receiver, or `nil` if the file can’t be opened.

## See Also

### Related Documentation

- [init(contentsOfFile:encoding:)](init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [init(contentsOfFile:usedEncoding:)](init%28contentsoffile_usedencoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

### Deprecated

- [string(withCString:)](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [init(CString:)](init%28cstring_%29-vkuo.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withCString:length:)](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [init(CString:length:)](init%28cstring_length_%29-5ure3.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [init(CStringNoCopy:length:freeWhenDone:)](init%28cstringnocopy_length_freewhendone_%29-86dm2.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withContentsOfFile:)](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [string(withContentsOf:)](string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the location named by a given URL.
- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [write(to:atomically:)](write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters(\_:)](getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString()](cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString()](lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength()](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString(\_:)](getcstring%28__%29.md): Deprecated. Invokes [getCString(\_:maxLength:range:remaining:)](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.

# initWithContentsOfFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.4) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.

> Use [initWithContentsOfFile:encoding:error:](init%28contentsoffile_encoding_%29.md) or [initWithContentsOfFile:usedEncoding:error:](init%28contentsoffile_usedencoding_%29.md) instead.

## Declaration

```objectivec
- (id) initWithContentsOfFile:(NSString *) path;
```

<a id="Discussion"></a>

## Discussion

Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`. If the contents begin with a byte-order mark (`U+FEFF` or `U+FFFE`), interprets the contents as UTF-16 code units; otherwise interprets the contents as data in the default C string encoding. Returns an initialized object, which might be different from the original receiver, or `nil` if the file can’t be opened.

## See Also

### Related Documentation

- [initWithContentsOfFile:encoding:error:](init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [initWithContentsOfFile:usedEncoding:error:](init%28contentsoffile_usedencoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

### Deprecated

- [stringWithCString:](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [stringWithCString:length:](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [stringWithContentsOfFile:](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [stringWithContentsOfURL:](string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters:](getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString](cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString](lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString:](getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:](getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByAddingPercentEscapesUsingEncoding:](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
