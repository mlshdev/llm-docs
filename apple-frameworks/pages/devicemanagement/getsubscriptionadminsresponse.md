> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/getsubscriptionadminsresponse](https://developer.apple.com/documentation/devicemanagement/getsubscriptionadminsresponse)

# GetSubscriptionAdminsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The response that contains the requested subscription administrators.

## Declaration

```
object GetSubscriptionAdminsResponse
```

## Properties

- `admins` — `[ResponseSubscriptionAdmin]`: The set of requested subscription administrators.
- `nextCursor` — `string`: The cursor for fetching the next page of results.
- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.
- `versionId` — `string`: The current version identifier.

## Topics

### Objects and Data Types

- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.

## See Also

### Response

- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
