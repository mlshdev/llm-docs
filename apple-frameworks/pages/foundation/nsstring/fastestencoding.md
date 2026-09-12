> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/fastestencoding](https://developer.apple.com/documentation/foundation/nsstring/fastestencoding)

# fastestEncoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fastest encoding to which the receiver may be converted without loss of information.

## Declaration

```swift
var fastestEncoding: UInt { get }
```

<a id="Discussion"></a>

## Discussion

“Fastest” applies to retrieval of characters from the string. This encoding may not be space efficient.

## See Also

### Related Documentation

- [getCharacters(\_:range:)](getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.

### Working with Encodings

- [availableStringEncodings](availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncoding(for:encodingOptions:convertedString:usedLossyConversion:)](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedName(of:)](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConverted(to:)](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [data(using:)](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [StringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

# fastestEncoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fastest encoding to which the receiver may be converted without loss of information.

## Declaration

```objectivec
@property (readonly) NSStringEncoding fastestEncoding;
```

<a id="Discussion"></a>

## Discussion

“Fastest” applies to retrieval of characters from the string. This encoding may not be space efficient.

## See Also

### Related Documentation

- [getCharacters:range:](getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.

### Working with Encodings

- [availableStringEncodings](availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncodingForData:encodingOptions:convertedString:usedLossyConversion:](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedNameOfStringEncoding:](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConvertedToEncoding:](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [dataUsingEncoding:](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [NSStringEncoding](../nsstringencoding.md): The following constants are provided by `NSString` as possible string encodings.
- [NSStringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.
