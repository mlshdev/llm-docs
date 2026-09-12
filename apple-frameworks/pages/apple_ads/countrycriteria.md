> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/countrycriteria](https://developer.apple.com/documentation/apple_ads/countrycriteria)

# CountryCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience by country or region.

## Declaration

```
object CountryCriteria
```

## Properties

- `included` — `[string]`: The dimension to include targeted users by country or region.

  > **Note**

  >  For reports, `countryCriteria` must be the same location as the specified [CountryOrRegion](countryorregion.md).

<a id="Discussion"></a>

## Discussion

Use [Search for Geolocations](search-for-geolocations.md) with `entity` to search for and retrieve geolocations. Then use geotargeting dimensions `country`, `adminArea`, and `locality` in the [TargetingDimensions](targetingdimensions.md) payload with [Create an Ad Group](create-an-ad-group.md)  and [Update an Ad Group](update-an-ad-group.md) endpoints. For the country dimension, use two-letter country codes in ISO 3166-1 alpha-2 country code format. Campaigns that serve multiple countries or regions can’t use geotargeting. Use [UpdateCampaignRequest](updatecampaignrequest.md) to clear geotargeting from a campaign.

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
