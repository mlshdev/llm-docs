> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponse/paymentmethods](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponse/paymentmethods)

# paymentMethods (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An array of payment methods supported by your service.

## Declaration

```swift
var paymentMethods: [INPaymentMethod]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to inform the user about the forms of payment that you accept. The default value of this property is `nil`, which results in no displayed payment method information.

## See Also

### Accessing the Response Parameters

- [rideOptions](rideoptions.md): An array of ride options representing the services and prices that you are able to offer.
- [expirationDate](expirationdate.md): The date after which the specified ride options are no longer valid.

# paymentMethods (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An array of payment methods supported by your service.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INPaymentMethod *> * paymentMethods;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INPaymentMethod *> * paymentMethods;
```

<a id="Discussion"></a>

## Discussion

Use this property to inform the user about the forms of payment that you accept. The default value of this property is `nil`, which results in no displayed payment method information.

## See Also

### Accessing the Response Parameters

- [rideOptions](rideoptions.md): An array of ride options representing the services and prices that you are able to offer.
- [expirationDate](expirationdate.md): The date after which the specified ride options are no longer valid.
