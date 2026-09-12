> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinfo/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appinfo/attributes-data.dictionary)

# AppInfo.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Attributes that describe an App Infos resource.

## Declaration

```
object AppInfo.Attributes
```

## Properties

- `appStoreAgeRating` — `AppStoreAgeRating`: The app’s age rating as it appears on the App Store for all platforms.
- `appStoreState` — `AppStoreVersionState`: This attribute is deprecated. Use `state` instead.
- `australiaAgeRating` — `string`: **Allowed values:** `FIFTEEN`, `EIGHTEEN`
- `brazilAgeRating` — `BrazilAgeRating`: This attribute is deprecated. Use `brazilAgeRatingV2` instead.
- `brazilAgeRatingV2` — `string`: The app’s age rating as it appears on the App Store in Brazil for all platforms.
  **Allowed values:** `SELF_RATED_L`, `SELF_RATED_TEN`, `SELF_RATED_TWELVE`, `SELF_RATED_FOURTEEN`, `SELF_RATED_SIXTEEN`, `SELF_RATED_EIGHTEEN`, `OFFICIAL_L`, `OFFICIAL_TEN`, `OFFICIAL_TWELVE`, `OFFICIAL_FOURTEEN`, `OFFICIAL_SIXTEEN`, `OFFICIAL_EIGHTEEN`
- `franceAgeRating` — `string`: **Allowed values:** `EIGHTEEN`
- `kidsAgeBand` — `KidsAgeBand`: This attribute is deprecated. Use ‘ageRatingDeclarations#kidsAgeBand’ instead.
- `koreaAgeRating` — `string`: **Allowed values:** `ALL`, `TWELVE`, `FIFTEEN`, `NINETEEN`, `NOT_APPLICABLE`
- `state` — `string`: **Allowed values:** `ACCEPTED`, `DEVELOPER_REJECTED`, `IN_REVIEW`, `PENDING_RELEASE`, `PREPARE_FOR_SUBMISSION`, `READY_FOR_DISTRIBUTION`, `READY_FOR_REVIEW`, `REJECTED`, `REPLACED_WITH_NEW_INFO`, `WAITING_FOR_REVIEW`

## Mentioned In

- [App Store Connect API 3.3 release notes](../app-store-connect-api-3-3-release-notes.md)
- [App Store Connect API 3.7 release notes](../app-store-connect-api-3-7-release-notes.md)
- [App Store Connect API 3.8 release notes](../app-store-connect-api-3-8-release-notes.md)
- [App Store Connect API 4.2 release notes](../app-store-connect-api-4-2-release-notes.md)

<a id="Discussion"></a>

### Discussion

> **Note**

> For more information about `australiaAgeRating` and `koreaAgeRating`, see [Age Ratings in App Store Connect Help](https://developer.apple.com/help/app-store-connect/reference/age-ratings).

## See Also

### Objects

- [AppInfo.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
