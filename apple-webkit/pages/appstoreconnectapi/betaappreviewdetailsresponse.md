> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewdetailsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewdetailsresponse)

# BetaAppReviewDetailsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response containing a list of beta app review detail records.

## Declaration

```
object BetaAppReviewDetailsResponse
```

## Properties

- `data` — `[BetaAppReviewDetail]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[App]`:

## See Also

### Related Documentation

- [List beta app review details](get-v1-betaappreviewdetails.md): Find and list beta app review details for all apps.

### Objects

- [BetaAppReviewDetail](betaappreviewdetail.md): Contact information and demo credentials provided to App Store reviewers for beta app review.
- [BetaAppReviewDetailUpdateRequest](betaappreviewdetailupdaterequest.md): The request body you use to update a Beta App Review Detail.
- [BetaAppReviewDetailResponse](betaappreviewdetailresponse.md): The response body for endpoints that read or modify the beta review contact and demo details for an app.
- [BetaAppReviewDetailWithoutIncludesResponse](betaappreviewdetailwithoutincludesresponse.md): A response containing a single beta app review detail, without related resources.
- [AppBetaTestersLinkagesRequest](appbetatesterslinkagesrequest.md): A request body you use to remove beta testers from an app.
- [BetaAppReviewDetailAppLinkageResponse](betaappreviewdetailapplinkageresponse.md)
