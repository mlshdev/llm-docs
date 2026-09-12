> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/watch-and-widget-support](https://developer.apple.com/documentation/sirikit/watch-and-widget-support)

# Apple Watch support (Swift)

**Framework:** Intents  
**Kind:** API Collection  
**Availability:** watchOS 5.0+ (deprecated in 11.0)

Display relevant shortcuts on the Siri watch face.

<a id="overview"></a>

## Overview

An [INRelevantShortcut](../intents/inrelevantshortcut.md) describes an action that might be useful or meaningful to the user within a particular context. For instance, a user might want to start a workout when they arrive at the gym, meditate in the morning, or find out about a new episode of their favorite TV show as soon it’s available. The system uses the shortcut’s relevance providers, as well as other signals, to determine when the shortcut is likely relevant to the user.

> **Important**

> The Siri Watch Face is available in watchOS 11 and earlier. To make content available in the Smart Stack on Apple Watch using widgets, refer to [WidgetKit](../widgetkit.md), [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md), and [App Intents](../appintents.md). For more information about migrating your SiriKit code to App Intents, refer to [Migrating widgets from SiriKit Intents to App Intents](../widgetkit/migrating-from-sirikit-intents-to-app-intents.md) and [Soup Chef with App Intents: Migrating custom intents](soup-chef-with-app-intents-migrating-custom-intents.md).

The Siri watch face updates throughout the day to offer shortcuts or glanceable information. For details on suggesting relevant shortcuts on the Siri watch face, see [Defining Relevant Shortcuts for the Siri Watch Face](defining-relevant-shortcuts-for-the-siri-watch-face.md).

Users can collect multiple widgets into a Smart Stack. A Smart Stack rotates to widgets and suggests new widgets based on relevance cues. For details on using shortcuts to influence Smart Stacks, see [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md).

## Topics

### Siri watch face

- [Displaying Shortcut Information in a Siri Watch Face Card](displaying-shortcut-information-in-a-siri-watch-face-card.md): Deprecated. Display and customize watch-specific shortcut information with a default card template.
- [INDefaultCardTemplate](../intents/indefaultcardtemplate.md): A card template for customizing the Siri watch face for a shortcut.
- [Defining Relevant Shortcuts for the Siri Watch Face](defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcut](../intents/inrelevantshortcut.md): An object that defines a shortcut and its relevance to the user.
- [INRelevantShortcutStore](../intents/inrelevantshortcutstore.md): An object that saves relevant shortcuts.

### Relevance Providers

- [INRelevanceProvider](../intents/inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](../intents/indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INDateRelevanceProvider](../intents/indaterelevanceprovider.md): The provider class that specifies a relevant day and time.
- [INLocationRelevanceProvider](../intents/inlocationrelevanceprovider.md): The provider class that specifies a relevant location.

## See Also

### Shortcuts and Donations

- [Offering Actions in the Shortcuts App](offering-actions-in-the-shortcuts-app.md): Suggest shortcuts users may want to add to Siri or combine with other actions in their own shortcuts.
- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md): Add custom intents and parameters to help users interact more quickly and effectively with Siri and the Shortcuts app.
- [Donating Shortcuts](donating-shortcuts.md): Tell Siri about shortcuts to actions that the user performed in your app.
- [Deleting Donated Shortcuts](deleting-donated-shortcuts.md): Remove your donations from Siri.
- [Soup Chef: Accelerating App Interactions with Shortcuts](soup-chef-accelerating-app-interactions-with-shortcuts.md): Make it easy for people to use Siri with your app by providing shortcuts to your app’s actions.
- [Soup Chef with App Intents: Migrating custom intents](soup-chef-with-app-intents-migrating-custom-intents.md): Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
- [Adding Shortcuts for Wind Down](adding-shortcuts-for-wind-down.md): Reveal your app’s shortcuts inside the Health app.
- [INShortcutReference](../intents/inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INInteraction](../intents/ininteraction.md): An interaction between the user and your app involving an intent object.
- [INShortcut](../intents/inshortcut-swift.enum.md): An action available in your app that the system may suggest to a user or a user may add to Siri.
- [INVoiceShortcutCenter](../intents/invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](../intents/invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](../intents/inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcutReference](../intents/inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](../intents/inintentdonationmetadata.md)

# Apple Watch support (Objective-C)

**Framework:** Intents  
**Kind:** API Collection  
**Availability:** watchOS 5.0+ (deprecated in 11.0)

Display relevant shortcuts on the Siri watch face.

<a id="overview"></a>

## Overview

An [INRelevantShortcut](../intents/inrelevantshortcut.md) describes an action that might be useful or meaningful to the user within a particular context. For instance, a user might want to start a workout when they arrive at the gym, meditate in the morning, or find out about a new episode of their favorite TV show as soon it’s available. The system uses the shortcut’s relevance providers, as well as other signals, to determine when the shortcut is likely relevant to the user.

> **Important**

> The Siri Watch Face is available in watchOS 11 and earlier. To make content available in the Smart Stack on Apple Watch using widgets, refer to [WidgetKit](../widgetkit.md), [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md), and [App Intents](../appintents.md). For more information about migrating your SiriKit code to App Intents, refer to [Migrating widgets from SiriKit Intents to App Intents](../widgetkit/migrating-from-sirikit-intents-to-app-intents.md) and [Soup Chef with App Intents: Migrating custom intents](soup-chef-with-app-intents-migrating-custom-intents.md).

The Siri watch face updates throughout the day to offer shortcuts or glanceable information. For details on suggesting relevant shortcuts on the Siri watch face, see [Defining Relevant Shortcuts for the Siri Watch Face](defining-relevant-shortcuts-for-the-siri-watch-face.md).

Users can collect multiple widgets into a Smart Stack. A Smart Stack rotates to widgets and suggests new widgets based on relevance cues. For details on using shortcuts to influence Smart Stacks, see [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md).

## Topics

### Siri watch face

- [Displaying Shortcut Information in a Siri Watch Face Card](displaying-shortcut-information-in-a-siri-watch-face-card.md): Deprecated. Display and customize watch-specific shortcut information with a default card template.
- [INDefaultCardTemplate](../intents/indefaultcardtemplate.md): A card template for customizing the Siri watch face for a shortcut.
- [Defining Relevant Shortcuts for the Siri Watch Face](defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcut](../intents/inrelevantshortcut.md): An object that defines a shortcut and its relevance to the user.
- [INRelevantShortcutStore](../intents/inrelevantshortcutstore.md): An object that saves relevant shortcuts.

### Relevance Providers

- [INRelevanceProvider](../intents/inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](../intents/indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INDateRelevanceProvider](../intents/indaterelevanceprovider.md): The provider class that specifies a relevant day and time.
- [INLocationRelevanceProvider](../intents/inlocationrelevanceprovider.md): The provider class that specifies a relevant location.

## See Also

### Shortcuts and Donations

- [Offering Actions in the Shortcuts App](offering-actions-in-the-shortcuts-app.md): Suggest shortcuts users may want to add to Siri or combine with other actions in their own shortcuts.
- [Adding User Interactivity with Siri Shortcuts and the Shortcuts App](adding-user-interactivity-with-siri-shortcuts-and-the-shortcuts-app.md): Add custom intents and parameters to help users interact more quickly and effectively with Siri and the Shortcuts app.
- [Donating Shortcuts](donating-shortcuts.md): Tell Siri about shortcuts to actions that the user performed in your app.
- [Deleting Donated Shortcuts](deleting-donated-shortcuts.md): Remove your donations from Siri.
- [Soup Chef: Accelerating App Interactions with Shortcuts](soup-chef-accelerating-app-interactions-with-shortcuts.md): Make it easy for people to use Siri with your app by providing shortcuts to your app’s actions.
- [Soup Chef with App Intents: Migrating custom intents](soup-chef-with-app-intents-migrating-custom-intents.md): Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
- [Adding Shortcuts for Wind Down](adding-shortcuts-for-wind-down.md): Reveal your app’s shortcuts inside the Health app.
- [INShortcut](../intents/inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INInteraction](../intents/ininteraction.md): An interaction between the user and your app involving an intent object.
- [INVoiceShortcutCenter](../intents/invoiceshortcutcenter.md): Retrieve the user’s shortcuts and make shortcut suggestions.
- [INVoiceShortcut](../intents/invoiceshortcut.md): A shortcut the user added to Siri.
- [INShortcutAvailabilityOptions](../intents/inshortcutavailabilityoptions.md): Defined contexts in which an intent or activity might be relevant to a user.
- [INShortcut](../intents/inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](../intents/inintentdonationmetadata.md)
- [Siri Event Suggestions](siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
