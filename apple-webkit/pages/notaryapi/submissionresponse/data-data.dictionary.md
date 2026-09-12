> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionresponse/data-data.dictionary](https://developer.apple.com/documentation/notaryapi/submissionresponse/data-data.dictionary)

# SubmissionResponse.Data

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Information that the service provides about the status of a notarization submission.

## Declaration

```
object SubmissionResponse.Data
```

## Properties

- `attributes` — `SubmissionResponse.Data.Attributes`: Information about the status of a submission.
- `id` — `string`: The unique identifier for this submission. This value matches the value that you provided as a path parameter to the [Get Submission Status](../get-submission-status.md) call that elicited this response.
- `type` — `string`: The resource type.

## Topics

### Objects

- [SubmissionResponse.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Information about the status of a submission.

## See Also

### Objects

- [SubmissionResponse.Meta](meta-data.dictionary.md): An empty object.
