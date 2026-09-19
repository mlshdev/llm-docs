> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nserror/localizedrecoverysuggestion

# localizedRecoverySuggestion (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized recovery suggestion for the error.

## Declaration

```swift
var localizedRecoverySuggestion: String? { get }
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedRecoverySuggestionErrorKey](../nslocalizedrecoverysuggestionerrorkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedRecoverySuggestionErrorKey](../nslocalizedrecoverysuggestionerrorkey.md), this property is `nil`.

The returned string is suitable for displaying as the secondary message in an alert panel.

## See Also

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.

# localizedRecoverySuggestion (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized recovery suggestion for the error.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedRecoverySuggestion;
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedRecoverySuggestionErrorKey](../nslocalizedrecoverysuggestionerrorkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedRecoverySuggestionErrorKey](../nslocalizedrecoverysuggestionerrorkey.md), this property is `nil`.

The returned string is suitable for displaying as the secondary message in an alert panel.

## See Also

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.
