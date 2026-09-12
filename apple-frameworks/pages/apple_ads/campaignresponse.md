> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/campaignresponse](https://developer.apple.com/documentation/apple_ads/campaignresponse)

# CampaignResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

A container for the campaign response body.

## Declaration

```
object CampaignResponse
```

## Properties

- `data` — `Campaign`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Campaign Request and Response Objects

- [Campaign](campaign.md): The response to a request to create and fetch campaigns.
- [Campaign.CountryOrRegionServingStateReasons](campaign/countryorregionservingstatereasons-data.dictionary.md): Reasons why a campaign can’t run.
- [CampaignListResponse](campaignlistresponse.md): The response details of campaign requests.
- [CampaignUpdate](campaignupdate.md): The list of campaign fields that are updatable.
- [UpdateCampaignRequest](updatecampaignrequest.md): The payload properties to clear geotargeting from a campaign.
