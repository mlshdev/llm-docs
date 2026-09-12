> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/requiresmanualrequest](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/requiresmanualrequest)

# requiresManualRequest (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

## Declaration

```swift
var requiresManualRequest: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that your service can place reservations with the restaurant electronically. Change the value to [true](https://developer.apple.com/documentation/swift/true) if your service must manually contact the restaurant in order to make the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.

# requiresManualRequest (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresManualRequest;
```

```objectivec
@property (atomic) BOOL requiresManualRequest;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that your service can place reservations with the restaurant electronically. Change the value to [true](https://developer.apple.com/documentation/swift/true) if your service must manually contact the restaurant in order to make the reservation.

## See Also

### Configuring the Required Information

- [requiresName](requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
