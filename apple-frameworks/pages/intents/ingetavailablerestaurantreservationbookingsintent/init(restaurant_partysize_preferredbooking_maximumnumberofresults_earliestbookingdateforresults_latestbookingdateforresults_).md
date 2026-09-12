> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintent/init(restaurant:partysize:preferredbooking:maximumnumberofresults:earliestbookingdateforresults:latestbookingdateforresults:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/init(restaurant:partysize:preferredbooking:maximumnumberofresults:earliestbookingdateforresults:latestbookingdateforresults:))

# init(restaurant:partySize:preferredBooking:maximumNumberOfResults:earliestBookingDateForResults:latestBookingDateForResults:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified reservation information.

## Declaration

```swift
init(restaurant: INRestaurant, partySize: Int, preferredBooking preferredBookingDateComponents: DateComponents?, maximumNumberOfResults: NSNumber?, earliestBookingDateForResults: Date?, latestBookingDateForResults: Date?)
```

## Parameters

- `restaurant`: The restaurant associated with the reservation.
- `partySize`: The number of people in the guest’s party.
- `preferredBookingDateComponents`: The date and time preferred by the user for the reservation.
- `maximumNumberOfResults`: The maximum number of reservation results to return.
- `earliestBookingDateForResults`: The earliest date for which to return results.
- `latestBookingDateForResults`: The latest date for which to return results.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks you to provide the available reservations for the restaurant. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithRestaurant:partySize:preferredBookingDateComponents:maximumNumberOfResults:earliestBookingDateForResults:latestBookingDateForResults: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified reservation information.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant partySize:(NSUInteger) partySize preferredBookingDateComponents:(NSDateComponents *) preferredBookingDateComponents maximumNumberOfResults:(NSNumber *) maximumNumberOfResults earliestBookingDateForResults:(NSDate *) earliestBookingDateForResults latestBookingDateForResults:(NSDate *) latestBookingDateForResults;
```

## Parameters

- `restaurant`: The restaurant associated with the reservation.
- `partySize`: The number of people in the guest’s party.
- `preferredBookingDateComponents`: The date and time preferred by the user for the reservation.
- `maximumNumberOfResults`: The maximum number of reservation results to return.
- `earliestBookingDateForResults`: The earliest date for which to return results.
- `latestBookingDateForResults`: The latest date for which to return results.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks you to provide the available reservations for the restaurant. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
