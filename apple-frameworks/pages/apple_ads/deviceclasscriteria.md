> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/deviceclasscriteria](https://developer.apple.com/documentation/apple_ads/deviceclasscriteria)

# DeviceClassCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience to include by device type.

## Declaration

```
object DeviceClassCriteria
```

## Properties

- `included` — `[string]`: The dimension to include the targeting criteria values for device class targeting.

  This parameter doesn’t support the `excluded` attribute.

  ```json
  "deviceClass": {
        "included": [
          "IPAD",
          "IPHONE"
        ]
      },
  ```  
  **Allowed values:** `IPAD`, `IPHONE`

<a id="Discussion"></a>

## Discussion

If you don’t set the `DeviceClassCriteria`, the API targets the currently supported devices by default.

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
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
