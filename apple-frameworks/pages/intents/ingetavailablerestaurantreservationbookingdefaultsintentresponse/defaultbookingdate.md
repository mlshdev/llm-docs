> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultbookingdate](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultbookingdate)

# defaultBookingDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The default booking date to use when placing the initial reservations request.

## Declaration

```swift
var defaultBookingDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

The value you specify in this property should be the date and time you think the user is most likely to choose. The user can change this date later, but the system uses it when asking your Intents extension to provide an initial set of reservation options. The date should take into account the hours in which the restaurant is open and should also reflect a date when making a reservation is possible. Do not specify a date on which the restaurant is closed or fully booked.

## See Also

### Specifying the Default Values

- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.

# defaultBookingDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The default booking date to use when placing the initial reservations request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * defaultBookingDate;
```

```objectivec
@property (atomic, copy, readonly) NSDate * defaultBookingDate;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

The value you specify in this property should be the date and time you think the user is most likely to choose. The user can change this date later, but the system uses it when asking your Intents extension to provide an initial set of reservation options. The date should take into account the hours in which the restaurant is open and should also reflect a date when making a reservation is possible. Do not specify a date on which the restaurant is closed or fully booked.

## See Also

### Specifying the Default Values

- [defaultPartySize](defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.
