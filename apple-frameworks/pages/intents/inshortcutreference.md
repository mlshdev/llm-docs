> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutreference](https://developer.apple.com/documentation/intents/inshortcutreference)

# INShortcutReference (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

## Declaration

```swift
class INShortcutReference
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)
- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md)

## Topics

### Creating a Shortcut

- [init(intent:)](inshortcutreference/init%28intent_%29.md): Creates a shortcut with the specified intent.
- [init(userActivity:)](inshortcutreference/init%28useractivity_%29.md): Creates a shortcut with the specified user activity.

### Getting the Intent

- [intent](inshortcutreference/intent.md): The intent that performs the action when invoking the shortcut.

### Getting the User Activity

- [userActivity](inshortcutreference/useractivity.md): The user activity that defines the action to perform when invoking the shortcut.

### Initializers

- [init(coder:)](inshortcutreference/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shortcuts and Donations

- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md): Suggest shortcuts users may want to add to Siri or combine with other actions in their own shortcuts.
- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](../sirikit/adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md): Add custom intents and parameters to help users interact more quickly and effectively with Siri and the Shortcuts app.
- [Donating Shortcuts](../sirikit/donating-shortcuts.md): Tell Siri about shortcuts to actions that the user performed in your app.
- [Deleting Donated Shortcuts](../sirikit/deleting-donated-shortcuts.md): Remove your donations from Siri.
- [Soup Chef: Accelerating App Interactions with Shortcuts](../sirikit/soup-chef-accelerating-app-interactions-with-shortcuts.md): Make it easy for people to use Siri with your app by providing shortcuts to your app’s actions.
- [Soup Chef with App Intents: Migrating custom intents](../sirikit/soup-chef-with-app-intents-migrating-custom-intents.md): Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
- [Adding Shortcuts for Wind Down](../sirikit/adding-shortcuts-for-wind-down.md): Reveal your app’s shortcuts inside the Health app.
- [INInteraction](ininteraction.md): An interaction between the user and your app involving an intent object.
- [INShortcut](inshortcut-swift.enum.md): An action available in your app that the system may suggest to a user or a user may add to Siri.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.

# INShortcut (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

## Declaration

```objectivec
@interface INShortcut : NSObject
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)
- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md)

## Topics

### Creating a Shortcut

- [initWithIntent:](inshortcutreference/init%28intent_%29.md): Creates a shortcut with the specified intent.
- [initWithUserActivity:](inshortcutreference/init%28useractivity_%29.md): Creates a shortcut with the specified user activity.

### Getting the Intent

- [intent](inshortcutreference/intent.md): The intent that performs the action when invoking the shortcut.

### Getting the User Activity

- [userActivity](inshortcutreference/useractivity.md): The user activity that defines the action to perform when invoking the shortcut.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shortcuts and Donations

- [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md): Suggest shortcuts users may want to add to Siri or combine with other actions in their own shortcuts.
- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](../sirikit/adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md): Add custom intents and parameters to help users interact more quickly and effectively with Siri and the Shortcuts app.
- [Donating Shortcuts](../sirikit/donating-shortcuts.md): Tell Siri about shortcuts to actions that the user performed in your app.
- [Deleting Donated Shortcuts](../sirikit/deleting-donated-shortcuts.md): Remove your donations from Siri.
- [Soup Chef: Accelerating App Interactions with Shortcuts](../sirikit/soup-chef-accelerating-app-interactions-with-shortcuts.md): Make it easy for people to use Siri with your app by providing shortcuts to your app’s actions.
- [Soup Chef with App Intents: Migrating custom intents](../sirikit/soup-chef-with-app-intents-migrating-custom-intents.md): Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
- [Adding Shortcuts for Wind Down](../sirikit/adding-shortcuts-for-wind-down.md): Reveal your app’s shortcuts inside the Health app.
- [INInteraction](ininteraction.md): An interaction between the user and your app involving an intent object.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
