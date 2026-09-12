> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/workouts](https://developer.apple.com/documentation/sirikit/workouts)

# Workouts

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Start, end, and manage fitness routines.

<a id="overview"></a>

## Overview

Users can start, pause, resume, cancel, or end workouts with Siri. Your Intents app extension directs any workout-related requests to your app, which manages the actual workouts. SiriKit automatically asks users to unlock their device, as needed, before launching your app.

You can use an Intents UI app extension to provide a custom interface for workout-related intents.

![A screenshot of an Apple watch with Siri active and responding to the user’s request to start a running workout.](https://developer.apple.com/images/com.apple.sirikit/media-3743227@2x.png)

## Topics

### Essentials

- [Handling Workout Requests with SiriKit](handling-workout-requests-with-sirikit.md): Add an Intent Extension to your app that handles requests to control workouts with Siri.

### Start a Workout

- [INStartWorkoutIntentHandling](../intents/instartworkoutintenthandling.md): An interface that handles requests to start a workout.
- [INStartWorkoutIntent](../intents/instartworkoutintent.md): A request to start a workout for the user.
- [INStartWorkoutIntentResponse](../intents/instartworkoutintentresponse.md): Your app’s response to a start workout intent.

### Pause a Workout

- [INPauseWorkoutIntentHandling](../intents/inpauseworkoutintenthandling.md): An interface that handles requests to pause a workout.
- [INPauseWorkoutIntent](../intents/inpauseworkoutintent.md): A request to pause the current workout that also stops the gathering of workout data.
- [INPauseWorkoutIntentResponse](../intents/inpauseworkoutintentresponse.md): Your app’s response to a pause workout intent.

### Resume a Workout

- [INResumeWorkoutIntentHandling](../intents/inresumeworkoutintenthandling.md): The interface that handles requests to resume a workout.
- [INResumeWorkoutIntent](../intents/inresumeworkoutintent.md): A request to resume a paused workout.
- [INResumeWorkoutIntentResponse](../intents/inresumeworkoutintentresponse.md): Your app’s response to a resume workout intent.

### Cancel a Workout

- [INCancelWorkoutIntentHandling](../intents/incancelworkoutintenthandling.md): The interface that handles requests to cancel a workout.
- [INCancelWorkoutIntent](../intents/incancelworkoutintent.md): A request to cancel an active workout.
- [INCancelWorkoutIntentResponse](../intents/incancelworkoutintentresponse.md): Your app’s response to a cancel workout intent.

### End a Workout

- [INEndWorkoutIntentHandling](../intents/inendworkoutintenthandling.md): An interface that handles requests to complete a workout.
- [INEndWorkoutIntent](../intents/inendworkoutintent.md): A request to end the current workout that also validates workout parameters and saves the results.
- [INEndWorkoutIntentResponse](../intents/inendworkoutintentresponse.md): Your app’s response to an end workout intent.

### Workout Data Objects

- [INWorkoutNameIdentifier](../intents/inworkoutnameidentifier.md): Constants that indicate the type of workout.
- [INWorkoutGoalUnitType](../intents/inworkoutgoalunittype.md): Describes the unit of measure with constants for a workout.
- [INWorkoutLocationType](../intents/inworkoutlocationtype.md): Describes the location of a workout.

### Resolution Results

- [INWorkoutGoalUnitTypeResolutionResult](../intents/inworkoutgoalunittyperesolutionresult.md): A resolution result for the units of a workout goal.
- [INWorkoutLocationTypeResolutionResult](../intents/inworkoutlocationtyperesolutionresult.md): A resolution result for the location type where the workout occurs.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
