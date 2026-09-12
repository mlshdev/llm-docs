> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayvalidatemerchantevent/validationurl](https://developer.apple.com/documentation/applepayontheweb/applepayvalidatemerchantevent/validationurl)

# validationURL

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The URL your server must use to validate itself and obtain a merchant session object.

## Declaration

```
readonly attribute DOMString validationURL;
```

## Mentioned In

- [Providing Merchant Validation](../providing-merchant-validation.md)

<a id="Discussion"></a>

## Discussion

This attribute is contained by the [onvalidatemerchant](../applepaysession/onvalidatemerchant.md) event. Access this attribute using the event parameter, for example, `var URL = event.validationURL;`.

Pass the URL in the [validationURL](validationurl.md) attribute to your server, as described in [Providing Merchant Validation](../providing-merchant-validation.md).
