> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/minimumpartysize](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/minimumpartysize)

# minimumPartySize (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum party size allowed by the restaurant.

## Declaration

```swift
@NSCopying var minimumPartySize: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the minimum party size that the restaurant allows. The system provides the user with this information and prevents the user from booking reservations when the party size is below this value.

Specify `nil` for this property if there is no minimum party size for the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.

# minimumPartySize (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum party size allowed by the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * minimumPartySize;
```

```objectivec
@property (atomic, copy, nullable) NSNumber * minimumPartySize;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the minimum party size that the restaurant allows. The system provides the user with this information and prevents the user from booking reservations when the party size is below this value.

Specify `nil` for this property if there is no minimum party size for the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.
