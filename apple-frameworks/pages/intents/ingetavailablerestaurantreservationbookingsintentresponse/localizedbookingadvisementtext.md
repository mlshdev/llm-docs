> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/localizedbookingadvisementtext](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/localizedbookingadvisementtext)

# localizedBookingAdvisementText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string containing policies and information related to the reservation.

## Declaration

```swift
var localizedBookingAdvisementText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to convey restaurant policies, parking instructions, or special information related to the reservation. The system displays this information to the user along with the reservation options. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedRestaurantDescriptionText](localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [termsAndConditions](termsandconditions.md): The terms and conditions of using your company’s services.

# localizedBookingAdvisementText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string containing policies and information related to the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * localizedBookingAdvisementText;
```

```objectivec
@property (atomic, copy, nullable) NSString * localizedBookingAdvisementText;
```

<a id="Discussion"></a>

## Discussion

Use this property to convey restaurant policies, parking instructions, or special information related to the reservation. The system displays this information to the user along with the reservation options. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedRestaurantDescriptionText](localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [termsAndConditions](termsandconditions.md): The terms and conditions of using your company’s services.
