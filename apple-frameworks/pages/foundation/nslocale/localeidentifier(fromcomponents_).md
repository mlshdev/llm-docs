> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localeidentifier(fromcomponents:)](https://developer.apple.com/documentation/foundation/nslocale/localeidentifier(fromcomponents:))

# localeIdentifier(fromComponents:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale identifier from the components specified in a given dictionary.

## Declaration

```swift
class func localeIdentifier(fromComponents dict: [String : String]) -> String
```

## Parameters

- `dict`: A dictionary containing components that specify a locale. For possible values, see `NSLocale Component Keys`.

<a id="return-value"></a>

## Return Value

A locale identifier created from the components specified in `dict`.

<a id="Discussion"></a>

## Discussion

This reverses the actions of [components(fromLocaleIdentifier:)](components%28fromlocaleidentifier_%29.md), so for example the dictionary `{NSLocaleLanguageCode="en", NSLocaleCountryCode="US", NSLocaleCalendar=NSJapaneseCalendar}` becomes `"en_US@calendar=japanese"`.

## See Also

### Related Documentation

- [isoLanguageCodes](isolanguagecodes.md): The list of known language codes.

### Converting Between Identifiers

- [canonicalLocaleIdentifier(from:)](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [components(fromLocaleIdentifier:)](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifier(fromWindowsLocaleCode:)](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCode(fromLocaleIdentifier:)](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.

# localeIdentifierFromComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale identifier from the components specified in a given dictionary.

## Declaration

```objectivec
+ (NSString *) localeIdentifierFromComponents:(NSDictionary<NSString *,NSString *> *) dict;
```

## Parameters

- `dict`: A dictionary containing components that specify a locale. For possible values, see `NSLocale Component Keys`.

<a id="return-value"></a>

## Return Value

A locale identifier created from the components specified in `dict`.

<a id="Discussion"></a>

## Discussion

This reverses the actions of [componentsFromLocaleIdentifier:](components%28fromlocaleidentifier_%29.md), so for example the dictionary `{NSLocaleLanguageCode="en", NSLocaleCountryCode="US", NSLocaleCalendar=NSJapaneseCalendar}` becomes `"en_US@calendar=japanese"`.

## See Also

### Related Documentation

- [ISOLanguageCodes](isolanguagecodes.md): The list of known language codes.

### Converting Between Identifiers

- [canonicalLocaleIdentifierFromString:](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [componentsFromLocaleIdentifier:](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [canonicalLanguageIdentifierFromString:](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifierFromWindowsLocaleCode:](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCodeFromLocaleIdentifier:](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.
