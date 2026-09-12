> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/merchantcategorycode-7vg6z](https://developer.apple.com/documentation/passkit/pkpaymentrequest/merchantcategorycode-7vg6z)

# merchantCategoryCode

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

An optional four-digit property, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.

## Declaration

```objectivec
@property (nonatomic, assign) PKMerchantCategoryCode merchantCategoryCode;
```

## See Also

### Setting merchant information

- [PKMerchantCategoryCode](../pkmerchantcategorycode.md): The optional four-digit type, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [PKMerchantCategoryCodeNone](../pkmerchantcategorycodenone.md)
- [merchantIdentifier](merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](../pkmerchantcapability.md): Capabilities for processing payment.
