> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/invoicedetailupdate](https://developer.apple.com/documentation/apple-ads-platform-api/invoicedetailupdate)

# InvoiceDetailUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating the invoice details of a budget order.

## Declaration

```
object InvoiceDetailUpdate
```

## Properties

- `orderNumber` — `string`: Purchase order number.
- `clientName` — `string`: Identifies the advertiser or product.
- `primaryBuyerName` — `string`: Name of the primary buyer.
- `primaryBuyerEmail` — `string`: Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string`: Billing email address. Must be a valid email address.

<a id="Discussion"></a>

## Discussion

All fields are optional, allowing partial updates to an existing invoice detail record. See [InvoiceDetailCreate](invoicedetailcreate.md) for required fields on create.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder Q3 Invoice",
  "orderNumber": "PO-555666777",
  "clientName": "AwayFinder",
  "primaryBuyerName": "Jordan Lee",
  "primaryBuyerEmail": "jordan.lee@awayfinder.com",
  "billingEmail": "billing@awayfinder.com"
}
```

## See Also

- [SharedBudget](sharedbudget.md): A budget order.
- [SharedBudgetCreate](sharedbudgetcreate.md): The request body for creating a new budget order.
- [SharedBudgetUpdate](sharedbudgetupdate.md): Request body for updating an existing budget order.
- [SharedBudgetResponse](sharedbudgetresponse.md): The response object for a single budget order operation.
- [SharedBudgetQueryResponse](sharedbudgetqueryresponse.md): The response object for a budget order query.
- [SharedBudgetAssignment](sharedbudgetassignment.md): Represents a single budget order assignment within a campaign’s `sharedBudgets` array.
- [SharedBudgetAssignmentCreate](sharedbudgetassignmentcreate.md): Request payload for assigning a campaign to a budget order at campaign creation time.
- [SharedBudgetAssignmentUpdate](sharedbudgetassignmentupdate.md): Request payload for changing or removing a campaign’s budget order assignment.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
