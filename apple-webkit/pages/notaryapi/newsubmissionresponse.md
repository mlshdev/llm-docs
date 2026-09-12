> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/notaryapi/newsubmissionresponse](https://developer.apple.com/documentation/notaryapi/newsubmissionresponse)

# NewSubmissionResponse

**Interface language:** Data

**Framework:** Notary API  
**Kind:** Object  
**Availability:** Notary API 2.0.0+

The notary service’s response to a software submission.

## Declaration

```
object NewSubmissionResponse
```

## Properties

- `data` — `NewSubmissionResponse.Data`: Data that describes the result of the submission request.
- `meta` — `NewSubmissionResponse.Meta`: An empty object that you can ignore.

<a id="Discussion"></a>

## Discussion

You receive a structure of this type in response to a call to the [Submit Software](submit-software.md) endpoint. Use the temporary security credentials this response contains to make a call to Amazon S3 to upload your software.

## Topics

### Objects

- [NewSubmissionResponse.Data](newsubmissionresponse/data-data.dictionary.md): Information that the notary service provides for uploading your software for notarization and tracking the submission.
- [NewSubmissionResponse.Meta](newsubmissionresponse/meta-data.dictionary.md): An empty object.

## See Also

### Software submission

- [Submit Software](submit-software.md): Start the process of uploading a new version of your software to the notary service.
- [NewSubmissionRequest](newsubmissionrequest.md): Data that you provide when starting a submission to the notary service.
