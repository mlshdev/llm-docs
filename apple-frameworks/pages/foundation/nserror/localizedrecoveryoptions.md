> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/localizedrecoveryoptions](https://developer.apple.com/documentation/foundation/nserror/localizedrecoveryoptions)

# localizedRecoveryOptions (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the localized titles of buttons appropriate for displaying in an alert panel.

## Declaration

```swift
var localizedRecoveryOptions: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md), this property is `nil`.

The first string is the title of the right-most and default button, the second the one to the left of that, and so on. The recovery options should be appropriate for the  [localizedRecoverySuggestion](localizedrecoverysuggestion.md) property. If the user info dictionary doesn’t contain a value for [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md), only an OK button is displayed.

## See Also

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.

# localizedRecoveryOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the localized titles of buttons appropriate for displaying in an alert panel.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSString *> * localizedRecoveryOptions;
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md), this property is `nil`.

The first string is the title of the right-most and default button, the second the one to the left of that, and so on. The recovery options should be appropriate for the  [localizedRecoverySuggestion](localizedrecoverysuggestion.md) property. If the user info dictionary doesn’t contain a value for [NSLocalizedRecoveryOptionsErrorKey](../nslocalizedrecoveryoptionserrorkey.md), only an OK button is displayed.

## See Also

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.
