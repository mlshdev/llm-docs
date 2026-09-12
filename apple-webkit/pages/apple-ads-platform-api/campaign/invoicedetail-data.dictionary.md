> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaign/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaign/invoicedetail-data.dictionary)

# Campaign.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice details for the LOC payment model.

## Declaration

```
object Campaign.InvoiceDetail
```

## Properties

- `clientName` — `string`: Identifies the advertiser or product. Nullable. Mutable.
- `primaryBuyerName` — `string`: Name of the primary buyer. Mutable.
- `primaryBuyerEmail` — `string`: Email address of the primary buyer. Must be a valid email address. Mutable.
- `orderNumber` — `string`: Purchase order number. Typically a PO number. Nullable. Mutable.
- `billingEmail` — `string`: Billing email address. Must be a valid email address. Mutable.

<a id="Discussion"></a>

## Discussion

Captures the billing contact and reference information required for Line of Credit (`LOC`) payment model accounts. The `primaryBuyerEmail` and `billingEmail` fields must each be a valid email address.

See [InvoiceDetailCreate](../invoicedetailcreate.md) for which fields are required when creating a new record, and [InvoiceDetailUpdate](../invoicedetailupdate.md) for update behavior.
