> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring-handling-exception-names](https://developer.apple.com/documentation/foundation/nsstring-handling-exception-names)

# NSString Handling Exception Names (Swift)

**Framework:** Foundation  
**Kind:** API Collection

These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

## Topics

### Constants

- [characterConversionException](nsexceptionname/characterconversionexception.md): `NSString` raises an `NSCharacterConversionException` if a string cannot be represented in a file-system or string encoding.
- [parseErrorException](nsexceptionname/parseerrorexception.md): `NSString` raises an `NSParseErrorException` if a string cannot be parsed as a property list.

## See Also

### Working with Encodings

- [availableStringEncodings](nsstring/availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](nsstring/defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncoding(for:encodingOptions:convertedString:usedLossyConversion:)](nsstring/stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedName(of:)](nsstring/localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConverted(to:)](nsstring/canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [data(using:)](nsstring/data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [data(using:allowLossyConversion:)](nsstring/data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](nsstring/description.md)
- [fastestEncoding](nsstring/fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](nsstring/smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [StringEncodingDetectionOptionsKey](stringencodingdetectionoptionskey.md)

# NSString Handling Exception Names (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

## Topics

### Constants

- [NSCharacterConversionException](nsexceptionname/characterconversionexception.md): `NSString` raises an `NSCharacterConversionException` if a string cannot be represented in a file-system or string encoding.
- [NSParseErrorException](nsexceptionname/parseerrorexception.md): `NSString` raises an `NSParseErrorException` if a string cannot be parsed as a property list.

## See Also

### Working with Encodings

- [availableStringEncodings](nsstring/availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](nsstring/defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncodingForData:encodingOptions:convertedString:usedLossyConversion:](nsstring/stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedNameOfStringEncoding:](nsstring/localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConvertedToEncoding:](nsstring/canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [dataUsingEncoding:](nsstring/data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [dataUsingEncoding:allowLossyConversion:](nsstring/data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](nsstring/description.md)
- [fastestEncoding](nsstring/fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](nsstring/smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [NSStringEncoding](nsstringencoding.md): The following constants are provided by `NSString` as possible string encodings.
- [NSStringEncodingDetectionOptionsKey](stringencodingdetectionoptionskey.md)
