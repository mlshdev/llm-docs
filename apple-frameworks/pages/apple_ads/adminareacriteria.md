> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/adminareacriteria](https://developer.apple.com/documentation/apple_ads/adminareacriteria)

# AdminAreaCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience by administrative area.

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

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
