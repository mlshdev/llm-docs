> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinforesponse](https://developer.apple.com/documentation/appstoreconnectapi/appinforesponse)

# AppInfoResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that read or modify an app’s App Store information.

## Declaration

```
object AppInfoResponse
```

## Properties

- `data` — `AppInfo` (required): The resource data.
- `included` — `[*]`: **Allowed types:** `AgeRatingDeclaration`, `AppCategory`, `AppInfoLocalization`, `App`
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppInfo](appinfo.md): The data structure that represent an App Infos resource.
- [AppInfosResponse](appinfosresponse.md): The response body for endpoints that list an app’s App Store information entries.
- [AppInfoUpdateRequest](appinfoupdaterequest.md): The request body you use to update an App Info.
- [AppInfoAppInfoLocalizationsLinkagesResponse](appinfoappinfolocalizationslinkagesresponse.md)
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)
