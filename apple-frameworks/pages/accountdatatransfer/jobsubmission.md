> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountdatatransfer/jobsubmission](https://developer.apple.com/documentation/accountdatatransfer/jobsubmission)

# JobSubmission

**Interface language:** Data

**Framework:** Account Data Transfer  
**Kind:** Object  
**Availability:** Account Data Transfer 1.0+

An object that describes a submission that requests someone’s data.

## Declaration

```
object JobSubmission
```

## Properties

- `mode` — `string`: Whether you want a one-time download, a daily download for 30 days, or a weekly download for 180 days.
  **Allowed values:** `ONE_TIME`, `DAILY_30`, `WEEKLY_180`

## See Also

### Request creation

- [Submit request](submit-request.md): Starts preparing someone’s data for download.
- [CreatedJob](createdjob.md): An object that represents a newly created download request.
- [Resubmit request](resubmit-request.md): Enqueue the next instance of a recurring request.
- [ResubmissionRequest](resubmissionrequest.md): An object that describes a request to resubmit a recurring download request.
- [ResubmissionResponse](resubmissionresponse.md): An object that represents a resubmitted recurring download request.
