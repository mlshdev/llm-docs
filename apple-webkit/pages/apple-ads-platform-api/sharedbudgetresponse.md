> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sharedbudgetresponse](https://developer.apple.com/documentation/apple-ads-platform-api/sharedbudgetresponse)

# SharedBudgetResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a single budget order operation.

## Declaration

```
object SharedBudgetResponse
```

## Properties

- `result` — `SharedBudget`: The `SharedBudget` object returned by the operation, reflecting its post-operation state. Absent if an error occurred. See [SharedBudget](sharedbudget.md). Read-only.
- `error` — `Error`: Error details if the operation failed. Absent on success. Read-only.

<a id="Discussion"></a>

## Discussion

Create, update, and get-by-ID budget order operations return `SharedBudgetResponse` as the single-item response envelope.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": 777888999,
    "orgId": 100456789,
    "name": "AwayFinder - Q1 2025 Budget",
    "startTime": "2025-01-01T00:00:00.000",
    "endTime": "2025-03-31T23:59:59.000",
    "value": {
      "amount": "10000.00",
      "currency": "USD"
    },
    "adAccountIds": [
      123456789
    ],
    "systemStatus": "ACTIVE",
    "systemStatusReasons": [],
    "invoiceDetail": {
      "primaryBuyerName": "Jane Smith",
      "primaryBuyerEmail": "jane.smith@awayfinder.com",
      "billingEmail": "billing@awayfinder.com"
    },
    "deleted": false,
    "creationTime": "2025-01-01T00:00:00.000",
    "modificationTime": "2025-01-01T00:00:00.000"
  }
}
```

## See Also

- [SharedBudget](sharedbudget.md): A budget order.
- [SharedBudgetCreate](sharedbudgetcreate.md): The request body for creating a new budget order.
- [SharedBudgetUpdate](sharedbudgetupdate.md): Request body for updating an existing budget order.
- [SharedBudgetQueryResponse](sharedbudgetqueryresponse.md): The response object for a budget order query.
- [SharedBudgetAssignment](sharedbudgetassignment.md): Represents a single budget order assignment within a campaign’s `sharedBudgets` array.
- [SharedBudgetAssignmentCreate](sharedbudgetassignmentcreate.md): Request payload for assigning a campaign to a budget order at campaign creation time.
- [SharedBudgetAssignmentUpdate](sharedbudgetassignmentupdate.md): Request payload for changing or removing a campaign’s budget order assignment.
- [InvoiceDetail](invoicedetail.md): Invoice billing details for accounts on the Line of Credit (LOC) payment model.
- [InvoiceDetailUpdate](invoicedetailupdate.md): The request body for updating the invoice details of a budget order.
