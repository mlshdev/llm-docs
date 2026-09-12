> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction)

# UIActivityViewController.CollaborationModeRestriction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An object that disables the sharing mode and optionally displays an alert.

## Declaration

```swift
class CollaborationModeRestriction
```

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)

## Topics

### Creating a disabled mode

- [init(disabledMode:)](collaborationmoderestriction/init%28disabledmode_%29.md): Copies the provided disabled mode.
- [init(disabledMode:alertTitle:alertMessage:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_%29.md): Creates a disabled mode that displays an alert when someone tries to select that mode.
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunch:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md): Creates a disabled mode that displays an alert with a recovery suggestion.

### Accessing the disabled mode’s properties

- [alertDismissButtonTitle](collaborationmoderestriction/alertdismissbuttontitle.md): A title for the alert’s dismiss button.
- [alertMessage](collaborationmoderestriction/alertmessage.md): A message displayed by the alert
- [alertRecoverySuggestionButtonLaunchURL](collaborationmoderestriction/alertrecoverysuggestionbuttonlaunchurl.md): A launch URL that the system passes to your app when someone taps the recovery suggestion button.
- [alertRecoverySuggestionButtonTitle](collaborationmoderestriction/alertrecoverysuggestionbuttontitle.md): A title for the alert’s recovery suggestion button.
- [alertTitle](collaborationmoderestriction/alerttitle.md): A title for the alert that the system displays when someone selects the disabled mode.
- [disabledMode](collaborationmoderestriction/disabledmode.md): The mode that is disabled.
- [description()](collaborationmoderestriction/description%28%29.md): Returns a description of the disabled mode.

### Initializers

- [init(coder:)](collaborationmoderestriction/init%28coder_%29.md)
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunchurl_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Restricting the sharing mode

- [UIActivityCollaborationMode](../uiactivitycollaborationmode.md): A value that defines how the system shares an item.

# UIActivityCollaborationModeRestriction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An object that disables the sharing mode and optionally displays an alert.

## Declaration

```objectivec
@interface UIActivityCollaborationModeRestriction : NSObject
```

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)

## Topics

### Creating a disabled mode

- [initWithDisabledMode:](collaborationmoderestriction/init%28disabledmode_%29.md): Copies the provided disabled mode.
- [initWithDisabledMode:alertTitle:alertMessage:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_%29.md): Creates a disabled mode that displays an alert when someone tries to select that mode.
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md): Creates a disabled mode that displays an alert with a recovery suggestion.

### Accessing the disabled mode’s properties

- [alertDismissButtonTitle](collaborationmoderestriction/alertdismissbuttontitle.md): A title for the alert’s dismiss button.
- [alertMessage](collaborationmoderestriction/alertmessage.md): A message displayed by the alert
- [alertRecoverySuggestionButtonLaunchURL](collaborationmoderestriction/alertrecoverysuggestionbuttonlaunchurl.md): A launch URL that the system passes to your app when someone taps the recovery suggestion button.
- [alertRecoverySuggestionButtonTitle](collaborationmoderestriction/alertrecoverysuggestionbuttontitle.md): A title for the alert’s recovery suggestion button.
- [alertTitle](collaborationmoderestriction/alerttitle.md): A title for the alert that the system displays when someone selects the disabled mode.
- [disabledMode](collaborationmoderestriction/disabledmode.md): The mode that is disabled.
- [description](collaborationmoderestriction/description%28%29.md): Returns a description of the disabled mode.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Restricting the sharing mode

- [UIActivityCollaborationMode](../uiactivitycollaborationmode.md): A value that defines how the system shares an item.
