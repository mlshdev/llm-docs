> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequestbase/countrycode](https://developer.apple.com/documentation/applepayontheweb/applepayrequestbase/countrycode)

# countryCode

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The merchant’s two-letter ISO-3166 country code.

## Declaration

```
required DOMString countryCode;
```

<a id="Discussion"></a>

## Discussion

Set this property to the two-letter ISO-3166 code for the country or region of the merchant’s principle place of business. This is often the location for settling the payment. Consult with your payment service provider (PSP) to determine the appropriate country code.

Apple Pay may use the `countryCode` to generate payment data that complies with local regulations. For more information on regional compliance, see [Complying with regional regulations](https://developer.apple.com/documentation/passkit/complying-with-regional-regulations).

## See Also

### Setting the transaction information

- [merchantCapabilities](merchantcapabilities.md): An array of the payment capabilities that the merchant supports, such as credit or debit card payments.
- [supportedNetworks](supportednetworks.md): The payment networks the merchant provides to their customers.
- [supportedCountries](supportedcountries.md): A list of two-letter country codes for limiting payment to credit cards from specific countries or regions.
