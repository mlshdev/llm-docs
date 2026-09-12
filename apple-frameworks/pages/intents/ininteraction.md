> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction](https://developer.apple.com/documentation/intents/ininteraction)

# INInteraction (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An interaction between the user and your app involving an intent object.

## Declaration

```swift
class INInteraction
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)
- [Donating Reservations](../sirikit/donating-reservations.md)
- [Donating Shortcuts](../sirikit/donating-shortcuts.md)
- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)
- [Deleting Donated Shortcuts](../sirikit/deleting-donated-shortcuts.md)
- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

An [INInteraction](ininteraction.md) object encapsulates information about a SiriKit request and your app’s response. SiriKit creates interaction objects automatically when it needs your app to respond to a specific intent, either by handling the intent or providing an error explaining why your app couldn’t handle the intent. SiriKit places the interaction in an [NSUserActivity](../foundation/nsuseractivity.md) object that the system passes to your app at launch time. You can also create instances of this class in your app and donate relevant interactions to the system.

Donating interactions provides contextual information that might be helpful to other apps. Some system apps use donated interactions to improve search results or to anticipate user actions. For example, a ride-booking app could donate an interaction containing the user’s planned ride information. If the user subsequently uses the Maps app to search for restaurants, Maps can show relevant results near the user’s destination.

You choose which of your app’s interactions you want to donate to the system. To donate an interaction, create an instance of this class, filling it with your intent object and response, and call the [donate(completion:)](ininteraction/donate%28completion_%29.md) method. You can also use the methods of this class to delete interactions when they are no longer relevant.

> **Note**

>  Donate interactions only when the user initiates an interaction in your app. SiriKit already knows about interactions that it sends your app for intent handling.

## Topics

### Creating an Interaction Object

- [init(intent:response:)](ininteraction/init%28intent_response_%29.md): Initializes and returns an interaction object with an intent object and your app’s response.

### Getting the Intent and Response

- [intent](ininteraction/intent.md): The intent object that describes the user’s request.
- [intentResponse](ininteraction/intentresponse.md): The response object that your app created in response to the request.

### Donating Interactions to the System

- [donate(completion:)](ininteraction/donate%28completion_%29.md): Donates this interaction object to the system.

### Deleting Interactions from the System

- [deleteAll(completion:)](ininteraction/deleteall%28completion_%29.md): Deletes all interactions that you donated previously.
- [delete(with:completion:)](ininteraction/delete%28with_completion_%29-2d1gs.md): Deletes the specified interactions that were donated by the calling app.
- [delete(with:completion:)](ininteraction/delete%28with_completion_%29-tcq9.md): Deletes the interactions with the specified group identifier.

### Accessing Interaction Attributes

- [intentHandlingStatus](ininteraction/intenthandlingstatus.md): The current state of the interaction.
- [direction](ininteraction/direction.md): The direction in which information flowed to or from the device.
- [dateInterval](ininteraction/dateinterval.md): The time at which the interaction started and its duration.
- [identifier](ininteraction/identifier.md): The unique identifier of the interaction.
- [groupIdentifier](ininteraction/groupidentifier.md): The unique identifier of the interaction’s group.

### Getting the Value of a Parameter

- [parameterValue(for:)](ininteraction/parametervalue%28for_%29.md): Returns the value of the specified parameter of this interaction object.

### Constants

- [INIntentHandlingStatus](inintenthandlingstatus.md): Constants indicating the current state of the interaction.
- [INInteractionDirection](ininteractiondirection.md): Constants indicating whether the app is providing or receiving information.

### Initializers

- [init(coder:)](ininteraction/init%28coder_%29.md)

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
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INShortcut](inshortcut-swift.enum.md): An action available in your app that the system may suggest to a user or a user may add to Siri.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.

# INInteraction (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An interaction between the user and your app involving an intent object.

## Declaration

```objectivec
@interface INInteraction : NSObject
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)
- [Donating Reservations](../sirikit/donating-reservations.md)
- [Donating Shortcuts](../sirikit/donating-shortcuts.md)
- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)
- [Deleting Donated Shortcuts](../sirikit/deleting-donated-shortcuts.md)
- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

An [INInteraction](ininteraction.md) object encapsulates information about a SiriKit request and your app’s response. SiriKit creates interaction objects automatically when it needs your app to respond to a specific intent, either by handling the intent or providing an error explaining why your app couldn’t handle the intent. SiriKit places the interaction in an [NSUserActivity](../foundation/nsuseractivity.md) object that the system passes to your app at launch time. You can also create instances of this class in your app and donate relevant interactions to the system.

Donating interactions provides contextual information that might be helpful to other apps. Some system apps use donated interactions to improve search results or to anticipate user actions. For example, a ride-booking app could donate an interaction containing the user’s planned ride information. If the user subsequently uses the Maps app to search for restaurants, Maps can show relevant results near the user’s destination.

You choose which of your app’s interactions you want to donate to the system. To donate an interaction, create an instance of this class, filling it with your intent object and response, and call the [donateInteractionWithCompletion:](ininteraction/donate%28completion_%29.md) method. You can also use the methods of this class to delete interactions when they are no longer relevant.

> **Note**

>  Donate interactions only when the user initiates an interaction in your app. SiriKit already knows about interactions that it sends your app for intent handling.

## Topics

### Creating an Interaction Object

- [initWithIntent:response:](ininteraction/init%28intent_response_%29.md): Initializes and returns an interaction object with an intent object and your app’s response.

### Getting the Intent and Response

- [intent](ininteraction/intent.md): The intent object that describes the user’s request.
- [intentResponse](ininteraction/intentresponse.md): The response object that your app created in response to the request.

### Donating Interactions to the System

- [donateInteractionWithCompletion:](ininteraction/donate%28completion_%29.md): Donates this interaction object to the system.

### Deleting Interactions from the System

- [deleteAllInteractionsWithCompletion:](ininteraction/deleteall%28completion_%29.md): Deletes all interactions that you donated previously.
- [deleteInteractionsWithIdentifiers:completion:](ininteraction/delete%28with_completion_%29-2d1gs.md): Deletes the specified interactions that were donated by the calling app.
- [deleteInteractionsWithGroupIdentifier:completion:](ininteraction/delete%28with_completion_%29-tcq9.md): Deletes the interactions with the specified group identifier.

### Accessing Interaction Attributes

- [intentHandlingStatus](ininteraction/intenthandlingstatus.md): The current state of the interaction.
- [direction](ininteraction/direction.md): The direction in which information flowed to or from the device.
- [dateInterval](ininteraction/dateinterval.md): The time at which the interaction started and its duration.
- [identifier](ininteraction/identifier.md): The unique identifier of the interaction.
- [groupIdentifier](ininteraction/groupidentifier.md): The unique identifier of the interaction’s group.

### Getting the Value of a Parameter

- [parameterValueForParameter:](ininteraction/parametervalue%28for_%29.md): Returns the value of the specified parameter of this interaction object.

### Constants

- [INIntentHandlingStatus](inintenthandlingstatus.md): Constants indicating the current state of the interaction.
- [INInteractionDirection](ininteractiondirection.md): Constants indicating whether the app is providing or receiving information.

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
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INVoiceShortcutCenter](invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
