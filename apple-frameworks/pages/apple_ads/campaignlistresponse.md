> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/campaignlistresponse

# CampaignListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response details of campaign requests.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object CampaignListResponse
```

## Properties

- `data` — `[Campaign]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Campaign Request and Response Objects

- [Campaign](campaign.md): Deprecated. The response to a request to create and fetch campaigns.
- [CampaignResponse](campaignresponse.md): Deprecated. A container for the campaign response body.
- [Campaign.CountryOrRegionServingStateReasons](campaign/countryorregionservingstatereasons-data.dictionary.md): Reasons why a campaign can’t run.
- [CampaignUpdate](campaignupdate.md): Deprecated. The list of campaign fields that are updatable.
- [UpdateCampaignRequest](updatecampaignrequest.md): Deprecated. The payload properties to clear geotargeting from a campaign.
