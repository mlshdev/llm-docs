> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewdetailresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewdetailresponse)

# BetaAppReviewDetailResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that read or modify the beta review contact and demo details for an app.

## Declaration

```
object BetaAppReviewDetailResponse
```

## Properties

- `data` — `BetaAppReviewDetail` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[App]`:

## See Also

### Related Documentation

- [Read the beta app review details resource of an app](get-v1-apps-_id_-betaappreviewdetail.md): Get the beta app review details for a specific app.

### Objects

- [BetaAppReviewDetail](betaappreviewdetail.md): Contact information and demo credentials provided to App Store reviewers for beta app review.
- [BetaAppReviewDetailUpdateRequest](betaappreviewdetailupdaterequest.md): The request body you use to update a Beta App Review Detail.
- [BetaAppReviewDetailWithoutIncludesResponse](betaappreviewdetailwithoutincludesresponse.md): A response containing a single beta app review detail, without related resources.
- [BetaAppReviewDetailsResponse](betaappreviewdetailsresponse.md): A response containing a list of beta app review detail records.
- [AppBetaTestersLinkagesRequest](appbetatesterslinkagesrequest.md): A request body you use to remove beta testers from an app.
- [BetaAppReviewDetailAppLinkageResponse](betaappreviewdetailapplinkageresponse.md)
