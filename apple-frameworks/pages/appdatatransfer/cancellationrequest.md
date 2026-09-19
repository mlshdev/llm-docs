> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appdatatransfer/cancellationrequest

# CancellationRequest

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Object  
**Availability:** App Data Transfer 1.0+

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
