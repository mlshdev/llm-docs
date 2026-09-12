> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/getcstring(_:)](https://developer.apple.com/documentation/foundation/nsstring/getcstring(_:))

# getCString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invokes [getCString(\_:maxLength:range:remaining:)](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.

> Use [cString(using:)](cstring%28using_%29.md) or [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) instead.

## Declaration

```swift
func getCString(_ bytes: UnsafeMutablePointer<CChar>)
```

<a id="Discussion"></a>

## Discussion

`buffer` must be large enough to contain the resulting C-string plus a terminating NULL character (which this method adds—`[string cStringLength]`).

Raises an `NSCharacterConversionException` if the receiver can’t be represented in the default C-string encoding without loss of information. Use [canBeConverted(to:)](canbeconverted%28to_%29.md) if necessary to check whether a string can be losslessly converted to the default C-string encoding. If it can’t, use [lossyCString()](lossycstring%28%29.md) or [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) to get a C-string representation with some loss of information.

## See Also

### Related Documentation

- [cString(using:)](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [utf8String](utf8string.md): A null-terminated UTF8 representation of the string.
- [getCString(\_:maxLength:encoding:)](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.

### Deprecated

- [string(withCString:)](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [init(CString:)](init%28cstring_%29-vkuo.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
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

# getCString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.4) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.

> Use [cStringUsingEncoding:](cstring%28using_%29.md) or [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) instead.

## Declaration

```objectivec
- (void) getCString:(char *) bytes;
```

<a id="Discussion"></a>

## Discussion

`buffer` must be large enough to contain the resulting C-string plus a terminating NULL character (which this method adds—`[string cStringLength]`).

Raises an `NSCharacterConversionException` if the receiver can’t be represented in the default C-string encoding without loss of information. Use [canBeConvertedToEncoding:](canbeconverted%28to_%29.md) if necessary to check whether a string can be losslessly converted to the default C-string encoding. If it can’t, use [lossyCString](lossycstring%28%29.md) or [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) to get a C-string representation with some loss of information.

## See Also

### Related Documentation

- [cStringUsingEncoding:](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [UTF8String](utf8string.md): A null-terminated UTF8 representation of the string.
- [getCString:maxLength:encoding:](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.

### Deprecated

- [stringWithCString:](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [stringWithCString:length:](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [stringWithContentsOfFile:](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [stringWithContentsOfURL:](string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters:](getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString](cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString](lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString:maxLength:](getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByAddingPercentEscapesUsingEncoding:](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
