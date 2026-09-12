> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/org/paymentmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/org/paymentmodel-data.typealias)

# Org.PaymentModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The payment model set through Apple Ads.

## Declaration

```
string Org.PaymentModel
```

## Possible Values

- `PAYG`: Pay as you go. The default billing model when no payment model is configured, charged per campaign spend. Budget orders aren’t available with this model.
- `LOC`: Line of credit. A monthly invoicing model required to use budget orders. Invoicing details are available in [InvoiceDetail](../invoicedetail.md).

<a id="Discussion"></a>

## Discussion

Setting this to `LOC` at the organization level is what makes budget orders available to the ad accounts beneath it.

<a id="Example"></a>

### Example

```json
{
  "paymentModel": "PAYG"
}
```
