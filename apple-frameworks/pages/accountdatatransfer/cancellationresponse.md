> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/cancellationresponse](https://developer.apple.com/documentation/accountdatatransfer/cancellationresponse)

# CancellationResponse

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Object  
**Availability:** Account Data Transfer 1.0+

An object that describes the outcome of canceling a download request.

## Declaration

```
object CancellationResponse
```

## Properties

- `jobStatus` — `string`: The current status of the download request.
  **Allowed values:** `cancelled`
- `status` — `string`: The outcome of the cancellation operation.
  **Allowed values:** `success`, `error`

## See Also

### Cancellation

- [Cancel request](cancel-request.md): Tells the server to stop processing an active request.
- [CancellationRequest](cancellationrequest.md): An object that identifies a one-time request, or an individual instance of a recurring request, to cancel.
