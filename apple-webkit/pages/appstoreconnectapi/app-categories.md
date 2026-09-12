> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-categories](https://developer.apple.com/documentation/appstoreconnectapi/app-categories)

# App Categories

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Get App Store categories and subcategories for apps.

<a id="overview"></a>

## Overview

`appCategories` provides read-only information that includes the list of choices for an app’s App Store category, subcategory, and secondary category.

To update your app’s categories, use the [App Infos](app-infos.md) resource. For more information about categories, see [Choosing a Category](https://developer.apple.com/app-store/categories/).

## Topics

### Listing Categories and Subcategories

- [List app categories](get-v1-appcategories.md): List all categories on the App Store, including the category and subcategory hierarchy.
- [List all subcategories for an app category](get-v1-appcategories-_id_-subcategories.md): List all App Store subcategories that belong to a specific category.
- [List subcategory IDs for an app category](get-v1-appcategories-_id_-relationships-subcategories.md)

### Reading App Category Information

- [Read app category information](get-v1-appcategories-_id_.md): Get a specific app category.
- [Read the parent information of an app category](get-v1-appcategories-_id_-parent.md): Get the App Store category to which a specific subcategory belongs.
- [Get the parent category ID for an app category](get-v1-appcategories-_id_-relationships-parent.md)

### Objects

- [AppCategoriesResponse](appcategoriesresponse.md): The response body for endpoints that list App Store categories.
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

## See Also

### Managing Categories and Age Declarations

- [Age Ratings](age-ratings.md): Read and update age ratings and declarations for your app.
