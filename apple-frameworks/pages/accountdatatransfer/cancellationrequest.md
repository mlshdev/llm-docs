> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/cancellationrequest](https://developer.apple.com/documentation/accountdatatransfer/cancellationrequest)

# CancellationRequest

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Object  
**Availability:** Account Data Transfer 1.0+

An object that identifies a one-time request, or an individual instance of a recurring request, to cancel.

## Declaration

```
object CancellationRequest
```

## Properties

- `requestId` — `string`: An identifier for the request to cancel. For a one-time request, use the request’s UUID. For a recurring request, use the parentRequest’s UUID.

## See Also

### Cancellation

- [Cancel request](cancel-request.md): Tells the server to stop processing an active request.
- [CancellationResponse](cancellationresponse.md): An object that describes the outcome of canceling a download request.
