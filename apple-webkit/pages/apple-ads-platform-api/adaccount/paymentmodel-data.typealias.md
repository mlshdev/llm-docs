> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adaccount/paymentmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adaccount/paymentmodel-data.typealias)

# AdAccount.PaymentModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The payment model for the ad account.

## Declaration

```
string AdAccount.PaymentModel
```

## Possible Values

- `PAYG`: Pay as you go. The default billing model when no payment model is configured, charged per campaign spend. Budget orders aren’t available with this model.
- `LOC`: Line of credit. A monthly invoicing model required to use budget orders. Invoicing details are available in [InvoiceDetail](../invoicedetail.md).

<a id="Discussion"></a>

## Discussion

Choosing `LOC` here is a prerequisite for using budget orders on this ad account.

See also [Budget Orders Endpoints](../budget-orders-endpoints.md).

<a id="Example"></a>

### Example

```json
{
  "paymentModel": "PAYG"
}
```
