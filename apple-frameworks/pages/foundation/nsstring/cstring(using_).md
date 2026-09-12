> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/cstring(using:)](https://developer.apple.com/documentation/foundation/nsstring/cstring(using:))

# cString(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a representation of the string as a C string using a given encoding.

## Declaration

```swift
func cString(using encoding: UInt) -> UnsafePointer<CChar>?
```

## Parameters

- `encoding`: The encoding for the returned C string. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="return-value"></a>

## Return Value

A C string representation of the receiver using the encoding specified by `encoding`. Returns `NULL` if the receiver cannot be losslessly converted to `encoding`.

<a id="Discussion"></a>

## Discussion

The returned C string is guaranteed to be valid only until either the receiver is freed, or until the current memory is emptied, whichever occurs first. You should copy the C string or use [getCString(\_:maxLength:encoding:)](getcstring%28__maxlength_encoding_%29.md) if it needs to store the C string beyond this time.

You can use [canBeConverted(to:)](canbeconverted%28to_%29.md) to check whether a string can be losslessly converted to `encoding`. If it can’t, you can use [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) to get a C-string representation using `encoding`, allowing some loss of information (note that the data returned by [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) is not a strict C-string since it does not have a `NULL` terminator).

<a id="Special-Considerations"></a>

### Special Considerations

UTF-16 and UTF-32 are not considered to be C string encodings, and should not be used with this method—the results of passing [NSUTF16StringEncoding](../nsutf16stringencoding.md), [NSUTF32StringEncoding](../nsutf32stringencoding.md), or any of their variants are undefined.

## See Also

### Related Documentation

- [canBeConverted(to:)](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [getCString(\_:)](getcstring%28__%29.md): Deprecated. Invokes [getCString(\_:maxLength:range:remaining:)](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [cStringLength()](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.

### Getting C Strings

- [getCString(\_:maxLength:encoding:)](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.
- [utf8String](utf8string.md): A null-terminated UTF8 representation of the string.

# cStringUsingEncoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a representation of the string as a C string using a given encoding.

## Declaration

```objectivec
- (const char *) cStringUsingEncoding:(NSStringEncoding) encoding;
```

## Parameters

- `encoding`: The encoding for the returned C string. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="return-value"></a>

## Return Value

A C string representation of the receiver using the encoding specified by `encoding`. Returns `NULL` if the receiver cannot be losslessly converted to `encoding`.

<a id="Discussion"></a>

## Discussion

The returned C string is guaranteed to be valid only until either the receiver is freed, or until the current memory is emptied, whichever occurs first. You should copy the C string or use [getCString:maxLength:encoding:](getcstring%28__maxlength_encoding_%29.md) if it needs to store the C string beyond this time.

You can use [canBeConvertedToEncoding:](canbeconverted%28to_%29.md) to check whether a string can be losslessly converted to `encoding`. If it can’t, you can use [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) to get a C-string representation using `encoding`, allowing some loss of information (note that the data returned by [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) is not a strict C-string since it does not have a `NULL` terminator).

<a id="Special-Considerations"></a>

### Special Considerations

UTF-16 and UTF-32 are not considered to be C string encodings, and should not be used with this method—the results of passing [NSUTF16StringEncoding](../nsutf16stringencoding.md), [NSUTF32StringEncoding](../nsutf32stringencoding.md), or any of their variants are undefined.

## See Also

### Related Documentation

- [canBeConvertedToEncoding:](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [getCString:](getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [cStringLength](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.

### Getting C Strings

- [getCString:maxLength:encoding:](getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.
- [UTF8String](utf8string.md): A null-terminated UTF8 representation of the string.
