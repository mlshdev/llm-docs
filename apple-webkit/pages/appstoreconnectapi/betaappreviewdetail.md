> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappreviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/betaappreviewdetail)

# BetaAppReviewDetail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Contact information and demo credentials provided to App Store reviewers for beta app review.

## Declaration

```
object BetaAppReviewDetail
```

## Properties

- `attributes` — `BetaAppReviewDetail.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BetaAppReviewDetail.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppReviewDetails`

## Topics

### Objects

- [BetaAppReviewDetail.Attributes](betaappreviewdetail/attributes-data.dictionary.md): Attributes that describe a Beta App Review Details resource.
- [BetaAppReviewDetail.Relationships](betaappreviewdetail/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaAppReviewDetailUpdateRequest](betaappreviewdetailupdaterequest.md): The request body you use to update a Beta App Review Detail.
- [BetaAppReviewDetailResponse](betaappreviewdetailresponse.md): The response body for endpoints that read or modify the beta review contact and demo details for an app.
- [BetaAppReviewDetailWithoutIncludesResponse](betaappreviewdetailwithoutincludesresponse.md): A response containing a single beta app review detail, without related resources.
- [BetaAppReviewDetailsResponse](betaappreviewdetailsresponse.md): A response containing a list of beta app review detail records.
- [AppBetaTestersLinkagesRequest](appbetatesterslinkagesrequest.md): A request body you use to remove beta testers from an app.
- [BetaAppReviewDetailAppLinkageResponse](betaappreviewdetailapplinkageresponse.md)
