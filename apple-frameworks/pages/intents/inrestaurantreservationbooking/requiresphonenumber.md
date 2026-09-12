> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/requiresphonenumber](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/requiresphonenumber)

# requiresPhoneNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires a phone number before booking.

## Declaration

```swift
var requiresPhoneNumber: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires a phone number to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

# requiresPhoneNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires a phone number before booking.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresPhoneNumber;
```

```objectivec
@property (atomic) BOOL requiresPhoneNumber;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires a phone number to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.
