> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/applicationdata](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/applicationdata)

# applicationData

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A Base64-encoded string for application-specific data.

## Declaration

```
DOMString applicationData;
```

<a id="Discussion"></a>

## Discussion

Use this property to contain additional data as may be appropriate for your website. For example, the application data may be a shopping cart identifier or an order number that your back end needs to identify this transaction.

You’re responsible for sending the full application data to your server, if needed.

> **Important**

>  If you use [RegisterMerchantRequest](../../applepaywebmerchantregistrationapi/registermerchantrequest.md) in the [Apple Pay Web Merchant Registration API](../../applepaywebmerchantregistrationapi.md) to register merchants, you must include the merchant domain in [applicationData](../applepayrequest/applicationdata.md). The payment service provider can use the domain in [applicationData](../applepayrequest/applicationdata.md) to ensure they know which merchant the payment token is for. The payment service provider uses the value in [applicationData](../applepayrequest/applicationdata.md) in a step necessary to validate the payment data. For more information, see [Payment token format reference](https://developer.apple.com/documentation/passkit/payment-token-format-reference).

The [applicationData](applicationdata.md) string must be Base64-encoded; otherwise, the system ignores it.
