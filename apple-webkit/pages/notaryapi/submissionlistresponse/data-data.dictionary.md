> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlistresponse/data-data.dictionary](https://developer.apple.com/documentation/notaryapi/submissionlistresponse/data-data.dictionary)

# SubmissionListResponse.Data

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Data that describes one of your team’s previous submissions.

## Declaration

```
object SubmissionListResponse.Data
```

## Properties

- `attributes` — `SubmissionListResponse.Data.Attributes`: Information about a particular submission.
- `id` — `string`: The unique identifier for a submission. This value matches the value that you received in the `id` field that appeared in the response to the [Submit Software](../submit-software.md) call that you used to start the submission.
- `type` — `string`: The resource type.

## Topics

### Objects

- [SubmissionListResponse.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Information about the status of a submission.

## See Also

### Objects

- [SubmissionListResponse.Meta](meta-data.dictionary.md): An empty object.
