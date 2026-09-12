> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestdisplaypreferences](https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences)

# INRestaurantGuestDisplayPreferences (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Options about how to display guest information from system interfaces.

## Declaration

```swift
class INRestaurantGuestDisplayPreferences
```

<a id="overview"></a>

## Overview

An [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md) object contains configuration options used by any reservation-related interfaces that present guest information. Create an instance of this class and assign it to the [guestDisplayPreferences](ingetrestaurantguestintentresponse/guestdisplaypreferences.md) property of your [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object when handling a request for information about the person making a reservation. Use the properties of this class to specify what information you want displayed for a user and whether you can change that information prior to completing a reservation.

## Topics

### Specifying Which Fields to Display

- [nameFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/namefieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s name should.
- [phoneNumberFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/phonenumberfieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s phone number.
- [emailAddressFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/emailaddressfieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s email address.

### Specifying Required Fields

- [nameFieldFirstNameOptional](inrestaurantguestdisplaypreferences/namefieldfirstnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s first name.
- [nameFieldLastNameOptional](inrestaurantguestdisplaypreferences/namefieldlastnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s last name.

### Making the Guest Information Editable

- [nameEditable](inrestaurantguestdisplaypreferences/nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [emailAddressEditable](inrestaurantguestdisplaypreferences/emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.
- [phoneNumberEditable](inrestaurantguestdisplaypreferences/phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.

### Initializers

- [init(coder:)](inrestaurantguestdisplaypreferences/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurantGuestDisplayPreferences (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Options about how to display guest information from system interfaces.

## Declaration

```objectivec
@interface INRestaurantGuestDisplayPreferences : NSObject
```

<a id="overview"></a>

## Overview

An [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md) object contains configuration options used by any reservation-related interfaces that present guest information. Create an instance of this class and assign it to the [guestDisplayPreferences](ingetrestaurantguestintentresponse/guestdisplaypreferences.md) property of your [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object when handling a request for information about the person making a reservation. Use the properties of this class to specify what information you want displayed for a user and whether you can change that information prior to completing a reservation.

## Topics

### Specifying Which Fields to Display

- [nameFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/namefieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s name should.
- [phoneNumberFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/phonenumberfieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s phone number.
- [emailAddressFieldShouldBeDisplayed](inrestaurantguestdisplaypreferences/emailaddressfieldshouldbedisplayed.md): A Boolean value indicating whether to display the guest’s email address.

### Specifying Required Fields

- [nameFieldFirstNameOptional](inrestaurantguestdisplaypreferences/namefieldfirstnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s first name.
- [nameFieldLastNameOptional](inrestaurantguestdisplaypreferences/namefieldlastnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s last name.

### Making the Guest Information Editable

- [nameEditable](inrestaurantguestdisplaypreferences/nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [emailAddressEditable](inrestaurantguestdisplaypreferences/emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.
- [phoneNumberEditable](inrestaurantguestdisplaypreferences/phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
