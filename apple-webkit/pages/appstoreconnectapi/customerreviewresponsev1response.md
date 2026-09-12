> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewresponsev1response](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewresponsev1response)

# CustomerReviewResponseV1Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that create, read, or modify a developer’s response to a customer review.

## Declaration

```
object CustomerReviewResponseV1Response
```

## Properties

- `data` — `CustomerReviewResponseV1` (required): The data structure that represents a `CustomerReviewResponses` resource.
- `included` — `[CustomerReview]`: The requested relationship data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects and types

- [CustomerReviewResponseV1](customerreviewresponsev1.md): A developer’s public reply to a customer review on the App Store.
- [CustomerReviewResponseV1CreateRequest](customerreviewresponsev1createrequest.md): The request body to use to create a response to a customer review.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewResponseLinkageResponse](customerreviewresponselinkageresponse.md)
