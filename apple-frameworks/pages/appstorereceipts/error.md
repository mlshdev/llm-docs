> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstorereceipts/error

# error

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Object  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

Error information that returns in the response body when a request isn’t successful.

## Declaration

```
object error
```

## Properties

- `code` — `int32` (required): A standard HTTP status code returned in the response body whenever a request isn’t successful due to a general networking issue.

## See Also

### Deprecated

- [verifyReceipt](verify-receipt.md): Deprecated. Send a receipt to the App Store for verification.
- [requestBody](requestbody.md): Deprecated. The JSON contents you submit with the request to the App Store.
- [responseBody](responsebody.md): Deprecated. The JSON data that returns in the response from the App Store.
