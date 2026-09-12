> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/response](https://developer.apple.com/documentation/apple-ads-platform-api/response)

# Response

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Base response wrapper used by all response types.

## Declaration

```
object Response
```

## Properties

- `result` — `Response.Result`: The response payload. Type depends on the specific response subtype. See [Response.Result](response/result-data.dictionary.md). Absent when the request fails.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The `Response` object is the base response wrapper used across all response types in the Apple Ads Platform API.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": "123456789",
    "name": "AwayFinder Campaign"
  }
}
```

## Topics

### Dictionaries

- [Response.Result](response/result-data.dictionary.md): Placeholder for the response payload, whose actual shape depends on each endpoint’s concrete result type.
