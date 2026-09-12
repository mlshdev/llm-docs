> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcategoriesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appcategoriesresponse)

# AppCategoriesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that list App Store categories.

## Declaration

```
object AppCategoriesResponse
```

## Properties

- `data` — `[AppCategory]` (required):
- `included` — `[AppCategory]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppCategory](appcategory.md): The data structure that represent an App Categories resource.
- [AppCategoryResponse](appcategoryresponse.md): The response body for endpoints that read a single App Store category.
- [AppCategoriesWithoutIncludesResponse](appcategorieswithoutincludesresponse.md): A response containing a list of App Store categories, without including subcategory resources.
- [AppCategoryWithoutIncludesResponse](appcategorywithoutincludesresponse.md): A response containing a single App Store category, without including subcategory resources.
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)
