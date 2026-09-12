> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/originaltransactionidnotfoundretryableerror](https://developer.apple.com/documentation/appstoreserverapi/originaltransactionidnotfoundretryableerror)

# OriginalTransactionIdNotFoundRetryableError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

An error response that indicates the original transaction identifier wasn’t found, but you can try again.

## Declaration

```
object OriginalTransactionIdNotFoundRetryableError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4040006`
- `errorMessage` — `string`: **Allowed values:** `Original transaction id not found. Please try again.`

## See Also

### Errors to retry

- [AccountNotFoundRetryableError](accountnotfoundretryableerror.md): An error response that indicates the App Store account wasn’t found, but you can try again.
- [AppNotFoundRetryableError](appnotfoundretryableerror.md): An error response that indicates the app wasn’t found, but you can try again.
- [GeneralInternalRetryableError](generalinternalretryableerror.md): An error response that indicates an unknown error occurred, but you can try again.
