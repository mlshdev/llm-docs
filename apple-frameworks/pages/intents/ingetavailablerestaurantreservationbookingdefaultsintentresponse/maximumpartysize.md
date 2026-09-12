> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/maximumpartysize](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/maximumpartysize)

# maximumPartySize (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum party size allowed by the restaurant.

## Declaration

```swift
@NSCopying var maximumPartySize: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the maximum party size that the restaurant allows. The system provides the user with this information and prevents the user from booking reservations when the party size exceeds this value.

Specify `nil` for this property if there is no maximum party size for the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.

# maximumPartySize (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum party size allowed by the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * maximumPartySize;
```

```objectivec
@property (atomic, copy, nullable) NSNumber * maximumPartySize;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the maximum party size that the restaurant allows. The system provides the user with this information and prevents the user from booking reservations when the party size exceeds this value.

Specify `nil` for this property if there is no maximum party size for the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.
