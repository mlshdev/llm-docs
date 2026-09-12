> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionresponse](https://developer.apple.com/documentation/notaryapi/submissionresponse)

# SubmissionResponse

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

The notary service’s response to a request for the status of a submission.

## Declaration

```
object SubmissionResponse
```

## Properties

- `data` — `SubmissionResponse.Data`: Data that describes the status of the submission request.
- `meta` — `SubmissionResponse.Meta`: An empty object that you can ignore.

<a id="Discussion"></a>

## Discussion

You receive a structure of this type in response to a call to the [Get Submission Status](get-submission-status.md) endpoint.

## Topics

### Objects

- [SubmissionResponse.Data](submissionresponse/data-data.dictionary.md): Information that the service provides about the status of a notarization submission.
- [SubmissionResponse.Meta](submissionresponse/meta-data.dictionary.md): An empty object.

## See Also

### Notarization results

- [Get Submission Status](get-submission-status.md): Fetch the status of a software notarization submission.
- [Get Submission Log](get-submission-log.md): Fetch details about a single completed notarization.
- [SubmissionLogURLResponse](submissionlogurlresponse.md): The notary service’s response to a request for the log information about a completed submission.
