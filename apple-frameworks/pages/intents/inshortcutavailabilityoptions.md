> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutavailabilityoptions](https://developer.apple.com/documentation/intents/inshortcutavailabilityoptions)

# INShortcutAvailabilityOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Defined contexts in which an intent or activity might be relevant to a user.

## Declaration

```swift
struct INShortcutAvailabilityOptions
```

<a id="overview"></a>

## Overview

The system uses the set of availability options in a donated shortcut to provide the user with shortcuts relevant in a particular context or circumstance. For example, a meditation app could include an intent with [sleepMindfulness](inshortcutavailabilityoptions/sleepmindfulness.md) in its [shortcutAvailability](../foundation/nsuseractivity/shortcutavailability.md) options when calling [setShortcutSuggestions(\_:)](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md). Then the Wind Down configuration screen in the Health app includes that intent in the Mindfulness category when guiding the user to set up shortcuts.

Provide accurate availability options when you suggest shortcuts to [INVoiceShortcutCenter](invoiceshortcutcenter.md) with [setShortcutSuggestions(\_:)](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md), and when you donate shortcuts based on user actions. If none of the options apply to an intent, provide an empty [OptionSet](https://developer.apple.com/documentation/swift/optionset).

> **Tip**

>  Most shortcuts should specify a single activity type, but you can use an option set with more than one category if a shortcut really doesn’t fit neatly into a single category.

For more information on donating shortcuts effectively, see [Donating Shortcuts](../sirikit/donating-shortcuts.md).

## Topics

### Providing Contexts

- [sleepMindfulness](inshortcutavailabilityoptions/sleepmindfulness.md): Meditation and other activities intended to facilitate mindfulness.
- [sleepJournaling](inshortcutavailabilityoptions/sleepjournaling.md): Writing and other daily logging activities.
- [sleepMusic](inshortcutavailabilityoptions/sleepmusic.md): Music suitable for falling asleep.
- [sleepPodcasts](inshortcutavailabilityoptions/sleeppodcasts.md): A podcast or other spoken audio.
- [sleepReading](inshortcutavailabilityoptions/sleepreading.md): A book or other reading material.
- [sleepWrapUpYourDay](inshortcutavailabilityoptions/sleepwrapupyourday.md): An activity in preparation for sleep such as personal grooming or reviewing the next day’s agenda.
- [sleepYogaAndStretching](inshortcutavailabilityoptions/sleepyogaandstretching.md): Physical activity to prepare for sleep.

### Creating an Availability Set

- [init(rawValue:)](inshortcutavailabilityoptions/init%28rawvalue_%29.md): Returns the set of availability categories represented by the given value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

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
- [INShortcutReference](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.

# INShortcutAvailabilityOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Defined contexts in which an intent or activity might be relevant to a user.

## Declaration

```objectivec
enum INShortcutAvailabilityOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The system uses the set of availability options in a donated shortcut to provide the user with shortcuts relevant in a particular context or circumstance. For example, a meditation app could include an intent with [INShortcutAvailabilityOptionSleepMindfulness](inshortcutavailabilityoptions/sleepmindfulness.md) in its [shortcutAvailability](../foundation/nsuseractivity/shortcutavailability.md) options when calling [setShortcutSuggestions:](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md). Then the Wind Down configuration screen in the Health app includes that intent in the Mindfulness category when guiding the user to set up shortcuts.

Provide accurate availability options when you suggest shortcuts to [INVoiceShortcutCenter](invoiceshortcutcenter.md) with [setShortcutSuggestions:](invoiceshortcutcenter/setshortcutsuggestions%28__%29.md), and when you donate shortcuts based on user actions. If none of the options apply to an intent, provide an empty [OptionSet](https://developer.apple.com/documentation/swift/optionset).

> **Tip**

>  Most shortcuts should specify a single activity type, but you can use an option set with more than one category if a shortcut really doesn’t fit neatly into a single category.

For more information on donating shortcuts effectively, see [Donating Shortcuts](../sirikit/donating-shortcuts.md).

## Topics

### Providing Contexts

- [INShortcutAvailabilityOptionSleepMindfulness](inshortcutavailabilityoptions/sleepmindfulness.md): Meditation and other activities intended to facilitate mindfulness.
- [INShortcutAvailabilityOptionSleepJournaling](inshortcutavailabilityoptions/sleepjournaling.md): Writing and other daily logging activities.
- [INShortcutAvailabilityOptionSleepMusic](inshortcutavailabilityoptions/sleepmusic.md): Music suitable for falling asleep.
- [INShortcutAvailabilityOptionSleepPodcasts](inshortcutavailabilityoptions/sleeppodcasts.md): A podcast or other spoken audio.
- [INShortcutAvailabilityOptionSleepReading](inshortcutavailabilityoptions/sleepreading.md): A book or other reading material.
- [INShortcutAvailabilityOptionSleepWrapUpYourDay](inshortcutavailabilityoptions/sleepwrapupyourday.md): An activity in preparation for sleep such as personal grooming or reviewing the next day’s agenda.
- [INShortcutAvailabilityOptionSleepYogaAndStretching](inshortcutavailabilityoptions/sleepyogaandstretching.md): Physical activity to prepare for sleep.

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
- [INShortcut](inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
- [INIntentDonationMetadata](inintentdonationmetadata.md)
- [Apple Watch support](../sirikit/watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
- [Siri Event Suggestions](../sirikit/siri-event-suggestions.md): Provide users with current, actionable information connected to a reservation.
