> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/getsubscriptionsresponse

# GetSubscriptionsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The response that contains the requested subscriptions.

## Declaration

```
object GetSubscriptionsResponse
```

## Properties

- `subscriptions` — `[ResponseSubscription]`: The set of requested subscriptions.
- `nextCursor` — `string`: The cursor for fetching the next page of results.
- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.
- `versionId` — `string`: The current version identifier.

## Topics

### Objects and Data Types

- [ResponseSubscription](responsesubscription.md): A subscription with its assignment counts.

## See Also

### Response

- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
