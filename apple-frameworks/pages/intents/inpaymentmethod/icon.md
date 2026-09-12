> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethod/icon](https://developer.apple.com/documentation/intents/inpaymentmethod/icon)

# icon (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The image representing the payment method.

## Declaration

```swift
@NSCopying var icon: INImage? { get }
```

<a id="Discussion"></a>

## Discussion

This properties stores an image with any branding information associated with the payment type. For example, this property could contain an image provided by a particular credit card vendor.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [name](name.md): The name of this payment type.
- [identificationHint](identificationhint.md): The hint for identifying the payment method.

# icon (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The image representing the payment method.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INImage * icon;
```

```objectivec
@property (atomic, copy, readonly, nullable) INImage * icon;
```

<a id="Discussion"></a>

## Discussion

This properties stores an image with any branding information associated with the payment type. For example, this property could contain an image provided by a particular credit card vendor.

## See Also

### Getting the Payment Information

- [type](type.md): The type of account used as the source of funds.
- [INPaymentMethodType](../inpaymentmethodtype.md): Constants describing the available payment options.
- [name](name.md): The name of this payment type.
- [identificationHint](identificationhint.md): The hint for identifying the payment method.
