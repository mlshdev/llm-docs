> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/agerange](https://developer.apple.com/documentation/apple_ads/agerange)

# AgeRange

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined target audience to include using the age-range demographic.

## Declaration

```
object AgeRange
```

## Properties

- `maxAge` — `int32`: The dimension for specifying the maximum age for targeting. This field may be `null`.
  **Maximum:** `65`
- `minAge` — `int32`: The dimension for specifying the minimum age for targeting. The minimum value is `18`.
  **Maximum:** `65`

<a id="Discussion"></a>

## Discussion

Use this dimension to limit the age group to target your ad to.

```json
    "age": {
      "included": [
        {
          "minAge": 20,
          "maxAge": 25
        }

```

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
