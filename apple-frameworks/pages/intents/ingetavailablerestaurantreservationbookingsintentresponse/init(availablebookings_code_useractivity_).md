> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/init(availablebookings:code:useractivity:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/init(availablebookings:code:useractivity:))

# init(availableBookings:code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```swift
init(availableBookings: [INRestaurantReservationBooking], code: INGetAvailableRestaurantReservationBookingsIntentCode, userActivity: NSUserActivity?)
```

## Parameters

- `availableBookings`: An array of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects containing the details of the potential reservation times you are offering to the user.
- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INGetAvailableRestaurantReservationBookingsIntentCode](../ingetavailablerestaurantreservationbookingsintentcode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

# initWithAvailableBookings:code:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```objectivec
- (instancetype) initWithAvailableBookings:(NSArray<INRestaurantReservationBooking *> *) availableBookings code:(INGetAvailableRestaurantReservationBookingsIntentCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `availableBookings`: An array of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects containing the details of the potential reservation times you are offering to the user.
- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INGetAvailableRestaurantReservationBookingsIntentCode](../ingetavailablerestaurantreservationbookingsintentcode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.
