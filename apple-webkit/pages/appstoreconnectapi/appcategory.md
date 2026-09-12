> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcategory](https://developer.apple.com/documentation/appstoreconnectapi/appcategory)

# AppCategory

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Categories resource.

## Declaration

```
object AppCategory
```

## Properties

- `attributes` — `AppCategory.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppCategory.Relationships`:
- `type` — `string` (required): **Allowed values:** `appCategories`

## Topics

### Objects

- [AppCategory.Attributes](appcategory/attributes-data.dictionary.md): Attributes that describe an App Categories resource.
- [AppCategory.Relationships](appcategory/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppCategoriesResponse](appcategoriesresponse.md): The response body for endpoints that list App Store categories.
- [AppCategoryResponse](appcategoryresponse.md): The response body for endpoints that read a single App Store category.
- [AppCategoriesWithoutIncludesResponse](appcategorieswithoutincludesresponse.md): A response containing a list of App Store categories, without including subcategory resources.
- [AppCategoryWithoutIncludesResponse](appcategorywithoutincludesresponse.md): A response containing a single App Store category, without including subcategory resources.
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)
