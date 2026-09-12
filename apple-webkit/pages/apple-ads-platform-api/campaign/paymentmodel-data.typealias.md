> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaign/paymentmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/campaign/paymentmodel-data.typealias)

# Campaign.PaymentModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The payment model that determines payment method and budget availability for the ad account running this campaign.

## Declaration

```
string Campaign.PaymentModel
```

## Possible Values

- `PAYG`: Pay as You Go. The default billing model when no payment model is configured. Budget orders are not available with this model.
- `LOC`: Line of Credit. A monthly invoicing model required to use budget orders. Invoicing details are available in [InvoiceDetail](../invoicedetail.md).

<a id="Discussion"></a>

## Discussion

Because this reflects the ad account’s payment model rather than a campaign-level setting, every campaign under the same ad account reports the same value.

<a id="Example"></a>

### Example

```json
{
  "paymentModel": "PAYG"
}
```
