> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetupdate/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetupdate/invoicedetail-data.dictionary)

# SharedBudgetUpdate.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice billing contact details supplied when updating a budget order.

## Declaration

```
object SharedBudgetUpdate.InvoiceDetail
```

## Properties

- `orderNumber` — `string`: Purchase order number.
- `clientName` — `string`: Identifies the advertiser or product.
- `primaryBuyerName` — `string`: Name of the primary buyer.
- `primaryBuyerEmail` — `string`: Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string`: Billing email address. Must be a valid email address.

<a id="Discussion"></a>

## Discussion

All fields are optional, allowing partial updates to an existing invoice detail record. Only include the fields you want to change.

See [InvoiceDetailUpdate](../invoicedetailupdate.md) for the full field reference.
