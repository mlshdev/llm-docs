> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/preferredbookingdatecomponents

# preferredBookingDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time preferred by the user for the reservation.

## Declaration

```swift
var preferredBookingDateComponents: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property as a guide for determining the list of time slots for reservations. If no reservations are available at the specified date, you may choose a different date, as long as it falls between the dates specified by the [earliestBookingDateForResults](earliestbookingdateforresults.md) and [latestBookingDateForResults](latestbookingdateforresults.md) properties.

## See Also

### Getting the Reservation Details

- [partySize](partysize.md): The number of people in the guest’s party.

# preferredBookingDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time preferred by the user for the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateComponents * preferredBookingDateComponents;
```

```objectivec
@property (atomic, copy, nullable) NSDateComponents * preferredBookingDateComponents;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property as a guide for determining the list of time slots for reservations. If no reservations are available at the specified date, you may choose a different date, as long as it falls between the dates specified by the [earliestBookingDateForResults](earliestbookingdateforresults.md) and [latestBookingDateForResults](latestbookingdateforresults.md) properties.

## See Also

### Getting the Reservation Details

- [partySize](partysize.md): The number of people in the guest’s party.
