> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appdatatransfer/resubmissionrequest](https://developer.apple.com/documentation/appdatatransfer/resubmissionrequest)

# ResubmissionRequest

**Interface language:** Data

**Framework:** App Data Transfer  
**Kind:** Object  
**Availability:** App Data Transfer 1.0+

An object that describes a request to resubmit a recurring download request.

## Declaration

```
object ResubmissionRequest
```

## Properties

- `parentRequestId` — `string`: A UUID that identifies the recurring request series.
- `requestId` — `string`: A UUID that identifies the most recent download request in the recurring series.

<a id="Overview"></a>

## Overview

Use the `parentRequestId` and `requestId` returned by [Submit request](submit-request.md), or your most recent call to [Resubmit request](resubmit-request.md).

## See Also

### Request creation

- [Submit request](submit-request.md): Starts preparing someone’s data for download.
- [JobSubmission](jobsubmission.md): An object that describes a submission that requests someone’s data.
- [CreatedJob](createdjob.md): An object that represents a newly created download request.
- [Resubmit request](resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionResponse](resubmissionresponse.md): An object that represents a resubmitted recurring download request.
