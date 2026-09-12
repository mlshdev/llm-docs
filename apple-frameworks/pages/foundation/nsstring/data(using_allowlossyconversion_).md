> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/data(using:allowlossyconversion:)](https://developer.apple.com/documentation/foundation/nsstring/data(using:allowlossyconversion:))

# data(using:allowLossyConversion:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.

## Declaration

```swift
func data(using encoding: UInt, allowLossyConversion lossy: Bool) -> Data?
```

## Parameters

- `encoding`: A string encoding. For possible values, see [NSStringEncoding](../nsstringencoding.md).
- `lossy`: If [true](https://developer.apple.com/documentation/swift/true), then allows characters to be removed or altered in conversion.

<a id="return-value"></a>

## Return Value

An `NSData` object containing a representation of the receiver encoded using `encoding`. Returns `nil` if `flag` is [false](https://developer.apple.com/documentation/swift/false) and the receiver can’t be converted without losing some information (such as accents or case).

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) and the receiver can’t be converted without losing some information, some characters may be removed or altered in conversion. For example, in converting a character from `NSUnicodeStringEncoding` to `NSASCIIStringEncoding`, the character ‘Á’ becomes ‘A’, losing the accent.

This method creates an external representation (with a byte order marker, if necessary, to indicate endianness) to ensure that the resulting `NSData` object can be written out to a file safely. The result of this method, when lossless conversion is made, is the default “plain text” format for encoding and is the recommended way to save or transmit a string object.

## See Also

### Working with Encodings

- [availableStringEncodings](availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncoding(for:encodingOptions:convertedString:usedLossyConversion:)](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedName(of:)](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConverted(to:)](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [data(using:)](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [fastestEncoding](fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [StringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

# dataUsingEncoding:allowLossyConversion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.

## Declaration

```objectivec
- (NSData *) dataUsingEncoding:(NSStringEncoding) encoding allowLossyConversion:(BOOL) lossy;
```

## Parameters

- `encoding`: A string encoding. For possible values, see [NSStringEncoding](../nsstringencoding.md).
- `lossy`: If [true](https://developer.apple.com/documentation/swift/true), then allows characters to be removed or altered in conversion.

<a id="return-value"></a>

## Return Value

An `NSData` object containing a representation of the receiver encoded using `encoding`. Returns `nil` if `flag` is [false](https://developer.apple.com/documentation/swift/false) and the receiver can’t be converted without losing some information (such as accents or case).

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) and the receiver can’t be converted without losing some information, some characters may be removed or altered in conversion. For example, in converting a character from `NSUnicodeStringEncoding` to `NSASCIIStringEncoding`, the character ‘Á’ becomes ‘A’, losing the accent.

This method creates an external representation (with a byte order marker, if necessary, to indicate endianness) to ensure that the resulting `NSData` object can be written out to a file safely. The result of this method, when lossless conversion is made, is the default “plain text” format for encoding and is the recommended way to save or transmit a string object.

## See Also

### Working with Encodings

- [availableStringEncodings](availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncodingForData:encodingOptions:convertedString:usedLossyConversion:](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedNameOfStringEncoding:](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConvertedToEncoding:](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [dataUsingEncoding:](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [fastestEncoding](fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [NSStringEncoding](../nsstringencoding.md): The following constants are provided by `NSString` as possible string encodings.
- [NSStringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.
