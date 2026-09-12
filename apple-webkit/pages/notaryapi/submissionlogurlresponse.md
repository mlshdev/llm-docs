> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlogurlresponse](https://developer.apple.com/documentation/notaryapi/submissionlogurlresponse)

# SubmissionLogURLResponse

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

The notary service’s response to a request for the log information about a completed submission.

## Declaration

```
object SubmissionLogURLResponse
```

## Properties

- `data` — `SubmissionLogURLResponse.Data`: Data that indicates how to get the log information for a particular submission.
- `meta` — `SubmissionLogURLResponse.Meta`: An empty object that you can ignore.

<a id="Discussion"></a>

## Discussion

You receive a structure of this type in response to a call to the [Get Submission Log](get-submission-log.md) endpoint.

## Topics

### Objects

- [SubmissionLogURLResponse.Data](submissionlogurlresponse/data-data.dictionary.md): Data that indicates how to get the log information for a particular submission.
- [SubmissionLogURLResponse.Meta](submissionlogurlresponse/meta-data.dictionary.md): An empty object.

## See Also

### Notarization results

- [Get Submission Status](get-submission-status.md): Fetch the status of a software notarization submission.
- [SubmissionResponse](submissionresponse.md): The notary service’s response to a request for the status of a submission.
- [Get Submission Log](get-submission-log.md): Fetch details about a single completed notarization.
