> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewsummarization](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewsummarization)

# CustomerReviewSummarization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

An AI-generated summary of customer reviews for an app in a specific App Store territory.

## Declaration

```
object CustomerReviewSummarization
```

## Properties

- `attributes` — `CustomerReviewSummarization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `CustomerReviewSummarization.Relationships`:
- `type` — `string` (required): **Allowed values:** `customerReviewSummarizations`

## Topics

### Dictionaries

- [CustomerReviewSummarization.Attributes](customerreviewsummarization/attributes-data.dictionary.md): Attributes that describe a customer review summarization resource.
- [CustomerReviewSummarization.Relationships](customerreviewsummarization/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.

## See Also

### Objects

- [CustomerReviewsResponse](customerreviewsresponse.md): The response body for endpoints that list customer reviews for an app.
- [CustomerReviewResponse](customerreviewresponse.md): The response body for endpoints that read a single customer review for an app.
- [CustomerReview](customerreview.md): A customer’s rating and written review of your app on the App Store.
- [AppCustomerReviewsLinkagesResponse](appcustomerreviewslinkagesresponse.md)
- [CustomerReviewSummarizationsResponse](customerreviewsummarizationsresponse.md): A response containing a list of AI-generated review summaries for an app across territories.
