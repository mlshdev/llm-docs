> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/appdownloadercriteria](https://developer.apple.com/documentation/apple_ads/appdownloadercriteria)

# AppDownloaderCriteria

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The defined targeted audience according to app downloads.

## Declaration

```
object AppDownloaderCriteria
```

## Properties

- `excluded` — `[string]`: The dimension to limit viewing of your ad to users who have not downloaded your app.

  ```json
  {
    "appDownloaders": {
      "excluded": 654327167
    }
  }
  ```
- `included` — `[string]`: The dimension to limit viewing of your ad to users who have downloaded your app.

  ```json
  {
    "appDownloaders": {
      "included": 654327143
   
    }
  }
  ```

<a id="Discussion"></a>

## Discussion

To target all users, don’t include the `AppDownloaderCriteria` dimension in the request payload.

Use the `adamId` of the app you’re promoting in your campaign as an `included`  or `excluded` value. You can obtain your app `adamId` through [Get a Campaign](get-a-campaign.md), [Get all Campaigns](get-all-campaigns.md), or [Search for iOS apps](search-for-ios-apps.md) using the `returnOwnedApps` query.

## See Also

### Audience Refinement

- [TargetingDimensions](targetingdimensions.md): The optional criteria to use with ad groups to narrow the audience that views your ads.
- [AppCategoryCriteria](appcategorycriteria.md): The defined target audience by app category.
- [AdminAreaCriteria](adminareacriteria.md): The defined targeted audience by administrative area.
- [CountryCriteria](countrycriteria.md): The defined targeted audience by country or region.
- [LocalityCriteria](localitycriteria.md): The defined targeted audience by locality.
- [AgeCriteria](agecriteria.md): The defined targeted audience to include using the age demographic.
- [AgeRange](agerange.md): The defined target audience to include using the age-range demographic.
- [DaypartCriteria](daypartcriteria.md): The defined targeted audience to include for a specific time of day.
- [DaypartDetail](daypartdetail.md): The defined targeted audience to include by a specific time of day.
- [DeviceClassCriteria](deviceclasscriteria.md): The defined targeted audience to include by device type.
- [GenderCriteria](gendercriteria.md): The defined targeted audience to include using the gender demographic.
