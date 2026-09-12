> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/localizedfailurereason](https://developer.apple.com/documentation/foundation/nserror/localizedfailurereason)

# localizedFailureReason (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized explanation of the reason for the error.

## Declaration

```swift
var localizedFailureReason: String? { get }
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedFailureReasonErrorKey](../nslocalizedfailurereasonerrorkey.md).

## See Also

### Related Documentation

- [domain](domain.md): A string containing the error domain.
- [code](code.md): The error code.
- [userInfo](userinfo.md): The user info dictionary.

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.

# localizedFailureReason (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing the localized explanation of the reason for the error.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedFailureReason;
```

<a id="Discussion"></a>

## Discussion

The object in the user info dictionary for the key [NSLocalizedFailureReasonErrorKey](../nslocalizedfailurereasonerrorkey.md).

## See Also

### Related Documentation

- [domain](domain.md): A string containing the error domain.
- [code](code.md): The error code.
- [userInfo](userinfo.md): The user info dictionary.

### Getting a Localized Error Description

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.
- [localizedRecoveryOptions](localizedrecoveryoptions.md): An array containing the localized titles of buttons appropriate for displaying in an alert panel.
- [localizedRecoverySuggestion](localizedrecoverysuggestion.md): A string containing the localized recovery suggestion for the error.
