> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/availablestringencodings](https://developer.apple.com/documentation/foundation/nsstring/availablestringencodings)

# availableStringEncodings (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a zero-terminated list of the encodings string objects support in the application’s environment.

## Declaration

```swift
class var availableStringEncodings: UnsafePointer<UInt> { get }
```

<a id="return-value"></a>

## Return Value

A zero-terminated list of the encodings string objects support in the application’s environment.

<a id="Discussion"></a>

## Discussion

Among the more commonly used encodings are:

- [NSASCIIStringEncoding](../nsasciistringencoding.md)
- [NSUnicodeStringEncoding](../nsunicodestringencoding.md)
- [NSISOLatin1StringEncoding](../nsisolatin1stringencoding.md)
- [NSISOLatin2StringEncoding](../nsisolatin2stringencoding.md)
- [NSSymbolStringEncoding](../nssymbolstringencoding.md)

See the [NSStringEncoding](../nsstringencoding.md) type for a larger list and descriptions of many supported encodings. In addition to those encodings listed here, you can also use the encodings defined for CFString in Core Foundation; you just need to call the [CFStringConvertEncodingToNSStringEncoding(\_:)](../../corefoundation/cfstringconvertencodingtonsstringencoding%28__%29.md) function to convert them to a usable format.

## See Also

### Working with Encodings

- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncoding(for:encodingOptions:convertedString:usedLossyConversion:)](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedName(of:)](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConverted(to:)](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [data(using:)](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [fastestEncoding](fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [StringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

# availableStringEncodings (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a zero-terminated list of the encodings string objects support in the application’s environment.

## Declaration

```objectivec
@property (class, readonly) const NSStringEncoding * availableStringEncodings;
```

<a id="return-value"></a>

## Return Value

A zero-terminated list of the encodings string objects support in the application’s environment.

<a id="Discussion"></a>

## Discussion

Among the more commonly used encodings are:

- [NSASCIIStringEncoding](../nsasciistringencoding.md)
- [NSUnicodeStringEncoding](../nsunicodestringencoding.md)
- [NSISOLatin1StringEncoding](../nsisolatin1stringencoding.md)
- [NSISOLatin2StringEncoding](../nsisolatin2stringencoding.md)
- [NSSymbolStringEncoding](../nssymbolstringencoding.md)

See the [NSStringEncoding](../nsstringencoding.md) type for a larger list and descriptions of many supported encodings. In addition to those encodings listed here, you can also use the encodings defined for CFString in Core Foundation; you just need to call the [CFStringConvertEncodingToNSStringEncoding](../../corefoundation/cfstringconvertencodingtonsstringencoding%28__%29.md) function to convert them to a usable format.

## See Also

### Working with Encodings

- [defaultCStringEncoding](defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncodingForData:encodingOptions:convertedString:usedLossyConversion:](stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedNameOfStringEncoding:](localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConvertedToEncoding:](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [dataUsingEncoding:](data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](description.md)
- [fastestEncoding](fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [NSStringEncoding](../nsstringencoding.md): The following constants are provided by `NSString` as possible string encodings.
- [NSStringEncodingDetectionOptionsKey](../stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](../nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.
