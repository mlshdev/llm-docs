> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/localitycriteria](https://developer.apple.com/documentation/apple_ads/localitycriteria)

# LocalityCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience by locality.

## Declaration

```
object LocalityCriteria
```

## Properties

- `included` — `[string]`: The dimension to include targeted users by locality. For example, in the United States, a locality dimension is a city.

  This parameter doesn’t support the  `excluded` attribute.

  ```json
  "locality": {
        "included": [
          "US|CA|Cupertino"
        ]
      },
  ```

<a id="Discussion"></a>

## Discussion

A `locality` is a city or the equivalent according to its associated `adminArea`.

Use the [Search for Geolocations](search-for-geolocations.md) endpoint with the `entity` query parameter to search for and retrieve geolocations. Then use geotargeting dimensions `country`, `adminArea`, and `locality` with [Create an Ad Group](create-an-ad-group.md)  and [Update an Ad Group](update-an-ad-group.md) endpoints.

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
