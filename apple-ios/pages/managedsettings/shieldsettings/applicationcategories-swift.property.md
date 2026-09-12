> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/applicationcategories-swift.property](https://developer.apple.com/documentation/managedsettings/shieldsettings/applicationcategories-swift.property)

# applicationCategories

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Categories of apps for the system to cover with a shielding view.

## Declaration

```swift
var applicationCategories: ShieldSettings.ActivityCategoryPolicy<Application>? { get set }
```

<a id="discussion"></a>

## Discussion

When the user launches an application in one of these categories, the system calls your extension that customizes the shield’s appearance. When the user taps on a button the shield displays, the system calls your extension that handles user actions. Your app is exempt from `.all`. If your app doesn’t provide a list of categories to shield, this value is `nil`. Your app can shield up to 50 category tokens and specify up to 50 application tokens exceptions at once.

## See Also

### Blocking categories of apps and websites

- [ShieldSettings.ActivityCategoryPolicy](activitycategorypolicy.md): Policies available for shielding activities based on their category.
- [applicationCategories](applicationcategories-swift.type.property.md): The metadata for the configuration that specifies categories of apps for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.property.md): Categories of websites for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.type.property.md): The metadata for the configuration that specifies categories of websites for the system to shield.
