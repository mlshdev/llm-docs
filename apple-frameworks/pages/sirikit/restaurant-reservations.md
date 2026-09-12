> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/restaurant-reservations](https://developer.apple.com/documentation/sirikit/restaurant-reservations)

# Restaurant Reservations

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Create and manage restaurant reservations with help from the Maps app.

<a id="overview"></a>

## Overview

Users can book restaurant reservations and view their current reservations from Maps. You provide Apple with information about the restaurants that you support before implementing support for these intents. When the user books a restaurant, Maps includes your information in the intents that it sends to your Intents app extension, which uses the information to complete the booking.

## Topics

### Book Restaurant Reservation

- [INBookRestaurantReservationIntentHandling](../intents/inbookrestaurantreservationintenthandling.md): The handler interface booking a reservation that the user selected.
- [INBookRestaurantReservationIntent](../intents/inbookrestaurantreservationintent.md): A request to create a reservation at the specified restaurant.
- [INBookRestaurantReservationIntentResponse](../intents/inbookrestaurantreservationintentresponse.md): Your app’s response to a book restaurant reservation intent.

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](../intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling.md): The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
- [INGetAvailableRestaurantReservationBookingDefaultsIntent](../intents/ingetavailablerestaurantreservationbookingdefaultsintent.md): A request for the default values to use when fetching potential reservation options.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](../intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse.md): Your app’s response to a get available restaurant reservation booking defaults intent.

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntentHandling](../intents/ingetavailablerestaurantreservationbookingsintenthandling.md): The handler interface for generating a list of potential reservation times from which the user can select.
- [INGetAvailableRestaurantReservationBookingsIntent](../intents/ingetavailablerestaurantreservationbookingsintent.md): A request for the time slots available for making a reservation.
- [INGetAvailableRestaurantReservationBookingsIntentResponse](../intents/ingetavailablerestaurantreservationbookingsintentresponse.md): Your app’s response to a get available restaurant reservation bookings intent.

### Get Restaurant Guest

- [INGetRestaurantGuestIntentHandling](../intents/ingetrestaurantguestintenthandling.md): The handler interface for fetching information about the person making a reservation.
- [INGetRestaurantGuestIntent](../intents/ingetrestaurantguestintent.md): A request for information about the guest who is making reservations.
- [INGetRestaurantGuestIntentResponse](../intents/ingetrestaurantguestintentresponse.md): Your app’s response to a get restaurant guest intent.

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntentHandling](../intents/ingetusercurrentrestaurantreservationbookingsintenthandling.md): The handler interface for fetching and delivering the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntent](../intents/ingetusercurrentrestaurantreservationbookingsintent.md): A request for the list of the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponse](../intents/ingetusercurrentrestaurantreservationbookingsintentresponse.md): Your app’s response to a get user current restaurant reservation bookings intent.

### Data Objects

- [INRestaurant](../intents/inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](../intents/inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](../intents/inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](../intents/inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](../intents/inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](../intents/inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](../intents/intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](../intents/inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

### Resolution Results

- [INRestaurantResolutionResult](../intents/inrestaurantresolutionresult.md): A resolution result for the restaurant selected by a user.
- [INRestaurantGuestResolutionResult](../intents/inrestaurantguestresolutionresult.md): A resolution result for the identity of a user involved in booking a reservation at a restaurant.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
