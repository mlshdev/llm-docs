> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequest/merchantcapabilities](https://developer.apple.com/documentation/applepayontheweb/applepayrequest/merchantcapabilities)

# merchantCapabilities

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An array of the payment capabilities the merchant supports, such as credit or debit.

## Declaration

```
required sequence <ApplePayMerchantCapability> merchantCapabilities;
```

<a id="Discussion"></a>

## Discussion

The supported values for `merchantCapabilities` are:

- `supports3DS` \- Required. This value must be supplied.
- `supportsCredit` \- Optional. If present, only transactions that are categorized as credit cards are allowed.
- `supportsDebit` \- Optional. If present, only transactions that are categorized as debit cards are allowed.
- `supportsEMV` \- Include this value only if you support China Union Pay transactions.

If both or neither `supportsCredit` and `supportsDebit` values are supplied, the transaction allows both credit and debit cards.

## See Also

### Transaction information

- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.
- [supportedNetworks](supportednetworks.md): The payment networks the merchant supports.
- [supportedCountries](supportedcountries.md): A list of two-letter country codes for limiting payment to cards from specific countries or regions.
