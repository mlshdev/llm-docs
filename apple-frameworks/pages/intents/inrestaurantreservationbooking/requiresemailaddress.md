> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/requiresemailaddress](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/requiresemailaddress)

# requiresEmailAddress (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires an email address before it booking.

## Declaration

```swift
var requiresEmailAddress: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires an email address to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

# requiresEmailAddress (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires an email address before it booking.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresEmailAddress;
```

```objectivec
@property (atomic) BOOL requiresEmailAddress;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires an email address to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.
