> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreview](https://developer.apple.com/documentation/appstoreconnectapi/customerreview)

# CustomerReview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A customer’s rating and written review of your app on the App Store.

## Declaration

```
object CustomerReview
```

## Properties

- `attributes` — `CustomerReview.Attributes`: The attributes of the customer’s review including its content.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the `CustomerReviews` resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `CustomerReview.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `customerReviews`

## Topics

### Objects

- [CustomerReview.Attributes](customerreview/attributes-data.dictionary.md): The attributes of the customer’s review including its content.
- [CustomerReview.Relationships](customerreview/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [CustomerReviewResponseV1Response](customerreviewresponsev1response.md): The response body for endpoints that create, read, or modify a developer’s response to a customer review.
- [CustomerReviewResponseV1](customerreviewresponsev1.md): A developer’s public reply to a customer review on the App Store.
- [CustomerReviewResponseV1CreateRequest](customerreviewresponsev1createrequest.md): The request body to use to create a response to a customer review.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewResponseLinkageResponse](customerreviewresponselinkageresponse.md)
