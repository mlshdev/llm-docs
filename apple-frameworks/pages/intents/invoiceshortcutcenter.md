> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcutcenter](https://developer.apple.com/documentation/intents/invoiceshortcutcenter)

# INVoiceShortcutCenter (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieve the user’s shortcuts and make shortcut suggestions.

## Declaration

```swift
class INVoiceShortcutCenter
```

<a id="overview"></a>

## Overview

With Shortcut Center, your app can:

- Retrieve shortcuts associated with your app that the user added to Siri.
- Suggest shortcuts the user may want to add to Siri.

Before you can retrieve or suggest shortcuts, get a reference to the Shortcut Center from the [shared](invoiceshortcutcenter/shared.md) class property.

To retrieve all shortcuts associated with your app, call [getAllVoiceShortcuts(completion:)](invoiceshortcutcenter/getallvoiceshortcuts%28completion_%29.md). To retrieve a particular shortcut, use the [getVoiceShortcut(with:completion:)](invoiceshortcutcenter/getvoiceshortcut%28with_completion_%29.md) method, passing in the shortcut’s identifier. These methods return shortcuts associated with your app that the user added to Siri using your app or the Settings app.

To suggest shortcuts for actions that the user hasn’t performed in your app but may want to add to Siri, call [setShortcutSuggestions(\_:)](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md), passing in a list of suggested shortcuts. The user views the suggestions in the Gallery of the Shortcuts app. For more information, see [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md).

## Topics

### Getting the Shortcut Center

- [shared](invoiceshortcutcenter/shared.md): The shared shortcut center.

### Getting Shortcuts Added to Siri

- [getAllVoiceShortcuts(completion:)](invoiceshortcutcenter/getallvoiceshortcuts%28completion_%29.md): Retrieves all shortcuts added to Siri for your app.
- [getVoiceShortcut(with:completion:)](invoiceshortcutcenter/getvoiceshortcut%28with_completion_%29.md): Retrieves a shortcut the user added to Siri.

### Setting Suggested Shortcuts

- [setShortcutSuggestions(\_:)](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md): Suggests shortcuts the user may want to add to Siri.
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

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
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.

# INVoiceShortcutCenter (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieve the user’s shortcuts and make shortcut suggestions.

## Declaration

```objectivec
@interface INVoiceShortcutCenter : NSObject
```

<a id="overview"></a>

## Overview

With Shortcut Center, your app can:

- Retrieve shortcuts associated with your app that the user added to Siri.
- Suggest shortcuts the user may want to add to Siri.

Before you can retrieve or suggest shortcuts, get a reference to the Shortcut Center from the [sharedCenter](invoiceshortcutcenter/shared.md) class property.

To retrieve all shortcuts associated with your app, call [getAllVoiceShortcutsWithCompletion:](invoiceshortcutcenter/getallvoiceshortcuts%28completion_%29.md). To retrieve a particular shortcut, use the [getVoiceShortcutWithIdentifier:completion:](invoiceshortcutcenter/getvoiceshortcut%28with_completion_%29.md) method, passing in the shortcut’s identifier. These methods return shortcuts associated with your app that the user added to Siri using your app or the Settings app.

To suggest shortcuts for actions that the user hasn’t performed in your app but may want to add to Siri, call [setShortcutSuggestions:](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md), passing in a list of suggested shortcuts. The user views the suggestions in the Gallery of the Shortcuts app. For more information, see [Offering Actions in the Shortcuts App](../sirikit/offering-actions-in-the-shortcuts-app.md).

## Topics

### Getting the Shortcut Center

- [sharedCenter](invoiceshortcutcenter/shared.md): The shared shortcut center.

### Getting Shortcuts Added to Siri

- [getAllVoiceShortcutsWithCompletion:](invoiceshortcutcenter/getallvoiceshortcuts%28completion_%29.md): Retrieves all shortcuts added to Siri for your app.
- [getVoiceShortcutWithIdentifier:completion:](invoiceshortcutcenter/getvoiceshortcut%28with_completion_%29.md): Retrieves a shortcut the user added to Siri.

### Setting Suggested Shortcuts

- [setShortcutSuggestions:](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md): Suggests shortcuts the user may want to add to Siri.
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
