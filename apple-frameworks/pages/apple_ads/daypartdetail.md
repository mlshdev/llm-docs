> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/daypartdetail](https://developer.apple.com/documentation/apple_ads/daypartdetail)

# DaypartDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience to include by a specific time of day.

## Declaration

```
object DaypartDetail
```

## Properties

- `included` — `[int32]`: The dimension to include targeting criteria for a specific time of day. Numbers ranging from `0` to `167` represent the hours of a week beginning at Sunday 12:00 midnight. For example, the hour beginning Monday at 1:00 a.m. is `25`.

  ```json
  "daypart": {
        "userTime": {
          "included": [
            1,
            3,
            22
          ]
        }
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
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
