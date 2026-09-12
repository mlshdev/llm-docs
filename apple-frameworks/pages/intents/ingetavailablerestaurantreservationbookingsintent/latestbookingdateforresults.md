> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintent/latestbookingdateforresults](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/latestbookingdateforresults)

# latestBookingDateForResults (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The latest date for which to return results.

## Declaration

```swift
var latestBookingDateForResults: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, do not include time slots that occur after the date specified by this property.

## See Also

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date for which to return results.
- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservation results to return.

# latestBookingDateForResults (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The latest date for which to return results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * latestBookingDateForResults;
```

```objectivec
@property (atomic, copy, nullable) NSDate * latestBookingDateForResults;
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, do not include time slots that occur after the date specified by this property.

## See Also

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date for which to return results.
- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservation results to return.
