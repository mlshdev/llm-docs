> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigncreate/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigncreate/invoicedetail-data.dictionary)

# CampaignCreate.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice billing contact details supplied when creating a campaign or budget order.

## Declaration

```
object CampaignCreate.InvoiceDetail
```

## Properties

- `primaryBuyerName` — `string` (required): Name of the primary buyer.
- `primaryBuyerEmail` — `string` (required): Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string` (required): Billing email address. Must be a valid email address.
- `clientName` — `string`: Identifies the advertiser or product.
- `orderNumber` — `string`: Purchase order number.

<a id="Discussion"></a>

## Discussion

Supply these contact and reference details when creating a campaign or budget order on a Line of Credit account. Line of Credit accounts require this object. Pay As You Go accounts can omit it.

The `clientName` and `orderNumber` fields are required for agency-type accounts.

See [InvoiceDetailCreate](../invoicedetailcreate.md) for the full field reference.
