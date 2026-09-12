> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/appcategorycriteria](https://developer.apple.com/documentation/apple_ads/appcategorycriteria)

# AppCategoryCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.6+

The defined target audience by app category.

## Declaration

```
object AppCategoryCriteria
```

## Properties

- `excluded` — `[integer]`: A value of `100` indicates that you aren’t targeting apps with the same app category as your app.
- `included` — `[integer]`: A value of `100` indicates that you are targeting apps with the same app category as your app.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

The app category targeting dimension is optional and is only applicable to campaigns using a [SupplySource](supplysource.md) of `APPSTORE_PRODUCT_PAGES_BROWSE`. See the [App Store](https://developer.apple.com/app-store/categories/) for more details about categories.

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppDownloaderCriteria](appdownloadercriteria.md): The defined targeted audience according to app downloads.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
