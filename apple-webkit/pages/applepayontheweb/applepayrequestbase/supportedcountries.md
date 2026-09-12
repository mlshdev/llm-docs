> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequestbase/supportedcountries](https://developer.apple.com/documentation/applepayontheweb/applepayrequestbase/supportedcountries)

# supportedCountries

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of two-letter country codes for limiting payment to credit cards from specific countries or regions.

## Declaration

```
sequence <DOMString> supportedCountries;
```

<a id="Discussion"></a>

## Discussion

Use the list of supported countries or regions to limit payment cards to those issued in specific countries or regions. Indicate the supported countries or regions by using ISO-3166 country codes.

The [supportedCountries](../applepaypaymentrequest/supportedcountries.md) list doesn’t affect the currency for the transaction, and it applies to all payment cards in Wallet.

## See Also

### Setting the transaction information

- [countryCode](countrycode.md): The merchant’s two-letter ISO-3166 country code.
- [merchantCapabilities](merchantcapabilities.md): An array of the payment capabilities that the merchant supports, such as credit or debit card payments.
- [supportedNetworks](supportednetworks.md): The payment networks the merchant provides to their customers.
