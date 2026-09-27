> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/agecriteria

# AgeCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The defined targeted audience to include using the age demographic.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [TargetingDimensions](targetingdimensions.md): Deprecated. The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): Deprecated. The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): Deprecated. The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): Deprecated. The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): Deprecated. The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): Deprecated. The defined targeted audience by locality.
- [AgeRange](agerange.md): Deprecated. The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): Deprecated. The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): Deprecated. The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): Deprecated. The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): Deprecated. The defined targeted audience to include using the gender demographic.
