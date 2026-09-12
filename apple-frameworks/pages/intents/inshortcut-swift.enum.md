> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcut-swift.enum](https://developer.apple.com/documentation/intents/inshortcut-swift.enum)

# INShortcut

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 11.0+ · watchOS 5.0+

An action available in your app that the system may suggest to a user or a user may add to Siri.

## Declaration

```swift
enum INShortcut
```

## Topics

### Creating a Shortcut

- [init(intent:)](inshortcut-swift.enum/init%28intent_%29.md): Creates a shortcut with the specified intent.
- [init(userActivity:)](inshortcut-swift.enum/init%28useractivity_%29.md): Creates a shortcut with the specified user activity.

### Getting the Intent

- [intent](inshortcut-swift.enum/intent.md): The intent that performs the action when invoking the shortcut.

### Getting the User Activity

- [userActivity](inshortcut-swift.enum/useractivity.md): The user activity that defines the action to perform when invoking the shortcut.

### Using Reference Types

- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

### Enumeration Cases

- [INShortcut.intent(\_:)](inshortcut-swift.enum/intent%28__%29.md): The intent that performs the action when invoking the shortcut.
- [INShortcut.userActivity(\_:)](inshortcut-swift.enum/useractivity%28__%29.md): The user activity that defines the action to perform when invoking the shortcut.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](../foundation/referenceconvertible.md)

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
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
