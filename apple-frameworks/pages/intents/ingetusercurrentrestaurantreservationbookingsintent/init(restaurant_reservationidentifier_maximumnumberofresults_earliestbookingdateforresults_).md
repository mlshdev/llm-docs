> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/init(restaurant:reservationidentifier:maximumnumberofresults:earliestbookingdateforresults:)](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/init(restaurant:reservationidentifier:maximumnumberofresults:earliestbookingdateforresults:))

# init(restaurant:reservationIdentifier:maximumNumberOfResults:earliestBookingDateForResults:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified reservation information.

## Declaration

```swift
init(restaurant: INRestaurant?, reservationIdentifier: String?, maximumNumberOfResults: NSNumber?, earliestBookingDateForResults: Date?)
```

## Parameters

- `restaurant`: A restaurant to use as a filter when searching for reservations.
- `reservationIdentifier`: An identifier to use when searching for the user’s reservations.
- `maximumNumberOfResults`: The maximum number of reservations to include in your response object.
- `earliestBookingDateForResults`: The earliest date to be associated with any reservations.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks you to provide the user’s current list of reservations. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithRestaurant:reservationIdentifier:maximumNumberOfResults:earliestBookingDateForResults: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified reservation information.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant reservationIdentifier:(NSString *) reservationIdentifier maximumNumberOfResults:(NSNumber *) maximumNumberOfResults earliestBookingDateForResults:(NSDate *) earliestBookingDateForResults;
```

## Parameters

- `restaurant`: A restaurant to use as a filter when searching for reservations.
- `reservationIdentifier`: An identifier to use when searching for the user’s reservations.
- `maximumNumberOfResults`: The maximum number of reservations to include in your response object.
- `earliestBookingDateForResults`: The earliest date to be associated with any reservations.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks you to provide the user’s current list of reservations. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
