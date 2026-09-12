> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewsresponse](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewsresponse)

# CustomerReviewsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that list customer reviews for an app.

## Declaration

```
object CustomerReviewsResponse
```

## Properties

- `data` — `[CustomerReview]` (required): A list of customer review resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `CustomerReviewResponseV1`, `Territory`

## See Also

### Objects

- [CustomerReviewResponse](customerreviewresponse.md): The response body for endpoints that read a single customer review for an app.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewSummarization](customerreviewsummarization.md): An AI-generated summary of customer reviews for an app in a specific App Store territory.
- [CustomerReviewSummarizationsResponse](customerreviewsummarizationsresponse.md): A response containing a list of AI-generated review summaries for an app across territories.
