> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/journalingsuggestions](https://developer.apple.com/documentation/updates/journalingsuggestions)

# Journaling Suggestions updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes in Journaling Suggestions.

<a id="Overview"></a>

## Overview

Browse notable changes in [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions).

<a id="June-2025"></a>

## June 2025

<a id="iPadOS-support"></a>

### iPadOS support

- [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) supports iPadOS. Suggestions that the system generates on a person’s iPhone sync over iCloud to their iPad.

<a id="System-notifications"></a>

### System notifications

- Register for system Journaling Suggestion notifications, which prompt users to reflect on recent moments. Refer to the notification schedule a person picks in Settings using [JournalingSuggestionsConfiguration](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionsconfiguration). When a person taps a notification, the system launches [JournalingSuggestionsPicker](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker) for your app when you implement [JournalingSuggestionPresentationToken](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionpresentationtoken).

<a id="Event-posters"></a>

### Event posters

- Receive suggestions of the [JournalingSuggestion.EventPoster](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/eventposter) type for planned or attended events in Apple Invites.

<a id="Location-and-workouts"></a>

### Location and workouts

- Distinguish work-related location suggestions using the [isWorkLocation](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/location/isworklocation) property, and receive information about the location from MapKit with [mapKitItemIdentifier](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/location/mapkititemidentifier).
- Refer to the name of a particular workout suggestion with  [localizedName](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/workout/details-swift.struct/localizedname).

<a id="June-2024"></a>

## June 2024

<a id="General"></a>

### General

- Support for landscape mode in your app.

<a id="Motion-activity"></a>

### Motion activity

- Capture someone’s run session as well as their mixed running and walking activity sessions with `MovementType`.

<a id="Media-playback"></a>

### Media playback

- Describe media content a person listened to. The system provides an instance of this structure to your app when a person chooses a media suggestion in the `JournalingSuggestionsPicker`.
- Collect asset content that includes other media playback sessions from other music or podcast Apps.

<a id="State-of-Mind"></a>

### State of Mind

- Suggest content to people that ask them to describe their state of mind. The system provides an instance of this structure to your app when a person chooses a state of mind suggestion in the `JournalingSuggestionsPicker`.

<a id="Reflection"></a>

### Reflection

- Use reflection prompts in your app with `Reflection`.

## See Also

### Technology and frameworks

- [Accelerate updates](accelerate.md): Learn about important changes to Accelerate.
- [Accessibility updates](accessibility.md): Learn about important changes to Accessibility.
- [ActivityKit updates](activitykit.md): Learn about important changes in ActivityKit.
- [AdAttributionKit Updates](adattributionkit.md): Learn about important changes to AdAttributionKit.
- [App Clips updates](appclips.md): Learn about important changes in App Clips.
- [App Intents updates](appintents.md): Learn about important changes in App Intents.
- [AppKit updates](appkit.md): Learn about important changes to AppKit.
- [Apple Intelligence updates](apple-intelligence.md): Learn about important changes to Apple Intelligence.
- [AppleMapsServerAPI Updates](applemapsserverapi.md): Learn about important changes to AppleMapsServerAPI.
- [Apple Pencil updates](applepencil.md): Learn about important changes to Apple Pencil.
- [ARKit updates](arkit.md): Learn about important changes to ARKit.
- [Audio Toolbox updates](audiotoolbox.md): Learn about important changes to Audio Toolbox.
- [AuthenticationServices updates](authenticationservices.md): Learn about important changes to AuthenticationServices.
- [AVFAudio updates](avfaudio.md): Learn about important changes to AVFAudio.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.
