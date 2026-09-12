> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlogurlresponse/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/notaryapi/submissionlogurlresponse/data-data.dictionary/attributes-data.dictionary)

# SubmissionLogURLResponse.Data.Attributes

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

Information about the log associated with the submission.

## Declaration

```
object SubmissionLogURLResponse.Data.Attributes
```

## Properties

- `developerLogUrl` — `string`: The URL that you use to download the logs for a submission. The URL serves a JSON-encoded file that contains the log information. The URL is valid for only a few hours. If you need the log again later, ask for the URL again by making another call to the [Get Submission Log](../../get-submission-log.md) endpoint.
