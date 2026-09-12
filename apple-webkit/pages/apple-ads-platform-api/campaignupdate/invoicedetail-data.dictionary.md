> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignupdate/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaignupdate/invoicedetail-data.dictionary)

# CampaignUpdate.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating the invoice details of a budget order.

## Declaration

```
object CampaignUpdate.InvoiceDetail
```

## Properties

- `orderNumber` — `string`: Purchase order number.
- `clientName` — `string`: Identifies the advertiser or product.
- `primaryBuyerName` — `string`: Name of the primary buyer.
- `primaryBuyerEmail` — `string`: Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string`: Billing email address. Must be a valid email address.

<a id="Discussion"></a>

## Discussion

To change the billing contact details on an existing Line of Credit invoice record, use this object. Omit a field to leave its current value unchanged.

See [InvoiceDetailUpdate](../invoicedetailupdate.md) for the full field reference.
