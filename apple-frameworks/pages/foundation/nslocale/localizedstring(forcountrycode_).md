> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localizedstring(forcountrycode:)](https://developer.apple.com/documentation/foundation/nslocale/localizedstring(forcountrycode:))

# localizedString(forCountryCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the localized string for a country or region code.

## Declaration

```swift
func localizedString(forCountryCode countryCode: String) -> String?
```

## Parameters

- `countryCode`: The code of the country or region that indicates the name you want.

<a id="return-value"></a>

## Return Value

The localized name of the country or region.

<a id="Discussion"></a>

## Discussion

For example, calling this method on an American English (`en_US`) locale, passing `"GB"` for `countryCode`, produces the string `"United Kingdom"`.

This method is equivalent to calling the [displayName(forKey:value:)](displayname%28forkey_value_%29.md) method passing the [countryCode](key/countrycode.md) key and `countryCode` value.

## See Also

### Related Documentation

- [isoCountryCodes](isocountrycodes.md): The list of known country or region codes.

### Getting Display Information About a Locale

- [localizedString(forLocaleIdentifier:)](localizedstring%28forlocaleidentifier_%29.md): Returns the localized string for the specified locale identifier.
- [localizedString(forLanguageCode:)](localizedstring%28forlanguagecode_%29.md): Returns the localized string for the specified language code.
- [localizedString(forScriptCode:)](localizedstring%28forscriptcode_%29.md): Returns the localized string for the specified script code.
- [localizedString(forVariantCode:)](localizedstring%28forvariantcode_%29.md): Returns the localized string for the specified variant code.
- [localizedString(forCollationIdentifier:)](localizedstring%28forcollationidentifier_%29.md): Returns the localized string for the specified collation identifier.
- [localizedString(forCollatorIdentifier:)](localizedstring%28forcollatoridentifier_%29.md): Returns the localized string for the specified collator identifier.
- [localizedString(forCurrencyCode:)](localizedstring%28forcurrencycode_%29.md): Returns the localized string for the specified currency code.
- [localizedString(forCalendarIdentifier:)](localizedstring%28forcalendaridentifier_%29.md): Returns the localized string for the specified calendar identifier.
- [Locale Calendar Identifiers](../locale-calendar-identifiers.md): The types of calendars.

# localizedStringForCountryCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the localized string for a country or region code.

## Declaration

```objectivec
- (NSString *) localizedStringForCountryCode:(NSString *) countryCode;
```

## Parameters

- `countryCode`: The code of the country or region that indicates the name you want.

<a id="return-value"></a>

## Return Value

The localized name of the country or region.

<a id="Discussion"></a>

## Discussion

For example, calling this method on an American English (`en_US`) locale, passing `"GB"` for `countryCode`, produces the string `"United Kingdom"`.

This method is equivalent to calling the [displayNameForKey:value:](displayname%28forkey_value_%29.md) method passing the [NSLocaleCountryCode](key/countrycode.md) key and `countryCode` value.

## See Also

### Related Documentation

- [ISOCountryCodes](isocountrycodes.md): The list of known country or region codes.

### Getting Display Information About a Locale

- [localizedStringForLocaleIdentifier:](localizedstring%28forlocaleidentifier_%29.md): Returns the localized string for the specified locale identifier.
- [localizedStringForLanguageCode:](localizedstring%28forlanguagecode_%29.md): Returns the localized string for the specified language code.
- [localizedStringForScriptCode:](localizedstring%28forscriptcode_%29.md): Returns the localized string for the specified script code.
- [localizedStringForVariantCode:](localizedstring%28forvariantcode_%29.md): Returns the localized string for the specified variant code.
- [localizedStringForCollationIdentifier:](localizedstring%28forcollationidentifier_%29.md): Returns the localized string for the specified collation identifier.
- [localizedStringForCollatorIdentifier:](localizedstring%28forcollatoridentifier_%29.md): Returns the localized string for the specified collator identifier.
- [localizedStringForCurrencyCode:](localizedstring%28forcurrencycode_%29.md): Returns the localized string for the specified currency code.
- [localizedStringForCalendarIdentifier:](localizedstring%28forcalendaridentifier_%29.md): Returns the localized string for the specified calendar identifier.
- [Locale Calendar Identifiers](../locale-calendar-identifiers.md): The types of calendars.
