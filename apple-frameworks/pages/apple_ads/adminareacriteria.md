> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adminareacriteria

# AdminAreaCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The defined targeted audience by administrative area.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object AdminAreaCriteria
```

## Properties

- `included` — `[string]`: The dimension to include targeted users by administrative area. For example, within the United States, administrative area dimensions are states.

  ```json
   "adminArea": {
        "included": [
          "US|CA"
        ]
      },
  ```

<a id="Discussion"></a>

## Discussion

An `adminArea` is a state or the equivalent according to its associated `country`.

Use [Search for Geolocations](search-for-geolocations.md) with `entity` to search for and retrieve geolocations. Then use geotargeting dimensions `country`, `adminArea`, and `locality` in the [TargetingDimensions](targetingdimensions.md) payload with the [Update an Ad Group](update-an-ad-group.md) endpoint.

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): Deprecated. The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): Deprecated. The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): Deprecated. The defined targeted audience according to app downloads.
- [CountryCriteria](countrycriteria.md): Deprecated. The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): Deprecated. The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): Deprecated. The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): Deprecated. The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): Deprecated. The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): Deprecated. The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): Deprecated. The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): Deprecated. The defined targeted audience to include using the gender demographic.
