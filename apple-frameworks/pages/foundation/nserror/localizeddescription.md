> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/localizeddescription](https://developer.apple.com/documentation/foundation/nserror/localizeddescription)

# localizedDescription (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized description of the error.

## Declaration

```swift
var localizedDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedDescriptionKey](../nslocalizeddescriptionkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedDescriptionKey](../nslocalizeddescriptionkey.md), a default string is constructed from the domain and code.

## See Also

### Related Documentation

- [domain](domain.md): A string containing the error domain.
- [code](code.md): The error code.
- [userInfo](userinfo.md): The user info dictionary.

### Getting a Localized Error Description

- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.

# localizedDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized description of the error.

## Declaration

```objectivec
@property (copy, readonly) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedDescriptionKey](../nslocalizeddescriptionkey.md). If the user info dictionary doesn’t contain a value for [NSLocalizedDescriptionKey](../nslocalizeddescriptionkey.md), a default string is constructed from the domain and code.

## See Also

### Related Documentation

- [domain](domain.md): A string containing the error domain.
- [code](code.md): The error code.
- [userInfo](userinfo.md): The user info dictionary.

### Getting a Localized Error Description

- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.
- [localizedFailureReason](localizedfailurereason.md): A string containing the localized explanation of the reason for the error.
