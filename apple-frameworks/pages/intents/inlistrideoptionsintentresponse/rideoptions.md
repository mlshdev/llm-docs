> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponse/rideoptions](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponse/rideoptions)

# rideOptions (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An array of ride options representing the services and prices that you are able to offer.

## Declaration

```swift
var rideOptions: [INRideOption]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the ride options that you are able to offer the user. Ride options provide general information about the pricing and passenger capacity of a class of vehicles in your fleet. They may also contain special conditions such as whether multiple users can share the ride. Include only the ride options that you could potentially book in the immediate future. You may also want to specify a value for the [expirationDate](expirationdate.md) property if pricing or availability can change.

The default value of this property is `nil`. If you do not offer service in the user’s area, you may leave this property set to `nil`.

## See Also

### Accessing the Response Parameters

- [expirationDate](expirationdate.md): The date after which the specified ride options are no longer valid.
- [paymentMethods](paymentmethods.md): An array of payment methods supported by your service.

# rideOptions (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An array of ride options representing the services and prices that you are able to offer.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INRideOption *> * rideOptions;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INRideOption *> * rideOptions;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the ride options that you are able to offer the user. Ride options provide general information about the pricing and passenger capacity of a class of vehicles in your fleet. They may also contain special conditions such as whether multiple users can share the ride. Include only the ride options that you could potentially book in the immediate future. You may also want to specify a value for the [expirationDate](expirationdate.md) property if pricing or availability can change.

The default value of this property is `nil`. If you do not offer service in the user’s area, you may leave this property set to `nil`.

## See Also

### Accessing the Response Parameters

- [expirationDate](expirationdate.md): The date after which the specified ride options are no longer valid.
- [paymentMethods](paymentmethods.md): An array of payment methods supported by your service.
