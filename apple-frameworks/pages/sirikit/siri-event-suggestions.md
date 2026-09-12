> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/siri-event-suggestions](https://developer.apple.com/documentation/sirikit/siri-event-suggestions)

# Siri Event Suggestions (Swift)

**Framework:** Intents  
**Kind:** API Collection

Provide users with current, actionable information connected to a reservation.

<a id="overview"></a>

## Overview

Siri can expose reservation information from your app in context and at specific times so the user can take relevant actions based on the circumstances. Your app donates an [INInteraction](../intents/ininteraction.md) object that contains information about the reservation that can be sent to the user to allow them to confirm a hotel reservation, remind them to check in for a flight, help them return a rental car, and several other options.

> **Tip**

>  If you send your users reservation information in email or web pages, use [Siri Event Suggestions Markup](https://developer.apple.com/documentation/sirieventsuggestionsmarkup) to provide the information to Siri as well. Siri uses reservation IDs to prevent duplicate entries.

Apps offering reservations with check-in capabilities can integrate with Shortcuts Suggestions on the Lock Screen and allow users to launch your app to complete checking in for their reservation. Create a new reservation object with an array of [INReservationAction](../intents/inreservationaction.md) objects that contain a user activity and relevant time frame. Siri provides users with the ability to launch your app with the user activity and time frame information. For instance, a flight reservation app may provide users the ability to check-in for a flight starting 24 hours before the departure time.

## Topics

### Essentials

- [Donating Reservations](donating-reservations.md): Inform Siri of reservations made from your app.
- [Integrating Your App with Siri Event Suggestions](integrating-your-app-with-siri-event-suggestions.md): Donate reservations and provide quick access to event details throughout the system.

### Reservation Details

- [INGetReservationDetailsIntent](../intents/ingetreservationdetailsintent.md): A request for details about one or more reservations.
- [INGetReservationDetailsIntentResponse](../intents/ingetreservationdetailsintentresponse.md): Your app’s response to a request for reservation details.

### Common Reservation Data Objects

- [INReservation](../intents/inreservation.md): An object that describes a reservation.
- [INReservationAction](../intents/inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](../intents/inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](../intents/inseat.md): An object containing seat information associated with a reservation.

### Travel Reservations

- [INFlightReservation](../intents/inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](../intents/intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](../intents/inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](../intents/inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](../intents/inrentalcarreservation.md): The information that describes a rental car reservation.

### Food, Lodging, and Event Reservations

- [INRestaurantReservation](../intents/inrestaurantreservation.md): The information that describes a restaurant reservation.
- [INLodgingReservation](../intents/inlodgingreservation.md): The information that describes a lodging reservation.
- [INTicketedEventReservation](../intents/inticketedeventreservation.md): The information that describes a ticketed event reservation.

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

# Siri Event Suggestions (Objective-C)

**Framework:** Intents  
**Kind:** API Collection

Provide users with current, actionable information connected to a reservation.

<a id="overview"></a>

## Overview

Siri can expose reservation information from your app in context and at specific times so the user can take relevant actions based on the circumstances. Your app donates an [INInteraction](../intents/ininteraction.md) object that contains information about the reservation that can be sent to the user to allow them to confirm a hotel reservation, remind them to check in for a flight, help them return a rental car, and several other options.

> **Tip**

>  If you send your users reservation information in email or web pages, use [Siri Event Suggestions Markup](https://developer.apple.com/documentation/sirieventsuggestionsmarkup) to provide the information to Siri as well. Siri uses reservation IDs to prevent duplicate entries.

Apps offering reservations with check-in capabilities can integrate with Shortcuts Suggestions on the Lock Screen and allow users to launch your app to complete checking in for their reservation. Create a new reservation object with an array of [INReservationAction](../intents/inreservationaction.md) objects that contain a user activity and relevant time frame. Siri provides users with the ability to launch your app with the user activity and time frame information. For instance, a flight reservation app may provide users the ability to check-in for a flight starting 24 hours before the departure time.

## Topics

### Essentials

- [Donating Reservations](donating-reservations.md): Inform Siri of reservations made from your app.

### Reservation Details

- [INGetReservationDetailsIntent](../intents/ingetreservationdetailsintent.md): A request for details about one or more reservations.
- [INGetReservationDetailsIntentResponse](../intents/ingetreservationdetailsintentresponse.md): Your app’s response to a request for reservation details.

### Common Reservation Data Objects

- [INReservation](../intents/inreservation.md): An object that describes a reservation.
- [INReservationAction](../intents/inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](../intents/inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](../intents/inseat.md): An object containing seat information associated with a reservation.

### Travel Reservations

- [INFlightReservation](../intents/inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](../intents/intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](../intents/inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](../intents/inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](../intents/inrentalcarreservation.md): The information that describes a rental car reservation.

### Food, Lodging, and Event Reservations

- [INRestaurantReservation](../intents/inrestaurantreservation.md): The information that describes a restaurant reservation.
- [INLodgingReservation](../intents/inlodgingreservation.md): The information that describes a lodging reservation.
- [INTicketedEventReservation](../intents/inticketedeventreservation.md): The information that describes a ticketed event reservation.

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
- [Apple Watch support](watch-and-widget-support.md): Deprecated. Display relevant shortcuts on the Siri watch face.
