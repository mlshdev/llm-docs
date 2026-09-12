> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/lowercased(with:)](https://developer.apple.com/documentation/foundation/nsstring/lowercased(with:))

# lowercased(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.

## Declaration

```swift
func lowercased(with locale: Locale?) -> String
```

## Parameters

- `locale`: The locale. For strings presented to users, pass the current locale (\[[NSLocale](../nslocale.md) [current](../nslocale/current.md)\]). To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

A lowercase string using the `locale`.

<a id="Discussion"></a>

## Discussion

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercased](lowercased.md) for an example.

## See Also

### Changing Case

- [lowercased](lowercased.md): A lowercase representation of the string.
- [localizedLowercase](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [uppercased](uppercased.md): An uppercase representation of the string.
- [localizedUppercase](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercased(with:)](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalized](capitalized.md): A capitalized representation of the string.
- [localizedCapitalized](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

# lowercaseStringWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.

## Declaration

```objectivec
- (NSString *) lowercaseStringWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale. For strings presented to users, pass the current locale (\[[NSLocale](../nslocale.md) [currentLocale](../nslocale/current.md)\]). To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

A lowercase string using the `locale`.

<a id="Discussion"></a>

## Discussion

Case transformations aren’t guaranteed to be symmetrical or to produce strings of the same lengths as the originals. See [lowercaseString](lowercased.md) for an example.

## See Also

### Changing Case

- [lowercaseString](lowercased.md): A lowercase representation of the string.
- [localizedLowercaseString](localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [uppercaseString](uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercaseStringWithLocale:](uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalizedString](capitalized.md): A capitalized representation of the string.
- [localizedCapitalizedString](localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.
