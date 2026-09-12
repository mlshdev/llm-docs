> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults)

# maximumNumberOfResults (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum number of reservations to include in your response object.

## Declaration

```swift
@NSCopying var maximumNumberOfResults: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to limit the total number of reservations you include in your response to this intent. If this property is `nil`, include all of the reservations you found.

## See Also

### Getting the Result Limits

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date to associate with any reservations.

# maximumNumberOfResults (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum number of reservations to include in your response object.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * maximumNumberOfResults;
```

```objectivec
@property (atomic, copy, nullable) NSNumber * maximumNumberOfResults;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to limit the total number of reservations you include in your response to this intent. If this property is `nil`, include all of the reservations you found.

## See Also

### Getting the Result Limits

- [earliestBookingDateForResults](earliestbookingdateforresults.md): The earliest date to associate with any reservations.
