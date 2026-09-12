> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/gendercriteria](https://developer.apple.com/documentation/apple_ads/gendercriteria)

# GenderCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience to include using the gender demographic.

## Declaration

```
object GenderCriteria
```

## Properties

- `included` — `[string]`: The dimension to include targeting criteria values for [Gender](gender.md). To specify all genders, set this to `NULL`.

  ```json
  "gender": {
        "included": [
          "F",
          "M"
        ]
      },
  ```  
  **Allowed values:** `F`, `M`

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
