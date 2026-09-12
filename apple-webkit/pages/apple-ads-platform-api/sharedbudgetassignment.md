> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetassignment](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetassignment)

# SharedBudgetAssignment

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Represents a single budget order assignment within a campaign’s `sharedBudgets` array.

## Declaration

```
object SharedBudgetAssignment
```

## Properties

- `budgetId` — `int64`: The identifier of the budget order this campaign is assigned to. Read-only.

<a id="Discussion"></a>

## Discussion

The `SharedBudgetAssignment` object is an embedded object returned as part of a [Campaign](campaign.md). On Campaign, the field is `sharedBudgets`, an array of assignment objects each containing a `budgetId`.

A campaign can carry multiple budget order assignments as long as their schedules don’t overlap.

**Multiple budget orders per campaign:** A campaign can be assigned to multiple budget orders, subject to the non-overlap rule. Sort budget orders by `startTime`. Each budget order must have an `endTime` that is strictly before the next budget order’s `startTime`. An open-ended budget order (no `endTime`) can’t be combined with another budget order on the same campaign. The API rejects overlapping schedules with a `BUDGET_ORDER_OVERLAPPING` error.

**No standalone operations:** The `SharedBudgetAssignment` isn’t independently addressable. There are no standalone create, read, update, delete, or query operations for it. The API only returns assignment objects as part of a Campaign response.

<a id="Example"></a>

### Example

```json
{
  "budgetId": 555666777
}
```

## See Also

- [SharedBudget](sharedbudget.md): A budget order.
- [SharedBudgetCreate](sharedbudgetcreate.md): The request body for creating a new budget order.
- [SharedBudgetUpdate](sharedbudgetupdate.md): Request body for updating an existing budget order.
- [SharedBudgetResponse](sharedbudgetresponse.md): The response object for a single budget order operation.
- [SharedBudgetQueryResponse](sharedbudgetqueryresponse.md): The response object for a budget order query.
- [SharedBudgetAssignmentCreate](sharedbudgetassignmentcreate.md): Request payload for assigning a campaign to a budget order at campaign creation time.
- [SharedBudgetAssignmentUpdate](sharedbudgetassignmentupdate.md): Request payload for changing or removing a campaign’s budget order assignment.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
- [InvoiceDetailUpdate](invoicedetailupdate.md): The request body for updating the invoice details of a budget order.
