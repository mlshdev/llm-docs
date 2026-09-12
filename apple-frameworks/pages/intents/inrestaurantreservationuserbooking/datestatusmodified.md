> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/datestatusmodified](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/datestatusmodified)

# dateStatusModified (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date on which the status of the reservation changed.

## Declaration

```swift
var dateStatusModified: Date { get set }
```

<a id="Discussion"></a>

## Discussion

When you change the [status](status.md) property of the reservation, update this property with the date on which the status changed.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [status](status.md): The current status of the reservation.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

# dateStatusModified (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date on which the status of the reservation changed.

## Declaration

```objectivec
@property (nonatomic, copy) NSDate * dateStatusModified;
```

```objectivec
@property (atomic, copy) NSDate * dateStatusModified;
```

<a id="Discussion"></a>

## Discussion

When you change the [status](status.md) property of the reservation, update this property with the date on which the status changed.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [status](status.md): The current status of the reservation.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.
