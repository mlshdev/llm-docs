> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequest/supportednetworks](https://developer.apple.com/documentation/applepayontheweb/applepayrequest/supportednetworks)

# supportedNetworks

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The payment networks the merchant supports.

## Declaration

```
required sequence <DOMString> supportedNetworks;
```

## Mentioned In

- [Apple Pay on the Web Version 11 Release Notes](../apple-pay-on-the-web-version-11-release-notes.md)
- [Apple Pay on the Web Version 13 Release Notes](../apple-pay-on-the-web-version-13-release-notes.md)
- [Apple Pay on the Web Version 14 Release Notes](../apple-pay-on-the-web-version-14-release-notes.md)
- [Apple Pay on the Web Version 2 Release Notes](../apple-pay-on-the-web-version-2-release-notes.md)
- [Apple Pay on the Web Version 4 Release Notes](../apple-pay-on-the-web-version-4-release-notes.md)
- [Apple Pay on the Web Version 5 Release Notes](../apple-pay-on-the-web-version-5-release-notes.md)
- [Supporting payment networks](../supported-networks.md)

<a id="Discussion"></a>

## Discussion

Set this property to one or more of the payment network values. For a complete list of networks that Apple Pay supports and the specific Apple Pay version that introduced that network, see [Supporting payment networks](../supported-networks.md).

To use a network introduced with a specific Apple Pay version, set the [version](version.md) parameter to the required version number. For the best compatibility with operating systems and browsers, select the lowest possible version number that supports your payment networks and other required features.

In macOS 12.3, iOS 15.4, watchOS 8.5, and Mac Catalyst 15.4 or later, specify payment methods in the order you prefer. For example, to specify the default network to use for cobadged cards, set the first element in the array to the default network, and alternate networks afterward in the order you prefer.

> **Note**

>  If your website supports debit networks, check for regional regulations. For more information [Complying with regional regulations](https://developer.apple.com/documentation/passkit/complying-with-regional-regulations).

## See Also

### Transaction information

- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.
- [merchantCapabilities](merchantcapabilities.md): An array of the payment capabilities the merchant supports, such as credit or debit.
- [supportedCountries](supportedcountries.md): A list of two-letter country codes for limiting payment to cards from specific countries or regions.
