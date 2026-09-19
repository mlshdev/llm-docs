> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/accountnotfoundretryableerror

# AccountNotFoundRetryableError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

An error response that indicates the App Store account wasn’t found, but you can try again.

## Declaration

```
object AccountNotFoundRetryableError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4040002`
- `errorMessage` — `string`: **Allowed values:** `Account not found. Please try again.`

## See Also

### Errors to retry

- [AppNotFoundRetryableError](appnotfoundretryableerror.md): An error response that indicates the app wasn’t found, but you can try again.
- [GeneralInternalRetryableError](generalinternalretryableerror.md): An error response that indicates an unknown error occurred, but you can try again.
- [OriginalTransactionIdNotFoundRetryableError](originaltransactionidnotfoundretryableerror.md): An error response that indicates the original transaction identifier wasn’t found, but you can try again.
