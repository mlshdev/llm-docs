> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod/applepay()](https://developer.apple.com/documentation/intents/inpaymentmethod/applepay())

# applePay() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates and returns a payment method object that represents payment through Apple Pay.

## Declaration

```swift
class func applePay() -> Self
```

<a id="Discussion"></a>

## Discussion

Use this method to obtain a payment method object for Apple Pay.

## See Also

### Initializing a Payment Object

- [init(type:name:identificationHint:icon:)](init%28type_name_identificationhint_icon_%29.md): Initializes the payment method object with the specified type and descriptive information.

# applePayPaymentMethod (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates and returns a payment method object that represents payment through Apple Pay.

## Declaration

```objectivec
+ (instancetype) applePayPaymentMethod;
```

<a id="Discussion"></a>

## Discussion

Use this method to obtain a payment method object for Apple Pay.

## See Also

### Initializing a Payment Object

- [initWithType:name:identificationHint:icon:](init%28type_name_identificationhint_icon_%29.md): Initializes the payment method object with the specified type and descriptive information.
