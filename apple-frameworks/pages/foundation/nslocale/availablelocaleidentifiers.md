> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/availablelocaleidentifiers](https://developer.apple.com/documentation/foundation/nslocale/availablelocaleidentifiers)

# availableLocaleIdentifiers (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of locale identifiers available on the system.

## Declaration

```swift
class var availableLocaleIdentifiers: [String] { get }
```

<a id="Discussion"></a>

## Discussion

A locale identifier starts with a language code, often includes a region code, and occasionally includes a script designator.  See [Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW9) for more information about the structure of a locale identifier.

Use [localizedString(forLocaleIdentifier:)](localizedstring%28forlocaleidentifier_%29.md) to obtain a human readable description of any of the locale identifiers in this list.

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)

### Getting Known Identifiers and Codes

- [isoCountryCodes](isocountrycodes.md): The list of known country or region codes.
- [isoLanguageCodes](isolanguagecodes.md): The list of known language codes.
- [isoCurrencyCodes](isocurrencycodes.md): The list of known currency codes.
- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.

# availableLocaleIdentifiers (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of locale identifiers available on the system.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * availableLocaleIdentifiers;
```

<a id="Discussion"></a>

## Discussion

A locale identifier starts with a language code, often includes a region code, and occasionally includes a script designator.  See [Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW9) for more information about the structure of a locale identifier.

Use [localizedStringForLocaleIdentifier:](localizedstring%28forlocaleidentifier_%29.md) to obtain a human readable description of any of the locale identifiers in this list.

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)

### Getting Known Identifiers and Codes

- [ISOCountryCodes](isocountrycodes.md): The list of known country or region codes.
- [ISOLanguageCodes](isolanguagecodes.md): The list of known language codes.
- [ISOCurrencyCodes](isocurrencycodes.md): The list of known currency codes.
- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.
