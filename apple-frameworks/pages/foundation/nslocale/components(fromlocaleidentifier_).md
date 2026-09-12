> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/components(fromlocaleidentifier:)](https://developer.apple.com/documentation/foundation/nslocale/components(fromlocaleidentifier:))

# components(fromLocaleIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary that is the result of parsing a locale ID.

## Declaration

```swift
class func components(fromLocaleIdentifier string: String) -> [String : String]
```

## Parameters

- `string`: A locale ID, consisting of language, script, country, variant, and keyword/value pairs, for example, `"en_US@calendar=japanese"`.

<a id="return-value"></a>

## Return Value

A dictionary that is the result of parsing `string` as a locale ID. The keys are the constant NSString constants corresponding to the locale ID components, and the values correspond to constants where available. For possible values, see [NSLocale.Key](key.md).

<a id="Discussion"></a>

## Discussion

For example, the locale identifier `"en_US@calendar=japanese"` yields a dictionary with three entries:

- [languageCode](key/languagecode.md) = `en`
- [countryCode](key/countrycode.md) = `US`
- [calendar](key/calendar.md) = [NSJapaneseCalendar](../nsjapanesecalendar.md)

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifier(from:)](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [localeIdentifier(fromComponents:)](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifier(fromWindowsLocaleCode:)](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCode(fromLocaleIdentifier:)](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.

# componentsFromLocaleIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary that is the result of parsing a locale ID.

## Declaration

```objectivec
+ (NSDictionary<NSString *,NSString *> *) componentsFromLocaleIdentifier:(NSString *) string;
```

## Parameters

- `string`: A locale ID, consisting of language, script, country, variant, and keyword/value pairs, for example, `"en_US@calendar=japanese"`.

<a id="return-value"></a>

## Return Value

A dictionary that is the result of parsing `string` as a locale ID. The keys are the constant NSString constants corresponding to the locale ID components, and the values correspond to constants where available. For possible values, see [NSLocaleKey](key.md).

<a id="Discussion"></a>

## Discussion

For example, the locale identifier `"en_US@calendar=japanese"` yields a dictionary with three entries:

- [NSLocaleLanguageCode](key/languagecode.md) = `en`
- [NSLocaleCountryCode](key/countrycode.md) = `US`
- [NSLocaleCalendar](key/calendar.md) = [NSJapaneseCalendar](../nsjapanesecalendar.md)

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifierFromString:](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [localeIdentifierFromComponents:](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifierFromString:](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifierFromWindowsLocaleCode:](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCodeFromLocaleIdentifier:](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.
