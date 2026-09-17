> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/response/result-data.dictionary

# Response.Result

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Placeholder for the response payload, whose actual shape depends on each endpoint’s concrete result type.

## Declaration

```
object Response.Result
```

<a id="Discussion"></a>

## Discussion

The `Response.Result` object represents the generic `result` field on the base [Response](../response.md) type. Each endpoint returns a more specific type in its place, such as `Campaign` or `UserAccessResult`. See the endpoint’s own documentation for the concrete shape it returns.
