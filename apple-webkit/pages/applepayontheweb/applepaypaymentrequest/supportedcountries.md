> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/supportedcountries](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/supportedcountries)

# supportedCountries

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of two-letter country codes for limiting payment to cards from specific countries or regions.

## Declaration

```
sequence <DOMString> supportedCountries;
```

## Mentioned In

- [Apple Pay on the Web Version 3 Release Notes](../apple-pay-on-the-web-version-3-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the list of supported countries or regions to limit payment cards to those issued in specific countries or regions. Indicate the supported countries or regions by using ISO 3166 country codes.

The [supportedCountries](supportedcountries.md) list doesn’t affect the currency for the transaction, and it applies to all payment cards in Wallet.

## See Also

### Working with transaction information

- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.
- [currencyCode](currencycode.md): The three-letter ISO 4217 currency code for the payment.
- [merchantCapabilities](merchantcapabilities.md): An array of the payment capabilities that the merchant supports, such as credit or debit.
- [shippingMethods](shippingmethods.md): The list of shipping methods available for a payment request.
- [shippingType](shippingtype.md): An optional value that indicates how to ship purchased items.
- [supportedNetworks](supportednetworks.md): The payment networks the merchant supports.
- [ApplePayMerchantCapability](../applepaymerchantcapability.md): The payment capabilities the merchant supports.
- [ApplePayShippingMethod](../applepayshippingmethod.md): A dictionary that describes the shipping method for delivering physical goods.
- [ApplePayShippingType](../applepayshippingtype.md): A type that indicates how to ship purchased items.
