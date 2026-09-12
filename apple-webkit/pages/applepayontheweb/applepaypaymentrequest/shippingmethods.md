> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/shippingmethods](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/shippingmethods)

# shippingMethods

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The list of shipping methods available for a payment request.

## Declaration

```
sequence <ApplePayShippingMethod> shippingMethods;
```

<a id="Discussion"></a>

## Discussion

See [ApplePayShippingMethod](../applepayshippingmethod.md).

The `amount` for each shipping method must be a non-negative number to pass validation.

## See Also

### Working with transaction information

- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.
- [currencyCode](currencycode.md): The three-letter ISO 4217 currency code for the payment.
- [merchantCapabilities](merchantcapabilities.md): An array of the payment capabilities that the merchant supports, such as credit or debit.
- [shippingType](shippingtype.md): An optional value that indicates how to ship purchased items.
- [supportedCountries](supportedcountries.md): A list of two-letter country codes for limiting payment to cards from specific countries or regions.
- [supportedNetworks](supportednetworks.md): The payment networks the merchant supports.
- [ApplePayMerchantCapability](../applepaymerchantcapability.md): The payment capabilities the merchant supports.
- [ApplePayShippingMethod](../applepayshippingmethod.md): A dictionary that describes the shipping method for delivering physical goods.
- [ApplePayShippingType](../applepayshippingtype.md): A type that indicates how to ship purchased items.
