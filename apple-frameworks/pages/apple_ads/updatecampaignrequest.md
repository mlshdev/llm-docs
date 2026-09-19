> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/updatecampaignrequest

# UpdateCampaignRequest

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The payload properties to clear geotargeting from a campaign.

## Declaration

```
object UpdateCampaignRequest
```

## Properties

- `campaign` — `CampaignUpdate`: The campaign properties to update.
- `clearGeoTargetingOnCountryOrRegionChange` — `boolean`: The parameter to clear geotargeting from all ad groups in the campaign. To modify `countriesOrRegions` in a campaign, set the value of `clearGeoTargetingOnCountryOrRegionChange` to `true`.

  See the Payload Example: Update a Campaign with Countries or Regions in [Update a Campaign](update-a-campaign.md).  
  **Default:** `false`

## See Also

### Campaign Request and Response Objects

- [Campaign](campaign.md): The response to a request to create and fetch campaigns.
- [CampaignResponse](campaignresponse.md): A container for the campaign response body.
- [Campaign.CountryOrRegionServingStateReasons](campaign/countryorregionservingstatereasons-data.dictionary.md): Reasons why a campaign can’t run.
- [CampaignListResponse](campaignlistresponse.md): The response details of campaign requests.
- [CampaignUpdate](campaignupdate.md): The list of campaign fields that are updatable.
