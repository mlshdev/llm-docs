> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/changedetailsresponse](https://developer.apple.com/documentation/apple-ads-platform-api/changedetailsresponse)

# ChangeDetailsResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response envelope returned by the Get Change History Detail endpoint, wrapping an array of change detail records with pagination metadata.

## Declaration

```
object ChangeDetailsResponse
```

## Properties

- `result` — `[ChangeDetails]`: An array of [ChangeDetails](changedetails.md) records. Each record contains the full field-level change history for one API entity within the transaction. Read-only.
- `pagination` — `Pagination`: Pagination state for the response. See [Pagination](pagination.md). Contains `offset`, `pageSize`, and `totalCount`. Read-only.
- `error` — `ErrorMessage`: Present when the request failed. See [ErrorMessage](errormessage.md). Contains error details. Read-only.

<a id="Discussion"></a>

## Discussion

The `ChangeDetailsResponse` object is the response envelope returned by the change history detail endpoints. Use `pagination` to navigate large transaction responses.

<a id="Example"></a>

### Example

```json
{
  "dataType": "ChangeDetail",
  "result": [
    {
      "transactionId": "txn_abc123def456",
      "detailId": "Campaign.444555666.txn_abc123def456",
      "eventType": "UPDATE",
      "entityType": "Campaign",
      "entityId": "444555666",
      "eventTime": "2025-03-15T14:30:00.000Z",
      "userType": "CUSTOMER_API",
      "modifiedBy": "555666777",
      "entityMetaData": {
        "name": "AwayFinder - Summer App Promo"
      },
      "details": [
        {
          "transactionId": "txn_abc123def456",
          "changes": [
            {
              "field": "status",
              "oldValues": [
                "PAUSED"
              ],
              "newValues": [
                "ENABLED"
              ]
            },
            {
              "field": "dailyBudget",
              "oldValues": [
                "50.00"
              ],
              "newValues": [
                "100.00"
              ]
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 50,
    "totalCount": 1
  }
}
```

## See Also

- [ActivityDetail](activitydetail.md): A group of field-level changes that occurred within a single activity context in a change details record.
- [AuditSummary](auditsummary.md): One row in the query change history response, grouping a single actor’s entity changes in one transaction by entity type and event type.
- [AuditSummaryResponse](auditsummaryresponse.md): The response envelope returned by the Query Change History endpoint, wrapping an array of audit summary rows with pagination metadata.
- [BaseAuditResponse](baseauditresponse.md): Common response envelope fields shared by all change history response objects.
- [ChangeDetails](changedetails.md): Field-level change record for a single API entity within a transaction.
- [ErrorMessage](errormessage.md): Error information returned in a change history response when a request fails.
