> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/errormessage/details-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/errormessage/details-data.dictionary)

# ErrorMessage.Details

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single error detail entry describing one part of a failed change history request.

## Declaration

```
object ErrorMessage.Details
```

## Properties

- `code` — `string`: A machine-readable code identifying the specific validation failure. Read-only.
- `message` — `string`: A human-readable description of this detail entry. Read-only.
- `info` — `ErrorMessage.Details.Info`: Additional structured context for this failure. See [ErrorMessage.Details.Info](details-data.dictionary/info-data.dictionary.md). Read-only.

<a id="Discussion"></a>

## Discussion

Each entry in `ErrorMessage`’s `details` array narrows down which part of the request caused the failure. Use these entries, together with the top-level `message`, for diagnostic logging or user-facing error displays. Use the top-level `code` on [ErrorMessage](../errormessage.md) for programmatic error handling.

<a id="Example"></a>

### Example

```json
{
  "code": "MISSING_FIELD",
  "message": "eventTime must be provided.",
  "info": {
    "field": "eventTime"
  }
}
```

## Topics

### Dictionaries

- [ErrorMessage.Details.Info](details-data.dictionary/info-data.dictionary.md): An object (string-to-string map) with additional structured context for a specific validation failure.
