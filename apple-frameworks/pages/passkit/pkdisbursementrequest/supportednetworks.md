> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/supportednetworks](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/supportednetworks)

# supportedNetworks (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array of payment networks the merchant supports.

## Declaration

```swift
var supportedNetworks: [PKPaymentNetwork] { get set }
```

<a id="Discussion"></a>

## Discussion

This property constrains the selectable payment passes to those the array includes — for example, [visa](../pkpaymentnetwork/visa.md) or [masterCard](../pkpaymentnetwork/mastercard.md).

## See Also

### Setting the merchant information

- [merchantIdentifier](merchantidentifier.md): A string that identifies the merchant.
- [merchantCapabilities](merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.

# supportedNetworks (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array of payment networks the merchant supports.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedNetworks;
```

<a id="Discussion"></a>

## Discussion

This property constrains the selectable payment passes to those the array includes — for example, [PKPaymentNetworkVisa](../pkpaymentnetwork/visa.md) or [PKPaymentNetworkMasterCard](../pkpaymentnetwork/mastercard.md).

## See Also

### Setting the merchant information

- [merchantIdentifier](merchantidentifier.md): A string that identifies the merchant.
- [merchantCapabilities](merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.
