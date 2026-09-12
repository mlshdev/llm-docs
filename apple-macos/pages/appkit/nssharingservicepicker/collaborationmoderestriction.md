> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepicker/collaborationmoderestriction](https://developer.apple.com/documentation/appkit/nssharingservicepicker/collaborationmoderestriction)

# NSSharingServicePicker.CollaborationModeRestriction (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.0+

Specifies whether a specific type of sharing should be disabled in the share picker, and if so, whether a reason should be provided for the disablement.

## Declaration

```swift
class CollaborationModeRestriction
```

<a id="overview"></a>

## Overview

If a reason is provided, the corresponding mode will show up as an option, but an alert explaining why it is disabled will show if it is chosen, and the mode will switch back to the supported one. Optionally, an extra alert button can be provided for a “recovery suggestion”. This can give a user a way to fix whatever is causing this type of sharing to be disabled. If no reason is provided, the corresponding mode will not show up as an option.

## Topics

### Initializers

- [init(coder:)](collaborationmoderestriction/init%28coder_%29.md)
- [init(disabledMode:)](collaborationmoderestriction/init%28disabledmode_%29.md)
- [init(disabledMode:alertTitle:alertMessage:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_%29.md)
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md)
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunch:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md)
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL:)](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunchurl_%29.md)

### Instance Properties

- [alertDismissButtonTitle](collaborationmoderestriction/alertdismissbuttontitle.md): The label on the alert button which will simply confirm that the alert was viewed and dismiss it Defaults to “OK”
- [alertMessage](collaborationmoderestriction/alertmessage.md): The message of the alert if a reason for disabling is provided
- [alertRecoverySuggestionButtonLaunchURL](collaborationmoderestriction/alertrecoverysuggestionbuttonlaunchurl.md): The URL that is opened when the user selects the recovery suggestion, if any
- [alertRecoverySuggestionButtonTitle](collaborationmoderestriction/alertrecoverysuggestionbuttontitle.md): The label on the recovery suggestion button if it is provided
- [alertTitle](collaborationmoderestriction/alerttitle.md): The title of the alert if a reason for disabling is provided
- [disabledMode](collaborationmoderestriction/disabledmode.md): The type of sharing which should be disabled

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# NSSharingCollaborationModeRestriction (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.0+

Specifies whether a specific type of sharing should be disabled in the share picker, and if so, whether a reason should be provided for the disablement.

## Declaration

```objectivec
@interface NSSharingCollaborationModeRestriction : NSObject
```

<a id="overview"></a>

## Overview

If a reason is provided, the corresponding mode will show up as an option, but an alert explaining why it is disabled will show if it is chosen, and the mode will switch back to the supported one. Optionally, an extra alert button can be provided for a “recovery suggestion”. This can give a user a way to fix whatever is causing this type of sharing to be disabled. If no reason is provided, the corresponding mode will not show up as an option.

## Topics

### Instance Properties

- [alertDismissButtonTitle](collaborationmoderestriction/alertdismissbuttontitle.md): The label on the alert button which will simply confirm that the alert was viewed and dismiss it Defaults to “OK”
- [alertMessage](collaborationmoderestriction/alertmessage.md): The message of the alert if a reason for disabling is provided
- [alertRecoverySuggestionButtonLaunchURL](collaborationmoderestriction/alertrecoverysuggestionbuttonlaunchurl.md): The URL that is opened when the user selects the recovery suggestion, if any
- [alertRecoverySuggestionButtonTitle](collaborationmoderestriction/alertrecoverysuggestionbuttontitle.md): The label on the recovery suggestion button if it is provided
- [alertTitle](collaborationmoderestriction/alerttitle.md): The title of the alert if a reason for disabling is provided
- [disabledMode](collaborationmoderestriction/disabledmode.md): The type of sharing which should be disabled

### Instance Methods

- [initWithDisabledMode:](collaborationmoderestriction/init%28disabledmode_%29.md)
- [initWithDisabledMode:alertTitle:alertMessage:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_%29.md)
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md)
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL:](collaborationmoderestriction/init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
