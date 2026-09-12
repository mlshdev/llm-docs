> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponse/init(usercurrentbookings:code:useractivity:)](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponse/init(usercurrentbookings:code:useractivity:))

# init(userCurrentBookings:code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```swift
init(userCurrentBookings: [INRestaurantReservationUserBooking], code: INGetUserCurrentRestaurantReservationBookingsIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `userCurrentBookings`: The array of [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) objects representing the user’s current reservations. If the user has no current bookings, specify an empty array.
- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode](../ingetusercurrentrestaurantreservationbookingsintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

# initWithUserCurrentBookings:code:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```objectivec
- (instancetype) initWithUserCurrentBookings:(NSArray<INRestaurantReservationUserBooking *> *) userCurrentBookings code:(INGetUserCurrentRestaurantReservationBookingsIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `userCurrentBookings`: The array of [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) objects representing the user’s current reservations. If the user has no current bookings, specify an empty array.
- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode](../ingetusercurrentrestaurantreservationbookingsintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.
