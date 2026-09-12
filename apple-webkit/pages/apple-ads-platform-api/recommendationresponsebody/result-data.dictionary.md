> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationresponsebody/result-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationresponsebody/result-data.dictionary)

# RecommendationResponseBody.Result

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Usually an array of recommendation, suggestion, or history objects returned by the endpoint. A single object for the Target CPA suggestion query response.

## Declaration

```
object RecommendationResponseBody.Result
```

<a id="Discussion"></a>

## Discussion

The `result` field holds the recommendation, suggestion, or history objects an endpoint returns. It’s usually an array, with one entry per matched recommendation or suggestion. The single exception is the target CPA suggestion query response ([RecommendationQueryTargetCpaSuggestionResponse](../recommendationquerytargetcpasuggestionresponse.md)), where `result` is a single object rather than a list, since that endpoint always returns exactly one suggestion. The `result` field is absent when the request fails.
