> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetupdate](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetupdate)

# SharedBudgetUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request body for updating an existing budget order.

## Declaration

```
object SharedBudgetUpdate
```

## Properties

- `name` — `string`: New display name for the budget order.
  **Minimum length:** `1`
- `startTime` — `date-time`: Updated budget start date and time. Format: `yyyy-MM-dd'T'HH:mm:ss.SSS` in UTC (for example, `2026-07-01T00:00:00.000`). Must be tomorrow or later (midnight UTC). Today is rejected.
- `endTime` — `date-time`: Updated budget end date and time. Format: `yyyy-MM-dd'T'HH:mm:ss.SSS` in UTC. Set to `null` to remove an expiration date, making the budget open-ended.
- `value` — `Money`: Updated budget amount. Specify `amount` and `currency`. See [Money](money.md).
- `adAccountIds` — `[int64]`: The ad account ID this budget order applies to. Exactly one ID is allowed, the same single-ID constraint as at creation. The API rejects requests that send more than one ID. Mutable.
- `invoiceDetail` — `SharedBudgetUpdate.InvoiceDetail`: Updated billing contact details. See [InvoiceDetail](invoicedetail.md).

<a id="Discussion"></a>

## Discussion

The `SharedBudgetUpdate` object is the partial-update request payload for modifying an existing budget order. Include only the fields you want to change. Fields you leave out of the request body stay unchanged. To extend a budget that is approaching exhaustion, increase the `value.amount`.

<a id="Example"></a>

### Example

The example below shows every updatable field for reference. In a real request, include only the fields you want to change.

```json
{
  "name": "AwayFinder Q3+Q4 2025 Budget",
  "startTime": "2025-07-01T00:00:00.000",
  "endTime": "2025-12-31T23:59:59.000",
  "value": {
    "amount": "25000.00",
    "currency": "USD"
  },
  "adAccountIds": [
    123456789
  ],
  "invoiceDetail": {
    "orderNumber": "PO-2025-Q3Q4"
  }
}
```

## Topics

### Dictionaries

- [SharedBudgetUpdate.InvoiceDetail](sharedbudgetupdate/invoicedetail-data.dictionary.md): Invoice billing contact details supplied when updating a budget order.

## See Also

- [SharedBudget](sharedbudget.md): A budget order.
- [SharedBudgetCreate](sharedbudgetcreate.md): The request body for creating a new budget order.
- [SharedBudgetResponse](sharedbudgetresponse.md): The response object for a single budget order operation.
- [SharedBudgetQueryResponse](sharedbudgetqueryresponse.md): The response object for a budget order query.
- [SharedBudgetAssignment](sharedbudgetassignment.md): Represents a single budget order assignment within a campaign’s `sharedBudgets` array.
- [SharedBudgetAssignmentCreate](sharedbudgetassignmentcreate.md): Request payload for assigning a campaign to a budget order at campaign creation time.
- [SharedBudgetAssignmentUpdate](sharedbudgetassignmentupdate.md): Request payload for changing or removing a campaign’s budget order assignment.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
- [InvoiceDetailUpdate](invoicedetailupdate.md): The request body for updating the invoice details of a budget order.
