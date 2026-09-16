> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/queryresponse/result-data.dictionary

# QueryResponse.Result

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The untyped placeholder item shape for the base `QueryResponse` envelope’s `result` array.

## Declaration

```
object QueryResponse.Result
```

<a id="Discussion"></a>

## Discussion

The `QueryResponse` object is a generic envelope meant to be extended, so its `result` array has no properties defined here. Concrete query responses, such as `CampaignQueryResponse` or `KeywordQueryResponse`, declare their own `result` array typed to the resource they return. No endpoint returns this untyped shape directly.
