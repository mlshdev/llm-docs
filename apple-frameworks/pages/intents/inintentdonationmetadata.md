> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintentdonationmetadata](https://developer.apple.com/documentation/intents/inintentdonationmetadata)

# INIntentDonationMetadata (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
class INIntentDonationMetadata
```

## Topics

### Initializers

- [init(coder:)](inintentdonationmetadata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

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
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INInteraction](ininteraction.md): An interaction between the user and your app involving an intent object.
- [INShortcut](inshortcut-swift.enum.md): An action available in your app that the system may suggest to a user or a user may add to Siri.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.

# INIntentDonationMetadata (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```objectivec
@interface INIntentDonationMetadata : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

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
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INInteraction](ininteraction.md): An interaction between the user and your app involving an intent object.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
