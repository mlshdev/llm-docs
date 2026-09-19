> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/earliestbookingdateforresults

# earliestBookingDateForResults (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The earliest date for which to return results.

## Declaration

```swift
var earliestBookingDateForResults: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, do not include time slots that occur before the date specified by this property.

## See Also

### Getting the Time Slot Constraints

- [latestBookingDateForResults](latestbookingdateforresults.md): The latest date for which to return results.
- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservation results to return.

# earliestBookingDateForResults (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The earliest date for which to return results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * earliestBookingDateForResults;
```

```objectivec
@property (atomic, copy, nullable) NSDate * earliestBookingDateForResults;
```

<a id="Discussion"></a>

## Discussion

When building the list of reservation time slots, do not include time slots that occur before the date specified by this property.

## See Also

### Getting the Time Slot Constraints

- [latestBookingDateForResults](latestbookingdateforresults.md): The latest date for which to return results.
- [maximumNumberOfResults](maximumnumberofresults.md): The maximum number of reservation results to return.
