> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/activitydetail](https://developer.apple.com/documentation/apple-ads-platform-api/activitydetail)

# ActivityDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A group of field-level changes that occurred within a single activity context in a change details record.

## Declaration

```
object ActivityDetail
```

## Properties

- `transactionId` — `string`: The identifier of the transaction this activity belongs to. Matches the `transactionId` on the parent [ChangeDetails](changedetails.md) record. Read-only.
- `changes` — `[ActivityDetail.Changes]`: An array of [ActivityDetail.Changes](activitydetail/changes-data.dictionary.md) field change objects, one per field that changed in this activity. Each object contains three keys: `field` (string, the API field name that changed), `oldValues` (array of string, values before the change, empty for `CREATE` events), and `newValues` (array of string, values after the change, empty for `DELETE` events). Read-only.

<a id="Discussion"></a>

## Discussion

<a id="Locate-ActivityDetail-in-the-response-hierarchy"></a>

### Locate ActivityDetail in the response hierarchy

Change history detail responses use a three-level nesting:

```
ChangeDetails
 └── details: ActivityDetail[]
 └── changes: [{ field, oldValues, newValues }]
```

Each [ChangeDetails](changedetails.md) record has one or more `ActivityDetail` entries in its `details` array. Each `ActivityDetail` groups the field-level changes that share a common activity context within the transaction. In most cases, a single `ActivityDetail` contains all field changes for the entity.

<a id="Iterate-over-field-changes"></a>

### Iterate over field changes

To access individual field changes, iterate the `changes` array on each `ActivityDetail`:

```json
"details": [
  {
    "transactionId": "txn_abc123def456",
    "changes": [
      { "field": "status", "oldValues": ["PAUSED"], "newValues": ["ENABLED"] },
      { "field": "dailyBudget", "oldValues": ["50.00"], "newValues": ["100.00"] }
    ]
  }
]
```

The API encodes all values in `oldValues` and `newValues` as strings, regardless of the underlying field type. Parse them according to the field’s expected type.

<a id="Example"></a>

### Example

```json
{
  "transactionId": "txn_abc123def456",
  "changes": [
    {
      "field": "status",
      "oldValues": ["PAUSED"],
      "newValues": ["ENABLED"]
    },
    {
      "field": "dailyBudget",
      "oldValues": ["50.00"],
      "newValues": ["100.00"]
    }
  ]
}
```

## Topics

### Dictionaries

- [ActivityDetail.Changes](activitydetail/changes-data.dictionary.md): A single field change entry, capturing the field name and its before and after values.

## See Also

- [AuditSummary](auditsummary.md): One row in the query change history response, grouping a single actor’s entity changes in one transaction by entity type and event type.
- [AuditSummaryResponse](auditsummaryresponse.md): The response envelope returned by the Query Change History endpoint, wrapping an array of audit summary rows with pagination metadata.
- [BaseAuditResponse](baseauditresponse.md): Common response envelope fields shared by all change history response objects.
- [ChangeDetails](changedetails.md): Field-level change record for a single API entity within a transaction.
- [ChangeDetailsResponse](changedetailsresponse.md): The response envelope returned by the Get Change History Detail endpoint, wrapping an array of change detail records with pagination metadata.
- [ErrorMessage](errormessage.md): Error information returned in a change history response when a request fails.
