> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaximumstringlength](https://developer.apple.com/documentation/foundation/nsmaximumstringlength)

# NSMaximumStringLength

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Maximum number of characters in an `NSString` object.

> This constant is not available in macOS 10.5 and later.

## Declaration

```objectivec
#define NSMaximumStringLength
```

## See Also

### Deprecated

- [stringWithCString:](nsstring/string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [stringWithCString:length:](nsstring/string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [stringWithContentsOfFile:](nsstring/string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [initWithContentsOfFile:](nsstring/init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [stringWithContentsOfURL:](nsstring/string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [writeToFile:atomically:](nsstring/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [writeToURL:atomically:](nsstring/write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters:](nsstring/getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString](nsstring/cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString](nsstring/lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength](nsstring/cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString:](nsstring/getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:](nsstring/getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByAddingPercentEscapesUsingEncoding:](nsstring/addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
