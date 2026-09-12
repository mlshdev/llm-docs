> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults)

# earliestBookingDateForResults (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The earliest date to associate with any reservations.

## Declaration

```swift
var earliestBookingDateForResults: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

After retrieving the user’s reservations, remove any reservations occurring before the date specified by this property. If the value of this property is `nil`, do not remove reservations based on their date.

## See Also

### Getting the Result Limits

- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservations to include in your response object.

# earliestBookingDateForResults (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The earliest date to associate with any reservations.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * earliestBookingDateForResults;
```

```objectivec
@property (atomic, copy, nullable) NSDate * earliestBookingDateForResults;
```

<a id="Discussion"></a>

## Discussion

After retrieving the user’s reservations, remove any reservations occurring before the date specified by this property. If the value of this property is `nil`, do not remove reservations based on their date.

## See Also

### Getting the Result Limits

- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservations to include in your response object.
