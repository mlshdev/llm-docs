> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/uppercased(with:)](https://developer.apple.com/documentation/foundation/nsstring/uppercased(with:))

# uppercased(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.

## Declaration

```swift
func uppercased(with locale: Locale?) -> String
```

## Parameters

- `locale`: The locale. For strings presented to users, pass the current locale (\[[NSLocale](../nslocale.md) [current](../nslocale/current.md)\]). To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

An uppercase string using the `locale`.

## See Also

### Changing Case

- [lowercased](lowercased.md): A lowercase representation of the string.
- [localizedLowercase](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercased(with:)](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercased](uppercased.md): An uppercase representation of the string.
- [localizedUppercase](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [capitalized](capitalized.md): A capitalized representation of the string.
- [localizedCapitalized](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

# uppercaseStringWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.

## Declaration

```objectivec
- (NSString *) uppercaseStringWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale. For strings presented to users, pass the current locale (\[[NSLocale](../nslocale.md) [currentLocale](../nslocale/current.md)\]). To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

An uppercase string using the `locale`.

## See Also

### Changing Case

- [lowercaseString](lowercased.md): A lowercase representation of the string.
- [localizedLowercaseString](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercaseStringWithLocale:](lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercaseString](uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [capitalizedString](capitalized.md): A capitalized representation of the string.
- [localizedCapitalizedString](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.
