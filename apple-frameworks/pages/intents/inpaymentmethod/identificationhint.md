> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod/identificationhint](https://developer.apple.com/documentation/intents/inpaymentmethod/identificationhint)

# identificationHint (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The hint for identifying the payment method.

## Declaration

```swift
var identificationHint: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this string in conjunction with the [name](name.md) property to identify the payment method uniquely. For example, this property may contain the last four digits of a credit card number to help distinguish it from other credit cards of the same type.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [name](name.md): The name of this payment type.
- [icon](icon.md): The image representing the payment method.

# identificationHint (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The hint for identifying the payment method.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identificationHint;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * identificationHint;
```

<a id="Discussion"></a>

## Discussion

Use this string in conjunction with the [name](name.md) property to identify the payment method uniquely. For example, this property may contain the last four digits of a credit card number to help distinguish it from other credit cards of the same type.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [name](name.md): The name of this payment type.
- [icon](icon.md): The image representing the payment method.
