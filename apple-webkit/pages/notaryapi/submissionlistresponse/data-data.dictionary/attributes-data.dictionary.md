> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlistresponse/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/notaryapi/submissionlistresponse/data-data.dictionary/attributes-data.dictionary)

# SubmissionListResponse.Data.Attributes

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Information about the status of a submission.

## Declaration

```
object SubmissionListResponse.Data.Attributes
```

## Properties

- `createdDate` — `string`: The date that you started the submission process, given in ISO 8601 format, like `2022-06-08T01:38:09.498Z`.
- `name` — `string`: The name that you specified in the `submissionName` field of the [Submit Software](../../submit-software.md) call when you started the submission.
- `status` — `string`: The status of the submission. The associated string contains one of the following: `Accepted`, `In Progress`, `Invalid`, or `Rejected`.
