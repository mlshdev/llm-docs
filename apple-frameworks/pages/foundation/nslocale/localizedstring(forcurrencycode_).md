> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localizedstring(forcurrencycode:)](https://developer.apple.com/documentation/foundation/nslocale/localizedstring(forcurrencycode:))

# localizedString(forCurrencyCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the localized string for the specified currency code.

## Declaration

```swift
func localizedString(forCurrencyCode currencyCode: String) -> String?
```

## Parameters

- `currencyCode`: The code for the currency whose name you want.

<a id="return-value"></a>

## Return Value

The localized name of the currency.

<a id="Discussion"></a>

## Discussion

For example, calling this method on an American English (`en_US`) locale, passing `"JPY"` for `currencyCode`, produces the string `"Japanese Yen"`.

This method is equivalent to calling the [displayName(forKey:value:)](displayname%28forkey_value_%29.md) method passing the [currencyCode](key/currencycode.md) key and `currencyCode` value.

## See Also

### Getting Display Information About a Locale

- [localizedString(forLocaleIdentifier:)](localizedstring%28forlocaleidentifier_%29.md): Returns the localized string for the specified locale identifier.
- [localizedString(forCountryCode:)](localizedstring%28forcountrycode_%29.md): Returns the localized string for a country or region code.
- [localizedString(forLanguageCode:)](localizedstring%28forlanguagecode_%29.md): Returns the localized string for the specified language code.
- [localizedString(forScriptCode:)](localizedstring%28forscriptcode_%29.md): Returns the localized string for the specified script code.
- [localizedString(forVariantCode:)](localizedstring%28forvariantcode_%29.md): Returns the localized string for the specified variant code.
- [localizedString(forCollationIdentifier:)](localizedstring%28forcollationidentifier_%29.md): Returns the localized string for the specified collation identifier.
- [localizedString(forCollatorIdentifier:)](localizedstring%28forcollatoridentifier_%29.md): Returns the localized string for the specified collator identifier.
- [localizedString(forCalendarIdentifier:)](localizedstring%28forcalendaridentifier_%29.md): Returns the localized string for the specified calendar identifier.
- [Locale Calendar Identifiers](../locale-calendar-identifiers.md): The types of calendars.

# localizedStringForCurrencyCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the localized string for the specified currency code.

## Declaration

```objectivec
- (NSString *) localizedStringForCurrencyCode:(NSString *) currencyCode;
```

## Parameters

- `currencyCode`: The code for the currency whose name you want.

<a id="return-value"></a>

## Return Value

The localized name of the currency.

<a id="Discussion"></a>

## Discussion

For example, calling this method on an American English (`en_US`) locale, passing `"JPY"` for `currencyCode`, produces the string `"Japanese Yen"`.

This method is equivalent to calling the [displayNameForKey:value:](displayname%28forkey_value_%29.md) method passing the [NSLocaleCurrencyCode](key/currencycode.md) key and `currencyCode` value.

## See Also

### Getting Display Information About a Locale

- [localizedStringForLocaleIdentifier:](localizedstring%28forlocaleidentifier_%29.md): Returns the localized string for the specified locale identifier.
- [localizedStringForCountryCode:](localizedstring%28forcountrycode_%29.md): Returns the localized string for a country or region code.
- [localizedStringForLanguageCode:](localizedstring%28forlanguagecode_%29.md): Returns the localized string for the specified language code.
- [localizedStringForScriptCode:](localizedstring%28forscriptcode_%29.md): Returns the localized string for the specified script code.
- [localizedStringForVariantCode:](localizedstring%28forvariantcode_%29.md): Returns the localized string for the specified variant code.
- [localizedStringForCollationIdentifier:](localizedstring%28forcollationidentifier_%29.md): Returns the localized string for the specified collation identifier.
- [localizedStringForCollatorIdentifier:](localizedstring%28forcollatoridentifier_%29.md): Returns the localized string for the specified collator identifier.
- [localizedStringForCalendarIdentifier:](localizedstring%28forcalendaridentifier_%29.md): Returns the localized string for the specified calendar identifier.
- [Locale Calendar Identifiers](../locale-calendar-identifiers.md): The types of calendars.
