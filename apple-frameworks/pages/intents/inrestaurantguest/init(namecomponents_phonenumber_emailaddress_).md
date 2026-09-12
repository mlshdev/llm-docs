> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguest/init(namecomponents:phonenumber:emailaddress:)](https://developer.apple.com/documentation/intents/inrestaurantguest/init(namecomponents:phonenumber:emailaddress:))

# init(nameComponents:phoneNumber:emailAddress:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the object with the specified name and contact information for the user.

## Declaration

```swift
init(nameComponents: PersonNameComponents?, phoneNumber: String?, emailAddress: String?)
```

## Parameters

- `nameComponents`: The name of the user who is creating or managing the reservation.
- `phoneNumber`: The phone number to use when contacting the user about reservations. Specify the information as a user-readable string that can be displayed in the reservations interface.
- `emailAddress`: The email address to use when contacting the user about reservations. Specify the information as a user-readable string that can be displayed in the reservations interface.

<a id="return-value"></a>

## Return Value

An initialized restaurant guest object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method stores a copy of the `phoneNumber` and `emailAddress` objects that you provide.

# initWithNameComponents:phoneNumber:emailAddress: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the object with the specified name and contact information for the user.

## Declaration

```objectivec
- (instancetype) initWithNameComponents:(NSPersonNameComponents *) nameComponents phoneNumber:(NSString *) phoneNumber emailAddress:(NSString *) emailAddress;
```

## Parameters

- `nameComponents`: The name of the user who is creating or managing the reservation.
- `phoneNumber`: The phone number to use when contacting the user about reservations. Specify the information as a user-readable string that can be displayed in the reservations interface.
- `emailAddress`: The email address to use when contacting the user about reservations. Specify the information as a user-readable string that can be displayed in the reservations interface.

<a id="return-value"></a>

## Return Value

An initialized restaurant guest object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method stores a copy of the `phoneNumber` and `emailAddress` objects that you provide.
