> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewsummarizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewsummarizationsresponse)

# CustomerReviewSummarizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response containing a list of AI-generated review summaries for an app across territories.

## Declaration

```
object CustomerReviewSummarizationsResponse
```

## Properties

- `data` — `[CustomerReviewSummarization]` (required):
- `included` — `[Territory]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [CustomerReviewsResponse](customerreviewsresponse.md): The response body for endpoints that list customer reviews for an app.
- [CustomerReviewResponse](customerreviewresponse.md): The response body for endpoints that read a single customer review for an app.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewSummarization](customerreviewsummarization.md): An AI-generated summary of customer reviews for an app in a specific App Store territory.
