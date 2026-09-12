> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewsubmissioncreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewsubmissioncreaterequest/data-data.dictionary)

# BetaAppReviewSubmissionCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaAppReviewSubmissionCreateRequest.Data
```

## Properties

- `relationships` — `BetaAppReviewSubmissionCreateRequest.Data.Relationships` (required): The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppReviewSubmissions`

## Topics

### Objects

- [BetaAppReviewSubmissionCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
