> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/providerimage](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/providerimage)

# providerImage (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image representing your app.

## Declaration

```swift
@NSCopying var providerImage: INImage { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays the image from this property in any interfaces involved in making reservations. For example, the Maps app displays this image as part of the reservations workflow.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.

# providerImage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image representing your app.

## Declaration

```objectivec
@property (nonatomic, copy) INImage * providerImage;
```

```objectivec
@property (atomic, copy) INImage * providerImage;
```

<a id="Discussion"></a>

## Discussion

The system displays the image from this property in any interfaces involved in making reservations. For example, the Maps app displays this image as part of the reservations workflow.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
