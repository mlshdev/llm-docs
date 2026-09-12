> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod/name](https://developer.apple.com/documentation/intents/inpaymentmethod/name)

# name (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The name of this payment type.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with the [identificationHint](identificationhint.md) property to identify each payment method uniquely.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [identificationHint](identificationhint.md): The hint for identifying the payment method.
- [icon](icon.md): The image representing the payment method.

# name (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The name of this payment type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * name;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with the [identificationHint](identificationhint.md) property to identify each payment method uniquely.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [identificationHint](identificationhint.md): The hint for identifying the payment method.
- [icon](icon.md): The image representing the payment method.
