> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/resubmissionresponse](https://developer.apple.com/documentation/appdatatransfer/resubmissionresponse)

# ResubmissionResponse

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Object  
**Availability:** App Data Transfer 1.0+

An object that represents a resubmitted recurring download request.

## Declaration

```
object ResubmissionResponse
```

## Properties

- `parentRequestId` — `string`: A UUID that identifies the recurring request series.
- `requestId` — `string`: A UUID that identifies the new request.
- `status` — `string`: `success` if the server resubmitted the request; `error` otherwise.
- `statusCheckDelay` — `integer`: The number of seconds to wait before you call [Get recurring request status](get-recurring-request-status.md).

## See Also

### Request creation

- [Submit request](submit-request.md): Starts preparing someone’s data for download.
- [JobSubmission](jobsubmission.md): An object that describes a submission that requests someone’s data.
- [CreatedJob](createdjob.md): An object that represents a newly created download request.
- [Resubmit request](resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionRequest](resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
