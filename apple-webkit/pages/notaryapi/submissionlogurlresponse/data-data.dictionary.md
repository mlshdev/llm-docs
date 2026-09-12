> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlogurlresponse/data-data.dictionary](https://developer.apple.com/documentation/notaryapi/submissionlogurlresponse/data-data.dictionary)

# SubmissionLogURLResponse.Data

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Data that indicates how to get the log information for a particular submission.

## Declaration

```
object SubmissionLogURLResponse.Data
```

## Properties

- `attributes` — `SubmissionLogURLResponse.Data.Attributes`: Information about the log associated with the submission.
- `id` — `string`: The unique identifier for this submission. This value matches the value that you provided as a path parameter to the [Get Submission Log](../get-submission-log.md) call that elicited this response.
- `type` — `string`: The resource type.

## Topics

### Objects

- [SubmissionLogURLResponse.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Information about the log associated with the submission.

## See Also

### Objects

- [SubmissionLogURLResponse.Meta](meta-data.dictionary.md): An empty object.
