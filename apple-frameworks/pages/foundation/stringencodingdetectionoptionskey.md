> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey)

# StringEncodingDetectionOptionsKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct StringEncodingDetectionOptionsKey
```

## Topics

### Type Properties

- [allowLossyKey](stringencodingdetectionoptionskey/allowlossykey.md)
- [disallowedEncodingsKey](stringencodingdetectionoptionskey/disallowedencodingskey.md)
- [fromWindowsKey](stringencodingdetectionoptionskey/fromwindowskey.md)
- [likelyLanguageKey](stringencodingdetectionoptionskey/likelylanguagekey.md)
- [lossySubstitutionKey](stringencodingdetectionoptionskey/lossysubstitutionkey.md)
- [suggestedEncodingsKey](stringencodingdetectionoptionskey/suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](stringencodingdetectionoptionskey/useonlysuggestedencodingskey.md)

### Initializers

- [init(rawValue:)](stringencodingdetectionoptionskey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [NSString Handling Exception Names](nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

# NSStringEncodingDetectionOptionsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef NSString * NSStringEncodingDetectionOptionsKey;
```

## Topics

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](stringencodingdetectionoptionskey/allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](stringencodingdetectionoptionskey/disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](stringencodingdetectionoptionskey/fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](stringencodingdetectionoptionskey/likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](stringencodingdetectionoptionskey/lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](stringencodingdetectionoptionskey/suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](stringencodingdetectionoptionskey/useonlysuggestedencodingskey.md)

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
- [NSString Handling Exception Names](nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.
