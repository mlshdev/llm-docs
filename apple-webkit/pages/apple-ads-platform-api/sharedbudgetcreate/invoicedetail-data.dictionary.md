> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetcreate/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetcreate/invoicedetail-data.dictionary)

# SharedBudgetCreate.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice billing contact details supplied when creating a budget order.

## Declaration

```
object SharedBudgetCreate.InvoiceDetail
```

## Properties

- `primaryBuyerName` — `string` (required): Name of the primary buyer.
- `primaryBuyerEmail` — `string` (required): Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string` (required): Billing email address. Must be a valid email address.
- `clientName` — `string`: Identifies the advertiser or product.
- `orderNumber` — `string`: Purchase order number.

<a id="Discussion"></a>

## Discussion

Required for accounts on the Line of Credit (`LOC`) payment model. For all accounts, `name`, `primaryBuyerName`, `primaryBuyerEmail`, and `billingEmail` are required.

See [InvoiceDetailCreate](../invoicedetailcreate.md) for the full field reference.
