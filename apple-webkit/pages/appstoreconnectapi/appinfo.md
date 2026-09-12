> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinfo](https://developer.apple.com/documentation/appstoreconnectapi/appinfo)

# AppInfo

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Infos resource.

## Declaration

```
object AppInfo
```

## Properties

- `attributes` — `AppInfo.Attributes`: The resource’s attributes.
- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppInfo.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appInfos`

## Topics

### Objects

- [AppInfo.Attributes](appinfo/attributes-data.dictionary.md): Attributes that describe an App Infos resource.
- [AppInfo.Relationships](appinfo/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppInfoResponse](appinforesponse.md): The response body for endpoints that read or modify an app’s App Store information.
- [AppInfosResponse](appinfosresponse.md): The response body for endpoints that list an app’s App Store information entries.
- [AppInfoUpdateRequest](appinfoupdaterequest.md): The request body you use to update an App Info.
- [AppInfoAppInfoLocalizationsLinkagesResponse](appinfoappinfolocalizationslinkagesresponse.md)
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)
