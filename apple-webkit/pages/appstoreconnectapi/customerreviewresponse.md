> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewresponse](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewresponse)

# CustomerReviewResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that read a single customer review for an app.

## Declaration

```
object CustomerReviewResponse
```

## Properties

- `data` — `CustomerReview` (required): The data structure that represents a `CustomerReviews` resource.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `CustomerReviewResponseV1`, `Territory`

## See Also

### Objects

- [CustomerReviewsResponse](customerreviewsresponse.md): The response body for endpoints that list customer reviews for an app.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewSummarization](customerreviewsummarization.md): An AI-generated summary of customer reviews for an app in a specific App Store territory.
- [CustomerReviewSummarizationsResponse](customerreviewsummarizationsresponse.md): A response containing a list of AI-generated review summaries for an app across territories.
