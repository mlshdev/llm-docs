> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/requiresname](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/requiresname)

# requiresName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires a guest name before booking.

## Declaration

```swift
var requiresName: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires the guest’s name to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

# requiresName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires a guest name before booking.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresName;
```

```objectivec
@property (atomic) BOOL requiresName;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Change the value to [true](https://developer.apple.com/documentation/swift/true) if the restaurant (or your service) requires the guest’s name to confirm the reservation.

## See Also

### Configuring the Required Information

- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.
