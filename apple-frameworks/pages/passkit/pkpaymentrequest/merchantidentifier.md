> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/merchantidentifier](https://developer.apple.com/documentation/passkit/pkpaymentrequest/merchantidentifier)

# merchantIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Your merchant identifier.

## Declaration

```swift
var merchantIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

This value must match one of the merchant identifiers specified by the [Merchant IDs Entitlement](../../bundleresources/entitlements/com.apple.developer.in-app-payments.md) key in the app’s entitlements. For more information on adding merchant IDs, see [Configure Apple Pay (iOS, watchOS)](https://help.apple.com/xcode/mac/current/#/deva43983eb7?sub=dev171483d6e).

## See Also

### Setting merchant information

- [PKPaymentRequest.MerchantCategoryCode](merchantcategorycode-swift.struct.md): An optional four-digit struct, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantCapabilities](merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](../pkmerchantcapability.md): Capabilities for processing payment.

# merchantIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Your merchant identifier.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * merchantIdentifier;
```

<a id="Discussion"></a>

## Discussion

This value must match one of the merchant identifiers specified by the [Merchant IDs Entitlement](../../bundleresources/entitlements/com.apple.developer.in-app-payments.md) key in the app’s entitlements. For more information on adding merchant IDs, see [Configure Apple Pay (iOS, watchOS)](https://help.apple.com/xcode/mac/current/#/deva43983eb7?sub=dev171483d6e).

## See Also

### Setting merchant information

- [PKMerchantCategoryCode](../pkmerchantcategorycode.md): The optional four-digit type, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantCategoryCode](merchantcategorycode-7vg6z.md): An optional four-digit property, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [PKMerchantCategoryCodeNone](../pkmerchantcategorycodenone.md)
- [merchantCapabilities](merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](../pkmerchantcapability.md): Capabilities for processing payment.
