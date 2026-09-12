> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/webdomaincategories-swift.type.property](https://developer.apple.com/documentation/managedsettings/shieldsettings/webdomaincategories-swift.type.property)

# webDomainCategories

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the configuration that specifies categories of websites for the system to shield.

## Declaration

```swift
static let webDomainCategories: SettingMetadata<ShieldSettings.ActivityCategoryPolicy<WebDomain>>
```

<a id="discussion"></a>

## Discussion

Use `webDomainCategories` to access the metadata for [webDomainCategories](webdomaincategories-swift.property.md). The default value is [ShieldSettings.ActivityCategoryPolicy.none](activitycategorypolicy/none.md).

## See Also

### Blocking categories of apps and websites

- [ShieldSettings.ActivityCategoryPolicy](activitycategorypolicy.md): Policies available for shielding activities based on their category.
- [applicationCategories](applicationcategories-swift.property.md): Categories of apps for the system to cover with a shielding view.
- [applicationCategories](applicationcategories-swift.type.property.md): The metadata for the configuration that specifies categories of apps for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.property.md): Categories of websites for the system to cover with a shielding view.
