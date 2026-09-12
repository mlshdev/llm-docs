> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intermsandconditions](https://developer.apple.com/documentation/intents/intermsandconditions)

# INTermsAndConditions (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The terms and conditions of service when making restaurant reservations.

## Declaration

```swift
class INTermsAndConditions
```

<a id="overview"></a>

## Overview

An [INTermsAndConditions](intermsandconditions.md) object contains information about the terms and conditions that your company applies to users when handling restaurant reservations. Use this object to communicate the details of your company’s policies. The system presents your terms and conditions to the user through the built-in reservation interfaces. You create instances of this class when providing a response to a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object.

## Topics

### Initializing the Terms and Conditions Object

- [init(localizedTermsAndConditionsText:privacyPolicyURL:termsAndConditionsURL:)](intermsandconditions/init%28localizedtermsandconditionstext_privacypolicyurl_termsandconditionsurl_%29.md): Initializes the terms and conditions object with the specified information.

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](intermsandconditions/localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [privacyPolicyURL](intermsandconditions/privacypolicyurl.md): The URL to your company’s privacy policy web page.
- [termsAndConditionsURL](intermsandconditions/termsandconditionsurl.md): The URL to your company’s terms and conditions web page.

### Initializers

- [init(coder:)](intermsandconditions/init%28coder_%29.md)

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
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INTermsAndConditions (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The terms and conditions of service when making restaurant reservations.

## Declaration

```objectivec
@interface INTermsAndConditions : NSObject
```

<a id="overview"></a>

## Overview

An [INTermsAndConditions](intermsandconditions.md) object contains information about the terms and conditions that your company applies to users when handling restaurant reservations. Use this object to communicate the details of your company’s policies. The system presents your terms and conditions to the user through the built-in reservation interfaces. You create instances of this class when providing a response to a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object.

## Topics

### Initializing the Terms and Conditions Object

- [initWithLocalizedTermsAndConditionsText:privacyPolicyURL:termsAndConditionsURL:](intermsandconditions/init%28localizedtermsandconditionstext_privacypolicyurl_termsandconditionsurl_%29.md): Initializes the terms and conditions object with the specified information.

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](intermsandconditions/localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [privacyPolicyURL](intermsandconditions/privacypolicyurl.md): The URL to your company’s privacy policy web page.
- [termsAndConditionsURL](intermsandconditions/termsandconditionsurl.md): The URL to your company’s terms and conditions web page.

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
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
