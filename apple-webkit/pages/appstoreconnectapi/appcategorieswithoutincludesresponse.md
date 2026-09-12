> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcategorieswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appcategorieswithoutincludesresponse)

# AppCategoriesWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of App Store categories, without including subcategory resources.

## Declaration

```
object AppCategoriesWithoutIncludesResponse
```

## Properties

- `data` — `[AppCategory]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppCategoriesResponse](appcategoriesresponse.md): The response body for endpoints that list App Store categories.
- [AppCategory](appcategory.md): The data structure that represent an App Categories resource.
- [AppCategoryResponse](appcategoryresponse.md): The response body for endpoints that read a single App Store category.
- [AppCategoryWithoutIncludesResponse](appcategorywithoutincludesresponse.md): A response containing a single App Store category, without including subcategory resources.
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)
