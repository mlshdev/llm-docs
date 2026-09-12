> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/errordetail](https://developer.apple.com/documentation/apple-ads-platform-api/errordetail)

# ErrorDetail

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Field-level or request-level detail for a specific part of a failed API request.

## Declaration

```
object ErrorDetail
```

## Properties

- `code` — `string` (required): A machine-readable code identifying the specific violation, such as `FIELD_REQUIRED` for a missing required field or `INVALID_VALUE` for a field that failed validation.
- `message` — `string`: A human-readable description of this specific violation, such as which field was missing or invalid and why.

<a id="Discussion"></a>

## Discussion

The `ErrorDetail` provides field-level or request-level granularity for a specific part of a failed request. Each entry in the `Error.details` array is one `ErrorDetail`.

<a id="Example"></a>

### Example

```json
{
  "code": "FIELD_REQUIRED",
  "message": "campaign.name is required and was not provided for AwayFinder campaign creation."
}
```

## See Also

### Error Responses

- [Error](error.md): The standard error envelope that the API returns when a request fails.
- [ErrorResponse](errorresponse.md): Certain endpoints return this envelope, which wraps an `Error` object, when a request fails.
