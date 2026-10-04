> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adlistresponse

# AdListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The response to a request that returns a list of ads.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object AdListResponse
```

## Properties

- `data` — `[Ad]`: Response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Request and Response Objects

- [Ad](ad.md): Deprecated. The assignment of a creative to an ad group.
- [AdCreate](adcreate.md): Deprecated. The request to create an ad, and assign a creative to an ad group.
- [AdUpdate](adupdate.md): Deprecated. The request to update an ad.
- [AdResponse](adresponse.md): Deprecated. The response to an ad request.
