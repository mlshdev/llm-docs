> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguest/phonenumber](https://developer.apple.com/documentation/intents/inrestaurantguest/phonenumber)

# phoneNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The phone number to use when contacting the user about reservations.

## Declaration

```swift
var phoneNumber: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Make sure you format the string in this property in order to properly display it to the user. When actually booking the reservation, you can also pass the information to the restaurant that receives the booking, so that it has a way of contacting the user if they need to change the reservation later.

## See Also

### Accessing the Guest Information

- [emailAddress](emailaddress.md): The email address to use when contacting the user about reservations.

# phoneNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The phone number to use when contacting the user about reservations.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * phoneNumber;
```

```objectivec
@property (atomic, copy, nullable) NSString * phoneNumber;
```

<a id="Discussion"></a>

## Discussion

Make sure you format the string in this property in order to properly display it to the user. When actually booking the reservation, you can also pass the information to the restaurant that receives the booking, so that it has a way of contacting the user if they need to change the reservation later.

## See Also

### Accessing the Guest Information

- [emailAddress](emailaddress.md): The email address to use when contacting the user about reservations.
