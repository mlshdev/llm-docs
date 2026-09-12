> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/newsubmissionresponse/data-data.dictionary](https://developer.apple.com/documentation/notaryapi/newsubmissionresponse/data-data.dictionary)

# NewSubmissionResponse.Data

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Information that the notary service provides for uploading your software for notarization and tracking the submission.

## Declaration

```
object NewSubmissionResponse.Data
```

## Properties

- `attributes` — `NewSubmissionResponse.Data.Attributes`: Information that you use to upload your software to Amazon S3.
- `id` — `string`: A unique identifier for this submission. Use this value to track the status of your submission. For example, you use it as the `submissionID` parameter in the [Get Submission Status](../get-submission-status.md) call, or to match against the `id` field in the response from the [Get Previous Submissions](../get-previous-submissions.md) call.
- `type` — `string`: The resource type.

## Topics

### Objects

- [NewSubmissionResponse.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Information that you use to upload your software for notarization.

## See Also

### Objects

- [NewSubmissionResponse.Meta](meta-data.dictionary.md): An empty object.
