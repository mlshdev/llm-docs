> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/maximumnumberofresults

# maximumNumberOfResults (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum number of reservation results to return.

## Declaration

```swift
@NSCopying var maximumNumberOfResults: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, limit the number of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects you create to the number in this property.

## See Also

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date for which to return results.
- [latestBookingDateForResults](latestbookingdateforresults.md): The latest date for which to return results.

# maximumNumberOfResults (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum number of reservation results to return.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * maximumNumberOfResults;
```

```objectivec
@property (atomic, copy, nullable) NSNumber * maximumNumberOfResults;
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, limit the number of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects you create to the number in this property.

## See Also

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date for which to return results.
- [latestBookingDateForResults](latestbookingdateforresults.md): The latest date for which to return results.
