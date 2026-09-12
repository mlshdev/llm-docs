> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/addingpercentescapes(using:)](https://developer.apple.com/documentation/foundation/nsstring/addingpercentescapes(using:))

# addingPercentEscapes(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

> Use [addingPercentEncoding(withAllowedCharacters:)](addingpercentencoding%28withallowedcharacters_%29.md) instead.

## Declaration

```swift
func addingPercentEscapes(using enc: UInt) -> String?
```

## Parameters

- `enc`: The encoding to use for the returned string. If you are uncertain of the correct encoding you should use [NSUTF8StringEncoding](../nsutf8stringencoding.md).

<a id="return-value"></a>

## Return Value

A representation of the receiver using `encoding` to determine the percent escapes necessary to convert the receiver into a legal URL string. Returns `nil` if `encoding` cannot encode a particular character.

<a id="Discussion"></a>

## Discussion

It may be difficult to use this function to “clean up” unescaped or partially escaped URL strings where sequences are unpredictable. See [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](../../corefoundation/cfurlcreatestringbyaddingpercentescapes%28__________%29.md) for more information.

## See Also

### Related Documentation

- [addingPercentEncoding(withAllowedCharacters:)](addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.
- [removingPercentEncoding](removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

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

# stringByAddingPercentEscapesUsingEncoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

> Use [stringByAddingPercentEncodingWithAllowedCharacters:](addingpercentencoding%28withallowedcharacters_%29.md) instead.

## Declaration

```objectivec
- (NSString *) stringByAddingPercentEscapesUsingEncoding:(NSStringEncoding) enc;
```

## Parameters

- `enc`: The encoding to use for the returned string. If you are uncertain of the correct encoding you should use [NSUTF8StringEncoding](../nsutf8stringencoding.md).

<a id="return-value"></a>

## Return Value

A representation of the receiver using `encoding` to determine the percent escapes necessary to convert the receiver into a legal URL string. Returns `nil` if `encoding` cannot encode a particular character.

<a id="Discussion"></a>

## Discussion

It may be difficult to use this function to “clean up” unescaped or partially escaped URL strings where sequences are unpredictable. See [CFURLCreateStringByAddingPercentEscapes](../../corefoundation/cfurlcreatestringbyaddingpercentescapes%28__________%29.md) for more information.

## See Also

### Related Documentation

- [stringByAddingPercentEncodingWithAllowedCharacters:](addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.
- [stringByRemovingPercentEncoding](removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

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
- [getCString:](getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:](getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
