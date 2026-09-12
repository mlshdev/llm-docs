> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/applicationcategories-swift.type.property](https://developer.apple.com/documentation/managedsettings/shieldsettings/applicationcategories-swift.type.property)

# applicationCategories

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the configuration that specifies categories of apps for the system to cover with a shielding view.

## Declaration

```swift
static let applicationCategories: SettingMetadata<ShieldSettings.ActivityCategoryPolicy<Application>>
```

<a id="discussion"></a>

## Discussion

The default value is [ShieldSettings.ActivityCategoryPolicy.none](activitycategorypolicy/none.md).

## See Also

### Blocking categories of apps and websites

- [ShieldSettings.ActivityCategoryPolicy](activitycategorypolicy.md): Policies available for shielding activities based on their category.
- [applicationCategories](applicationcategories-swift.property.md): Categories of apps for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.property.md): Categories of websites for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.type.property.md): The metadata for the configuration that specifies categories of websites for the system to shield.
