> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkmerchantcategorycode](https://developer.apple.com/documentation/passkit/pkmerchantcategorycode)

# PKMerchantCategoryCode

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

The optional four-digit type, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.

## Declaration

```objectivec
typedef SInt16 PKMerchantCategoryCode;
```

## See Also

### Setting merchant information

- [merchantCategoryCode](pkpaymentrequest/merchantcategorycode-7vg6z.md): An optional four-digit property, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [PKMerchantCategoryCodeNone](pkmerchantcategorycodenone.md)
- [merchantIdentifier](pkpaymentrequest/merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](pkpaymentrequest/merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](pkmerchantcapability.md): Capabilities for processing payment.
