> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/getobjectvalue(_:for:errordescription:)](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/getobjectvalue(_:for:errordescription:))

# getObjectValue(\_:for:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a person name components object after creating it from a given string.

## Declaration

```swift
func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `obj`: On return, contains an instance of [NSPersonNameComponents](../nspersonnamecomponents.md), or `nil` if conversion failed.
- `string`: A string that is parsed to create a person name components object.
- `error`: If an error occurs, upon return contains an [NSError](../nserror.md) object in the [NSCocoaErrorDomain](../nscocoaerrordomain.md) with code [NSFormattingError](../nsformattingerror-swift.var.md) that explains why the conversion failed. If you pass in `nil` for error, you are indicating that you are not interested in error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if conversion succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Converting Between Person Name Components and Strings

- [localizedString(from:style:options:)](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [string(from:)](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [annotatedString(from:)](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponents(from:)](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.

# getObjectValue:forString:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a person name components object after creating it from a given string.

## Declaration

```objectivec
- (BOOL) getObjectValue:(id*) obj forString:(NSString *) string errorDescription:(NSString **) error;
```

## Parameters

- `obj`: On return, contains an instance of [NSPersonNameComponents](../nspersonnamecomponents.md), or `nil` if conversion failed.
- `string`: A string that is parsed to create a person name components object.
- `error`: If an error occurs, upon return contains an [NSError](../nserror.md) object in the [NSCocoaErrorDomain](../nscocoaerrordomain.md) with code [NSFormattingError](../nsformattingerror-swift.var.md) that explains why the conversion failed. If you pass in `nil` for error, you are indicating that you are not interested in error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if conversion succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Converting Between Person Name Components and Strings

- [localizedStringFromPersonNameComponents:style:options:](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [stringFromPersonNameComponents:](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponentsFromString:](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
