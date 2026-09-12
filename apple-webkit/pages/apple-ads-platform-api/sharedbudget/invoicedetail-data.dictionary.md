> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudget/invoicedetail-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudget/invoicedetail-data.dictionary)

# SharedBudget.InvoiceDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice billing details for accounts on the Line of Credit (LOC) payment model.

## Declaration

```
object SharedBudget.InvoiceDetail
```

## Properties

- `clientName` — `string`: Identifies the advertiser or product. Nullable. Mutable.
- `primaryBuyerName` — `string`: Name of the primary buyer. Mutable.
- `primaryBuyerEmail` — `string`: Email address of the primary buyer. Must be a valid email address. Mutable.
- `orderNumber` — `string`: Purchase order number. Typically a PO number. Nullable. Mutable.
- `billingEmail` — `string`: Billing email address. Must be a valid email address. Mutable.

<a id="Discussion"></a>

## Discussion

Captures the billing contact information required for a Line of Credit (`LOC`) payment model budget order, including buyer name, buyer email, and billing email. This field is nullable, and the system only populates it for accounts on the `LOC` payment model. The `primaryBuyerEmail` and `billingEmail` fields must be valid email addresses.

See [InvoiceDetailCreate](../invoicedetailcreate.md) for which fields are required when creating a new record, and [InvoiceDetailUpdate](../invoicedetailupdate.md) for update behavior.
