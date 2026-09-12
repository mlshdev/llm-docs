> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod/init(type:name:identificationhint:icon:)](https://developer.apple.com/documentation/intents/inpaymentmethod/init(type:name:identificationhint:icon:))

# init(type:name:identificationHint:icon:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the payment method object with the specified type and descriptive information.

## Declaration

```swift
init(type: INPaymentMethodType, name: String?, identificationHint: String?, icon: INImage?)
```

## Parameters

- `type`: The payment method type. For a list of possible values, see [INPaymentMethodType](../inpaymentmethodtype.md).
- `name`: The name of the payment method. For a branded credit card, you might specify the specific brand name of the card. If the user provides you with payment information, such as credit card information, you can specify the name that the user assigned to that payment method or whatever descriptive string your company assigned to it.
- `identificationHint`: Additional information that when combined with the `name` parameter helps you identify the payment method. You can use identification hints to help differentiate payment methods with similar names. For example, if the user has two credit cards of the same type, you might use this parameter to specify the last four digits of the credit card.
- `icon`: An image that visually represents the payment method. For payment methods with an associated brand, use the image associated with the brand.

<a id="return-value"></a>

## Return Value

An initialized payment method object.

<a id="Discussion"></a>

## Discussion

This method stores copies of the `name`, `identificationHint`, and `icon` parameters that you provide.

Don’t use this method to create payment method objects for Apple Pay. Instead, use the [applePay()](applepay%28%29.md) to obtain the correct payment method object.

## See Also

### Initializing a Payment Object

- [applePay()](applepay%28%29.md): Creates and returns a payment method object that represents payment through Apple Pay.

# initWithType:name:identificationHint:icon: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the payment method object with the specified type and descriptive information.

## Declaration

```objectivec
- (instancetype) initWithType:(INPaymentMethodType) type name:(NSString *) name identificationHint:(NSString *) identificationHint icon:(INImage *) icon;
```

## Parameters

- `type`: The payment method type. For a list of possible values, see [INPaymentMethodType](../inpaymentmethodtype.md).
- `name`: The name of the payment method. For a branded credit card, you might specify the specific brand name of the card. If the user provides you with payment information, such as credit card information, you can specify the name that the user assigned to that payment method or whatever descriptive string your company assigned to it.
- `identificationHint`: Additional information that when combined with the `name` parameter helps you identify the payment method. You can use identification hints to help differentiate payment methods with similar names. For example, if the user has two credit cards of the same type, you might use this parameter to specify the last four digits of the credit card.
- `icon`: An image that visually represents the payment method. For payment methods with an associated brand, use the image associated with the brand.

<a id="return-value"></a>

## Return Value

An initialized payment method object.

<a id="Discussion"></a>

## Discussion

This method stores copies of the `name`, `identificationHint`, and `icon` parameters that you provide.

Don’t use this method to create payment method objects for Apple Pay. Instead, use the [applePayPaymentMethod](applepay%28%29.md) to obtain the correct payment method object.

## See Also

### Initializing a Payment Object

- [applePayPaymentMethod](applepay%28%29.md): Creates and returns a payment method object that represents payment through Apple Pay.
