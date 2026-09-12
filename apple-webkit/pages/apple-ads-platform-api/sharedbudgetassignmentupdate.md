> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetassignmentupdate](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetassignmentupdate)

# SharedBudgetAssignmentUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request payload for changing or removing a campaign’s budget order assignment.

## Declaration

```
object SharedBudgetAssignmentUpdate
```

## Properties

- `budgetId` — `int64`: The identifier of the budget order to assign this campaign to. Omit to leave the current assignment unchanged.

<a id="Discussion"></a>

## Discussion

The API embeds `SharedBudgetAssignmentUpdate` in [CampaignUpdate](campaignupdate.md) to modify a campaign’s budget order assignment.

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
- [SharedBudgetAssignmentCreate](sharedbudgetassignmentcreate.md): Request payload for assigning a campaign to a budget order at campaign creation time.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
- [InvoiceDetailUpdate](invoicedetailupdate.md): The request body for updating the invoice details of a budget order.
