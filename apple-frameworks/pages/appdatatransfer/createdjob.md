> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/createdjob](https://developer.apple.com/documentation/appdatatransfer/createdjob)

# CreatedJob

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Object  
**Availability:** App Data Transfer 1.0+

An object that represents a newly created download request.

## Declaration

```
object CreatedJob
```

## Properties

- `parentRequestId` — `string`: For recurring requests, a UUID that identifies the series of requests. For one-time requests, the server doesn’t include this key in the response.
- `requestId` — `string`: A UUID that identifies this request.
- `status` — `string`: `success` if the server created the request; `error` otherwise.
- `statusCheckDelay` — `integer`: The number of seconds to wait before you call [Get recurring request status](get-recurring-request-status.md) or [Get one-time request status](get-one-time-request-status.md).

## See Also

### Request creation

- [Submit request](submit-request.md): Starts preparing someone’s data for download.
- [JobSubmission](jobsubmission.md): An object that describes a submission that requests someone’s data.
- [Resubmit request](resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionRequest](resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
- [ResubmissionResponse](resubmissionresponse.md): An object that represents a resubmitted recurring download request.
