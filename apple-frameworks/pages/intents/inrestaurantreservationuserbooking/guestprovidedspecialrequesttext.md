> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/guestprovidedspecialrequesttext](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/guestprovidedspecialrequesttext)

# guestProvidedSpecialRequestText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Any special requests made by the user with the reservation.

## Declaration

```swift
var guestProvidedSpecialRequestText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Users can include special requests when booking a reservation. For example, the user might use request a non-smoking table or enumerate any dietary restrictions. If the user provides additional requests, this field contains that information.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [status](status.md): The current status of the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.

# guestProvidedSpecialRequestText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Any special requests made by the user with the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * guestProvidedSpecialRequestText;
```

```objectivec
@property (atomic, copy, nullable) NSString * guestProvidedSpecialRequestText;
```

<a id="Discussion"></a>

## Discussion

Users can include special requests when booking a reservation. For example, the user might use request a non-smoking table or enumerate any dietary restrictions. If the user provides additional requests, this field contains that information.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [status](status.md): The current status of the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.
