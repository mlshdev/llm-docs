> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territoryavailability/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/territoryavailability/attributes-data.dictionary)

# TerritoryAvailability.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The attributes that describe a territory availability resource.

## Declaration

```
object TerritoryAvailability.Attributes
```

## Properties

- `available` — `boolean`:
- `contentStatuses` — `[string]`: **Allowed values:** `AVAILABLE`, `AVAILABLE_FOR_PREORDER_ON_DATE`, `PROCESSING_TO_NOT_AVAILABLE`, `PROCESSING_TO_AVAILABLE`, `PROCESSING_TO_PRE_ORDER`, `AVAILABLE_FOR_SALE_UNRELEASED_APP`, `PREORDER_ON_UNRELEASED_APP`, `AVAILABLE_FOR_PREORDER`, `MISSING_RATING`, `CANNOT_SELL_RESTRICTED_RATING`, `BRAZIL_REQUIRED_TAX_ID`, `BRAZIL_GAMBLING_NOT_VERIFIED`, `MISSING_GRN`, `UNVERIFIED_GRN`, `ICP_NUMBER_INVALID`, `ICP_NUMBER_MISSING`, `TRADER_STATUS_NOT_PROVIDED`, `TRADER_STATUS_VERIFICATION_FAILED`, `TRADER_STATUS_VERIFICATION_STATUS_MISSING`, `CANNOT_SELL_SEVENTEEN_PLUS_APPS`, `CANNOT_SELL_SEXUALLY_EXPLICIT`, `CANNOT_SELL_NON_IOS_GAMES`, `CANNOT_SELL_SEVENTEEN_PLUS_GAMES`, `CANNOT_SELL_CASINO`, `CANNOT_SELL_CASINO_WITHOUT_GRAC`, `CANNOT_SELL_CASINO_WITHOUT_AGE_VERIFICATION`, `CANNOT_SELL_ADULT_ONLY`, `CANNOT_SELL_GAMBLING_CONTESTS`, `CANNOT_SELL_GAMBLING`, `CANNOT_SELL_CONTESTS`, `CANNOT_SELL_NINETEEN_PLUS_WITHOUT_GRAC`, `CANNOT_SELL`, `CANNOT_SELL_FREQUENT_INTENSE_GAMBLING`, `CANNOT_SELL_FREQUENT_INTENSE_ALCOHOL_TOBACCO_DRUGS`, `CANNOT_SELL_FREQUENT_INTENSE_VIOLENCE`, `CANNOT_SELL_FREQUENT_INTENSE_SEXUAL_CONTENT_NUDITY`, `CANNOT_SELL_INFREQUENT_MILD_ALCOHOL_TOBACCO_DRUGS`, `CANNOT_SELL_INFREQUENT_MILD_SEXUAL_CONTENT_NUDITY`, `CANNOT_SELL_FREQUENT_INTENSE`, `CANNOT_SELL_FREQUENT_INTENSE_WITHOUT_GRAC`, `CANNOT_SELL_FREQUENT_GAMBLING`, `CANNOT_SELL_FREQUENT_ALCOHOL_TOBACCO_DRUGS`, `CANNOT_SELL_FREQUENT_VIOLENCE`, `CANNOT_SELL_FREQUENT_SEXUAL_CONTENT_NUDITY`, `CANNOT_SELL_INFREQUENT_ALCOHOL_TOBACCO_DRUGS`, `CANNOT_SELL_INFREQUENT_SEXUAL_CONTENT_NUDITY`, `CANNOT_SELL_FREQUENT`, `CANNOT_SELL_FREQUENT_WITHOUT_GRAC`
- `preOrderEnabled` — `boolean`:
- `preOrderPublishDate` — `date`:
- `releaseDate` — `date`:

## Mentioned In

- [App Store Connect API 3.6 release notes](../app-store-connect-api-3-6-release-notes.md)
- [App Store Connect API 3.8 release notes](../app-store-connect-api-3-8-release-notes.md)

<a id="Discussion"></a>

## Discussion

To learn more about `ICP_NUMBER_INVALID` and `ICP_NUMBER_MISSING`, see the “Availability in China mainland” section in [App Store Connect Help](https://developer.apple.com/help/app-store-connect/reference/app-information).

## See Also

### Objects

- [TerritoryAvailability.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
