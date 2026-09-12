> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/submissionlistresponse](https://developer.apple.com/documentation/notaryapi/submissionlistresponse)

# SubmissionListResponse

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

The notary service’s response to a request for information about your team’s previous submissions.

## Declaration

```
object SubmissionListResponse
```

## Properties

- `data` — `[SubmissionListResponse.Data]`: An array of objects, each of which describes one of your team’s previous submissions.
- `meta` — `SubmissionListResponse.Meta`: An empty object that you can ignore.

<a id="Discussion"></a>

## Discussion

You receive a structure of this type in response to a call to the [Get Previous Submissions](get-previous-submissions.md) endpoint. The list includes only the 100 most recent submissions.

## Topics

### Objects

- [SubmissionListResponse.Data](submissionlistresponse/data-data.dictionary.md): Data that describes one of your team’s previous submissions.
- [SubmissionListResponse.Meta](submissionlistresponse/meta-data.dictionary.md): An empty object.

## See Also

### History

- [Get Previous Submissions](get-previous-submissions.md): Fetch a list of your team’s previous notarization submissions.
