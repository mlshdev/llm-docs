> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/car-commands](https://developer.apple.com/documentation/sirikit/car-commands)

# Car Commands

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Manage vehicle door locks and get the vehicle’s status.

<a id="overview"></a>

## Overview

Users can lock or unlock the car’s doors and get other car-related information using Siri. Automotive vendors use their Intents app extension to validate the user’s request and communicate with the user’s registered vehicles.

## Topics

### Get Car Lock Status

- [INGetCarLockStatusIntentHandling](../intents/ingetcarlockstatusintenthandling.md): The handler interface for requesting the current status of the car’s locks.
- [INGetCarLockStatusIntent](../intents/ingetcarlockstatusintent.md): A request to get the lock status of the user’s car.
- [INGetCarLockStatusIntentResponse](../intents/ingetcarlockstatusintentresponse.md): Your app’s response to a request to get the car’s lock status.

### Set Car Lock Status

- [INSetCarLockStatusIntentHandling](../intents/insetcarlockstatusintenthandling.md): The handler interface for requesting to lock or unlock a car.
- [INSetCarLockStatusIntent](../intents/insetcarlockstatusintent.md): A request to lock or unlock the user’s car.
- [INSetCarLockStatusIntentResponse](../intents/insetcarlockstatusintentresponse.md): Your app’s response to a request to lock or unlock the car.

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntentHandling](../intents/ingetcarpowerlevelstatusintenthandling.md): The handler interface for requesting a car’s current power level.
- [INGetCarPowerLevelStatusIntent](../intents/ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponse](../intents/ingetcarpowerlevelstatusintentresponse.md): Your app’s response to a request for the vehicle power level.
- [INGetCarPowerLevelStatusIntentResponseObserver](../intents/ingetcarpowerlevelstatusintentresponseobserver.md): The interface for providing updates of a vehicle’s power level.

### Activate Car Signal

- [INActivateCarSignalIntentHandling](../intents/inactivatecarsignalintenthandling.md): The handler interface for requesting to activate the car’s signals.
- [INActivateCarSignalIntent](../intents/inactivatecarsignalintent.md): A request to activate the signals on the user’s car.
- [INActivateCarSignalIntentResponse](../intents/inactivatecarsignalintentresponse.md): Your app’s response to a request to activate a car’s signals.

### List Cars

Maps uses this intent to obtain a list of the user’s electric vehicles available for route planning. Siri does not generate this intent.

- [INListCarsIntentHandling](../intents/inlistcarsintenthandling.md): The handler interface for requesting a list of the user’s electric vehicles.
- [INListCarsIntent](../intents/inlistcarsintent.md): An intent for retrieving a list of the user’s electric vehicles.
- [INListCarsIntentResponse](../intents/inlistcarsintentresponse.md): Your app’s response to a request to list the user’s electric vehicles.

### Data Objects

- [INCarSignalOptions](../intents/incarsignaloptions.md): The signals produced by the user’s car.

### Resolution Results

- [INCarSignalOptionsResolutionResult](../intents/incarsignaloptionsresolutionresult.md): A resolution result for the signals the intent is managing on the car.

## See Also

### Standard Intents

- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
