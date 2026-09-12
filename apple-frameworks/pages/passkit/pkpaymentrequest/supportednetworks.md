> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/supportednetworks](https://developer.apple.com/documentation/passkit/pkpaymentrequest/supportednetworks)

# supportedNetworks (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The payment methods that you support.

## Declaration

```swift
var supportedNetworks: [PKPaymentNetwork] { get set }
```

<a id="Discussion"></a>

## Discussion

This property constrains the payment methods that the user can select to fund the payment. For possible values, see [PKPaymentNetwork](../pkpaymentnetwork.md).

In macOS 12.3, iOS 15.4, watchOS 8.5, and Mac Catalyst 15.4 or later, specify payment methods in the order you prefer. For example, to specify the default network to use for cobadged cards, set the first element in the array to the default network, and alternate networks afterward in the order you prefer.

> **Note**

>  Apps supporting debit networks should check for regional regulations. For more information, see [Complying with regional regulations](../complying-with-regional-regulations.md).

## See Also

### Selecting the payment networks

- [availableNetworks()](availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [PKPaymentNetwork](../pkpaymentnetwork.md): A type that represents a payment method.

# supportedNetworks (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The payment methods that you support.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedNetworks;
```

<a id="Discussion"></a>

## Discussion

This property constrains the payment methods that the user can select to fund the payment. For possible values, see [PKPaymentNetwork](../pkpaymentnetwork.md).

In macOS 12.3, iOS 15.4, watchOS 8.5, and Mac Catalyst 15.4 or later, specify payment methods in the order you prefer. For example, to specify the default network to use for cobadged cards, set the first element in the array to the default network, and alternate networks afterward in the order you prefer.

> **Note**

>  Apps supporting debit networks should check for regional regulations. For more information, see [Complying with regional regulations](../complying-with-regional-regulations.md).

## See Also

### Selecting the payment networks

- [availableNetworks](availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [PKPaymentNetwork](../pkpaymentnetwork.md): A type that represents a payment method.
