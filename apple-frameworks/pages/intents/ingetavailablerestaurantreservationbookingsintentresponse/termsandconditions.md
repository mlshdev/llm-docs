> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/termsandconditions](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/termsandconditions)

# termsAndConditions (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The terms and conditions of using your company’s services.

## Declaration

```swift
@NSCopying var termsAndConditions: INTermsAndConditions? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify any terms and conditions that apply to using your booking service. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedRestaurantDescriptionText](localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [localizedBookingAdvisementText](localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.

# termsAndConditions (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The terms and conditions of using your company’s services.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INTermsAndConditions * termsAndConditions;
```

```objectivec
@property (atomic, copy, nullable) INTermsAndConditions * termsAndConditions;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify any terms and conditions that apply to using your booking service. The default value of this property is `nil`.

## See Also

### Specifying Additional Information

- [localizedRestaurantDescriptionText](localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [localizedBookingAdvisementText](localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.
