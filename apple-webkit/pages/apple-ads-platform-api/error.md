> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/error](https://developer.apple.com/documentation/apple-ads-platform-api/error)

# Error

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The standard error envelope that the API returns when a request fails.

## Declaration

```
object Error
```

## Properties

- `code` — `string` (required): The reason the API rejected the request (such as `INVALID_ARGUMENT` or `UNAUTHORIZED`).
- `message` — `string`: A human-readable error summary of what went wrong at the request level.
- `details` — `[ErrorDetail]`: An array of zero or more error details objects that describe specific field-level or request-level violations. See [ErrorDetail](errordetail.md).

<a id="Discussion"></a>

## Discussion

The `Error` object is the standard error envelope that the API returns when a request fails.

Change History endpoints use a separate, ChangeHistory-specific error object, [ErrorMessage](errormessage.md), whose `code` is a closed enum (`BAD_REQUEST`, `NOT_FOUND`, `NOT_AUTHED`) rather than the open string used here.

Check `details` when you need to pinpoint exactly which part of the request was invalid, for example, a specific field value that violated a constraint or a missing required parameter.

<a id="Example"></a>

### Example

```json
{
  "code": "INVALID_ARGUMENT",
  "message": "The request could not be processed because one or more fields failed validation.",
  "details": [
    {
      "code": "FIELD_REQUIRED",
      "message": "campaign.name is required and was not provided for AwayFinder campaign creation."
    }
  ]
}
```

## See Also

### Error Responses

- [ErrorDetail](errordetail.md): Field-level or request-level detail for a specific part of a failed API request.
- [ErrorResponse](errorresponse.md): Certain endpoints return this envelope, which wraps an `Error` object, when a request fails.
