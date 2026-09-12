> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/string(from:)](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string formatted for a given `NSPersonNameComponents` object.

## Declaration

```swift
func string(from components: PersonNameComponents) -> String
```

## Parameters

- `components`: The name components to be formatted.

<a id="return-value"></a>

## Return Value

A formatted string representation of the given name components.

## See Also

### Converting Between Person Name Components and Strings

- [localizedString(from:style:options:)](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [annotatedString(from:)](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponents(from:)](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.

# stringFromPersonNameComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string formatted for a given `NSPersonNameComponents` object.

## Declaration

```objectivec
- (NSString *) stringFromPersonNameComponents:(NSPersonNameComponents *) components;
```

## Parameters

- `components`: The name components to be formatted.

<a id="return-value"></a>

## Return Value

A formatted string representation of the given name components.

## See Also

### Converting Between Person Name Components and Strings

- [localizedStringFromPersonNameComponents:style:options:](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponentsFromString:](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.
