> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/baseauditresponse](https://developer.apple.com/documentation/apple-ads-platform-api/baseauditresponse)

# BaseAuditResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Common response envelope fields shared by all change history response objects.

## Declaration

```
object BaseAuditResponse
```

## Properties

- `pagination` — `Pagination`: Pagination state for the response. See [Pagination](pagination.md). Read-only.
- `error` — `ErrorMessage`: Error information populated when the request fails. See [ErrorMessage](errormessage.md). Null on success. Read-only.

<a id="Discussion"></a>

## Discussion

The `BaseAuditResponse` defines the common envelope structure for all change history API responses. Both [AuditSummaryResponse](auditsummaryresponse.md) and [ChangeDetailsResponse](changedetailsresponse.md) extend this base with a `result` array containing the endpoint-specific payload.

Check `error` before processing `result`. When `error` is non-null, `result` may be empty or absent.

<a id="Example"></a>

### Example

```json
{
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
  }
}
```

## See Also

- [ActivityDetail](activitydetail.md): A group of field-level changes that occurred within a single activity context in a change details record.
- [AuditSummary](auditsummary.md): One row in the query change history response, grouping a single actor’s entity changes in one transaction by entity type and event type.
- [AuditSummaryResponse](auditsummaryresponse.md): The response envelope returned by the Query Change History endpoint, wrapping an array of audit summary rows with pagination metadata.
- [ChangeDetails](changedetails.md): Field-level change record for a single API entity within a transaction.
- [ChangeDetailsResponse](changedetailsresponse.md): The response envelope returned by the Get Change History Detail endpoint, wrapping an array of change detail records with pagination metadata.
- [ErrorMessage](errormessage.md): Error information returned in a change history response when a request fails.
