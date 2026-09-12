> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/localizedstring(from:style:options:)](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/localizedstring(from:style:options:))

# localizedString(from:style:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.

## Declaration

```swift
class func localizedString(from components: PersonNameComponents, style nameFormatStyle: PersonNameComponentsFormatter.Style, options nameOptions: PersonNameComponentsFormatter.Options = []) -> String
```

## Parameters

- `components`: The name components to be formatted.
- `nameFormatStyle`: A format style for the name components. For possible values, see [PersonNameComponentsFormatter.Style](style-swift.enum.md).
- `nameOptions`: The formatting options for the name components. For possible values, see [PersonNameComponentsFormatter.Options](options.md).

<a id="return-value"></a>

## Return Value

A formatted string representation of the given name components.

<a id="Discussion"></a>

## Discussion

This method is a convenience for formatting name components without creating an instance of `NSPersonNameComponentsFormatter`. For greater customizability, you can create an instance of `NSPersonNameComponentsFormatter` and use [string(from:)](string%28from_%29.md) instead.

## See Also

### Converting Between Person Name Components and Strings

- [string(from:)](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [annotatedString(from:)](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponents(from:)](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.

# localizedStringFromPersonNameComponents:style:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string formatted for a given `NSPersonNameComponents` object using the provided style and options.

## Declaration

```objectivec
+ (NSString *) localizedStringFromPersonNameComponents:(NSPersonNameComponents *) components style:(NSPersonNameComponentsFormatterStyle) nameFormatStyle options:(NSPersonNameComponentsFormatterOptions) nameOptions;
```

## Parameters

- `components`: The name components to be formatted.
- `nameFormatStyle`: A format style for the name components. For possible values, see [NSPersonNameComponentsFormatterStyle](style-swift.enum.md).
- `nameOptions`: The formatting options for the name components. For possible values, see [NSPersonNameComponentsFormatterOptions](options.md).

<a id="return-value"></a>

## Return Value

A formatted string representation of the given name components.

<a id="Discussion"></a>

## Discussion

This method is a convenience for formatting name components without creating an instance of `NSPersonNameComponentsFormatter`. For greater customizability, you can create an instance of `NSPersonNameComponentsFormatter` and use [stringFromPersonNameComponents:](string%28from_%29.md) instead.

## See Also

### Converting Between Person Name Components and Strings

- [stringFromPersonNameComponents:](string%28from_%29.md): Returns a string formatted for a given `NSPersonNameComponents` object.
- [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md): Returns an attributed string formatted for a given `NSPersonNameComponents` object, with attribute annotations for each component.
- [personNameComponentsFromString:](personnamecomponents%28from_%29.md): Returns a person name components object from a given string.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): Returns by reference a person name components object after creating it from a given string.
