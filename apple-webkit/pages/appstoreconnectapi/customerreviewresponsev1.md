> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewresponsev1](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewresponsev1)

# CustomerReviewResponseV1

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A developer’s public reply to a customer review on the App Store.

## Declaration

```
object CustomerReviewResponseV1
```

## Properties

- `attributes` — `CustomerReviewResponseV1.Attributes`: The attributes of the response to the customer’s review, including its content.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the `CustomerReviewResponses` resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `CustomerReviewResponseV1.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `customerReviewResponses`

## Topics

### Objects

- [CustomerReviewResponseV1.Attributes](customerreviewresponsev1/attributes-data.dictionary.md): The attributes of the response to a customer’s review including its content.
- [CustomerReviewResponseV1.Relationships](customerreviewresponsev1/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [CustomerReviewResponseV1Response](customerreviewresponsev1response.md): The response body for endpoints that create, read, or modify a developer’s response to a customer review.
- [CustomerReviewResponseV1CreateRequest](customerreviewresponsev1createrequest.md): The request body to use to create a response to a customer review.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewResponseLinkageResponse](customerreviewresponselinkageresponse.md)
