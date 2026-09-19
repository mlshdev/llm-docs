> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/guest

# guest (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The guest associated with the reservation.

## Declaration

```swift
@NSCopying var guest: INRestaurantGuest { get set }
```

<a id="Discussion"></a>

## Discussion

Normally, the guest is the same person who made the reservation. However, If your app lets users edit the name on a reservation, the guest may be different.

## See Also

### Accessing the Reservation Information

- [status](status.md): The current status of the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

# guest (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The guest associated with the reservation.

## Declaration

```objectivec
@property (nonatomic, copy) INRestaurantGuest * guest;
```

```objectivec
@property (atomic, copy) INRestaurantGuest * guest;
```

<a id="Discussion"></a>

## Discussion

Normally, the guest is the same person who made the reservation. However, If your app lets users edit the name on a reservation, the guest may be different.

## See Also

### Accessing the Reservation Information

- [status](status.md): The current status of the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.
