> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewdetailupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewdetailupdaterequest)

# BetaAppReviewDetailUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to update a Beta App Review Detail.

## Declaration

```
object BetaAppReviewDetailUpdateRequest
```

## Properties

- `data` — `BetaAppReviewDetailUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BetaAppReviewDetailUpdateRequest.Data](betaappreviewdetailupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaAppReviewDetail](betaappreviewdetail.md): Contact information and demo credentials provided to App Store reviewers for beta app review.
- [BetaAppReviewDetailResponse](betaappreviewdetailresponse.md): The response body for endpoints that read or modify the beta review contact and demo details for an app.
- [BetaAppReviewDetailWithoutIncludesResponse](betaappreviewdetailwithoutincludesresponse.md): A response containing a single beta app review detail, without related resources.
- [BetaAppReviewDetailsResponse](betaappreviewdetailsresponse.md): A response containing a list of beta app review detail records.
- [AppBetaTestersLinkagesRequest](appbetatesterslinkagesrequest.md): A request body you use to remove beta testers from an app.
- [BetaAppReviewDetailAppLinkageResponse](betaappreviewdetailapplinkageresponse.md)
