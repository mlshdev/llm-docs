> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/ride-booking](https://developer.apple.com/documentation/sirikit/ride-booking)

# Ride Booking

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Book rides and report their status.

<a id="overview"></a>

## Overview

Users can book rides from Maps, Shortcuts, and Siri Suggestions. When the user requests a ride from your service, SiriKit forwards the information to your Intents app extension for processing. The user can ask you to provide a list of available rides, to initiate the booking of a ride, and to provide status updates for a booked ride. Maps expects you to handle all of the intents in this domain and won’t load your Intents app extension if you don’t support all of them.

You can provide a custom interface for ride-booking intents using an Intents UI app extension.

> **Important**

>  For information about Siri and Ride Booking, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Topics

### Essentials

- [Handling the Ride-Booking Intents](handling-the-ride-booking-intents.md): Support the different intent-handling sequences for booking rides with Shortcuts or Maps.
- [Booking Rides with SiriKit](booking-rides-with-sirikit.md): Add Intents extensions to your app to handle requests to book rides using Siri and Maps.

### List Ride Options

Maps uses this intent to obtain a list of ride options from your ride-booking service. Siri does not generate this intent.

- [Generating a List of Ride Options](generating-a-list-of-ride-options.md): Generate ride options for Maps to display to the user.
- [INListRideOptionsIntentHandling](../intents/inlistrideoptionsintenthandling.md): The handler interface for fetching the list of rides currently available from your ride-booking service.
- [INListRideOptionsIntent](../intents/inlistrideoptionsintent.md): An intent for getting the types of rides available from a ride-booking service.
- [INListRideOptionsIntentResponse](../intents/inlistrideoptionsintentresponse.md): Your app’s response to a list ride options intent.

### Request a Ride

Book the ride based on the information provided by the user.

- [INRequestRideIntentHandling](../intents/inrequestrideintenthandling.md): The handler interface for booking a ride for the user.
- [INRequestRideIntent](../intents/inrequestrideintent.md): A request to book the specified ride from your service.
- [INRequestRideIntentResponse](../intents/inrequestrideintentresponse.md): Your app’s response to a request ride intent.

### Get the Ride Status

Return the status of the booked ride that is currently active.

- [INGetRideStatusIntentHandling](../intents/ingetridestatusintenthandling.md): The handler interface for fetching the status of the user’s current ride.
- [INGetRideStatusIntent](../intents/ingetridestatusintent.md): A request for the current status of a previously booked ride.
- [INGetRideStatusIntentResponse](../intents/ingetridestatusintentresponse.md): Your app’s response to a get ride status intent.
- [INGetRideStatusIntentResponseObserver](../intents/ingetridestatusintentresponseobserver.md): An interface for providing updated status for an active ride.

### Cancel Ride

- [INCancelRideIntentHandling](../intents/incancelrideintenthandling.md): The handler interface for canceling a previously booked ride.
- [INCancelRideIntent](../intents/incancelrideintent.md): An intent requesting the cancellation of a previously booked ride.
- [INCancelRideIntentResponse](../intents/incancelrideintentresponse.md): Your app’s response to a cancel ride intent.

### Send Ride Feedback

- [INSendRideFeedbackIntentHandling](../intents/insendridefeedbackintenthandling.md): The handler interface for sending ride feedback to your service.
- [INSendRideFeedbackIntent](../intents/insendridefeedbackintent.md): An intent indicating that the user provided feedback for a completed ride.
- [INSendRideFeedbackIntentResponse](../intents/insendridefeedbackintentresponse.md): Your app’s response to a send ride feedback intent.

### Data Objects

When crafting your responses, use these objects to specify details about the booking, the vehicle, and the driver providing the ride.

- [INRideOption](../intents/inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](../intents/inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](../intents/inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](../intents/inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](../intents/inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](../intents/inridepartysizeoption.md): The price of a ride involving the specified number of people.
- [INRideCompletionStatus](../intents/inridecompletionstatus.md): Additional details about whether a ride completed successfully or someone canceled the ride.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
