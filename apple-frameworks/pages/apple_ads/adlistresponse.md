> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adlistresponse

# AdListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The response to a request that returns a list of ads.

## Declaration

```
object AdListResponse
```

## Properties

- `data` — `[Ad]`: Response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Request and Response Objects

- [Ad](ad.md): The assignment of a creative to an ad group.
- [AdCreate](adcreate.md): The request to create an ad, and assign a creative to an ad group.
- [AdUpdate](adupdate.md): The request to update an ad.
- [AdResponse](adresponse.md): The response to an ad request.
