> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/errormessage](https://developer.apple.com/documentation/apple-ads-platform-api/errormessage)

# ErrorMessage

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Error information returned in a change history response when a request fails.

## Declaration

```
object ErrorMessage
```

## Properties

- `code` — `string`: A machine-readable error code identifying the failure type. Possible values: `BAD_REQUEST`, `NOT_FOUND`, `NOT_AUTHED`. Read-only.
  **Allowed values:** `BAD_REQUEST`, `NOT_FOUND`, `NOT_AUTHED`
- `message` — `string`: A human-readable description of the error. Read-only.
- `details` — `[ErrorMessage.Details]`: An array of additional error detail objects providing field-level context. Each object in the array contains `code` and `message` fields identifying the specific validation failure, and may include an `info` object (string-to-string map) with additional structured context. Read-only.

<a id="Discussion"></a>

## Discussion

When a change history request fails, the API populates the `error` field of [BaseAuditResponse](baseauditresponse.md) with an `ErrorMessage`. On success, `error` is null.

The `ErrorMessage` object is specific to Change History endpoints and isn’t the same object as the general [Error](error.md) envelope used elsewhere in the API. Its `code` is a closed 3-value enum rather than an open string, so `Error`‘s codes (such as `INVALID_ARGUMENT`) don’t apply here.

Check the HTTP status code first to determine the error category. Use `code` for programmatic error handling. Use `message` and `details` for diagnostic logging or user-facing error displays.

Common error scenarios:

- Missing required `eventTime` filter returns `400 Bad Request`
- Expired or missing credentials return `401 Unauthorized`
- Requesting a `detailId` that doesn’t exist returns `404 Not Found`

A `429 Too Many Requests` or `500 Internal Server Error` response also populates `error`. For `429`, see [Applying Rate Limits](rate-limits.md) for the headers and backoff strategy to use before retrying. For `500`, retry with backoff since the failure may be transient.

<a id="Example"></a>

### Example

```json
{
  "code": "BAD_REQUEST",
  "message": "The eventTime filter is required.",
  "details": [
    {
      "code": "MISSING_FIELD",
      "message": "eventTime must be provided.",
      "info": {
        "field": "eventTime"
      }
    }
  ]
}
```

## Topics

### Dictionaries

- [ErrorMessage.Details](errormessage/details-data.dictionary.md): A single error detail entry describing one part of a failed change history request.

## See Also

- [ActivityDetail](activitydetail.md): A group of field-level changes that occurred within a single activity context in a change details record.
- [AuditSummary](auditsummary.md): One row in the query change history response, grouping a single actor’s entity changes in one transaction by entity type and event type.
- [AuditSummaryResponse](auditsummaryresponse.md): The response envelope returned by the Query Change History endpoint, wrapping an array of audit summary rows with pagination metadata.
- [BaseAuditResponse](baseauditresponse.md): Common response envelope fields shared by all change history response objects.
- [ChangeDetails](changedetails.md): Field-level change record for a single API entity within a transaction.
- [ChangeDetailsResponse](changedetailsresponse.md): The response envelope returned by the Get Change History Detail endpoint, wrapping an array of change detail records with pagination metadata.
