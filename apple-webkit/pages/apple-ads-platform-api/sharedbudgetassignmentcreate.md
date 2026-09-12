> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetassignmentcreate](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetassignmentcreate)

# SharedBudgetAssignmentCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request payload for assigning a campaign to a budget order at campaign creation time.

## Declaration

```
object SharedBudgetAssignmentCreate
```

## Properties

- `budgetId` — `int64`: The identifier of the budget order to assign this campaign to.

<a id="Discussion"></a>

## Discussion

The `SharedBudgetAssignmentCreate` object is embedded in [CampaignCreate](campaigncreate.md) to link a campaign to one or more existing budget orders at creation time. The `sharedBudgets` field on `CampaignCreate` is an array. You can create a campaign with multiple budget order assignments, subject to the non-overlap rule: each budget order must have an `endTime` strictly before the next budget order’s `startTime`. You can’t combine an open-ended budget order with another.

Every campaign requires a `dailyBudget` regardless of whether it has shared budget assignments. Both controls function independently: the `dailyBudget` field caps daily spending. Each shared budget caps spending over its flight period.

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
- [SharedBudgetAssignment](sharedbudgetassignment.md): Represents a single budget order assignment within a campaign’s `sharedBudgets` array.
- [SharedBudgetAssignmentUpdate](sharedbudgetassignmentupdate.md): Request payload for changing or removing a campaign’s budget order assignment.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
- [InvoiceDetailUpdate](invoicedetailupdate.md): The request body for updating the invoice details of a budget order.
