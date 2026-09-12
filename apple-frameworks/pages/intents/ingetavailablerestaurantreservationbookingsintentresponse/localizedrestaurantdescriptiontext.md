> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/localizedrestaurantdescriptiontext](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/localizedrestaurantdescriptiontext)

# localizedRestaurantDescriptionText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string containing a description of the restaurant.

## Declaration

```swift
var localizedRestaurantDescriptionText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide descriptive information about the restaurant. You are responsible for the contents of this string, Typical descriptions might include a summary of the cuisine offered by the restaurant along with a description of the restaurant’s ambiance, amenities, and services. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedBookingAdvisementText](localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.
- [termsAndConditions](termsandconditions.md): The terms and conditions of using your company’s services.

# localizedRestaurantDescriptionText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string containing a description of the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * localizedRestaurantDescriptionText;
```

```objectivec
@property (atomic, copy, nullable) NSString * localizedRestaurantDescriptionText;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide descriptive information about the restaurant. You are responsible for the contents of this string, Typical descriptions might include a summary of the cuisine offered by the restaurant along with a description of the restaurant’s ambiance, amenities, and services. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedBookingAdvisementText](localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.
- [termsAndConditions](termsandconditions.md): The terms and conditions of using your company’s services.
