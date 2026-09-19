> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/numberformatter/locale

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale of the receiver.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="Discussion"></a>

## Discussion

The locale determines the default values for many formatter attributes, such as ISO region and language codes, currency code, calendar, system of measurement, and decimal separator.

## See Also

### Managing Localization of Numbers

- [localizesFormat](localizesformat.md): Determines whether the dollar sign character (`$`), decimal separator character (`.`), and thousand separator character (`,`) are converted to appropriately localized characters as specified by the user’s localization preference.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale of the receiver.

## Declaration

```objectivec
@property (copy, null_resettable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The locale determines the default values for many formatter attributes, such as ISO region and language codes, currency code, calendar, system of measurement, and decimal separator.

## See Also

### Managing Localization of Numbers

- [localizesFormat](localizesformat.md): Determines whether the dollar sign character (`$`), decimal separator character (`.`), and thousand separator character (`,`) are converted to appropriately localized characters as specified by the user’s localization preference.
