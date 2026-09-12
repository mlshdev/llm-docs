> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/annotatedstring(from:)](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/annotatedstring(from:))

# annotatedString(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.

## Declaration

```swift
func annotatedString(from components: PersonNameComponents) -> NSAttributedString
```

## Parameters

- `components`: A formatted string representation of the given name components.

<a id="return-value"></a>

## Return Value

An attributed string representation of the given name components. You can determine the person component corresponding to a particular range of the attributed string by querying the `NSPersonNameComponentKey` attribute, providing one of the `NSPersonNameComponent` constant values defined below as the attribute value.

<a id="Discussion"></a>

## Discussion

Use this method to style individual components of a formatted name, such as a name in a label.

## See Also

### Converting Between Person Name Components and Strings

- [localizedString(from:style:options:)](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [string(from:)](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [personNameComponents(from:)](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.

# annotatedStringFromPersonNameComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.

## Declaration

```objectivec
- (NSAttributedString *) annotatedStringFromPersonNameComponents:(NSPersonNameComponents *) components;
```

## Parameters

- `components`: A formatted string representation of the given name components.

<a id="return-value"></a>

## Return Value

An attributed string representation of the given name components. You can determine the person component corresponding to a particular range of the attributed string by querying the `NSPersonNameComponentKey` attribute, providing one of the `NSPersonNameComponent` constant values defined below as the attribute value.

<a id="Discussion"></a>

## Discussion

Use this method to style individual components of a formatted name, such as a name in a label.

## See Also

### Converting Between Person Name Components and Strings

- [localizedStringFromPersonNameComponents:style:options:](localizedstring%28from_style_options_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.
- [stringFromPersonNameComponents:](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [personNameComponentsFromString:](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.
