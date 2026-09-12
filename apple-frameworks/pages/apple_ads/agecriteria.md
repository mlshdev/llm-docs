> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/agecriteria](https://developer.apple.com/documentation/apple_ads/agecriteria)

# AgeCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience to include using the age demographic.

## Declaration

```
object AgeCriteria
```

## Properties

- `included` — `[AgeRange]`: The dimension to include age-range targeting criteria.

  ```json
  "age": {
        "included": [
          {
            "minAge": 20,
            "maxAge": 25
          }
        ]
      },
  ```

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
