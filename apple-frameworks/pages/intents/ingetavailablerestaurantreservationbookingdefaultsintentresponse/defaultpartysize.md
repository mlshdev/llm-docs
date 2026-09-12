> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultpartysize](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultpartysize)

# defaultPartySize (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The party size to use when placing the initial reservations request.

## Declaration

```swift
var defaultPartySize: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

The value you specify in this property represents the likely size of the user’s party. The user can change this value later, but the system uses it when asking your Intents extension to provide an initial set of reservation options. The default party size must fall between the minimum and maximum party sizes supported by the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.

# defaultPartySize (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The party size to use when placing the initial reservations request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger defaultPartySize;
```

```objectivec
@property (atomic, readonly) NSUInteger defaultPartySize;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

The value you specify in this property represents the likely size of the user’s party. The user can change this value later, but the system uses it when asking your Intents extension to provide an initial set of reservation options. The default party size must fall between the minimum and maximum party sizes supported by the restaurant.

## See Also

### Specifying the Default Values

- [defaultBookingDate](defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [maximumPartySize](maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](providerimage.md): An image representing your app.
